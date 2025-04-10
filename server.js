import express from "express"
import cors from "cors"
import bcrypt from "bcryptjs"
import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { GoogleGenerativeAI } from "@google/generative-ai"

// Load environment variables
dotenv.config()

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Initialize Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // Replace with "gemini-2.0-flash" if confirmed


// Initialize Express app
const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// JWT secret
const JWT_SECRET = process.env.SUPABASE_JWT_SECRET || "your-secret-key"

// Routes
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" })
    }

    // Check if user already exists
    const { data: existingUser } = await supabase.from("users").select("*").eq("email", email).single()

    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Insert user into database
    const { data: newUser, error } = await supabase
      .from("users")
      .insert([{ name, email, password: hashedPassword }])
      .select()

    if (error) {
      console.error("Error creating user:", error)
      return res.status(500).json({ success: false, message: "Error creating user" })
    }

    // Create JWT token
    const user = newUser[0]
    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: "7d" })

    // Return success with user data (excluding password)
    const { password: _, ...userWithoutPassword } = user
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: userWithoutPassword,
      token,
    })
  } catch (error) {
    console.error("Server error:", error)
    return res.status(500).json({ success: false, message: "Server error" })
  }
})

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" })
    }

    // Find user by email
    const { data: user, error } = await supabase.from("users").select("*").eq("email", email).single()

    if (error || !user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" })
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid email or password" })
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: "7d" })

    // Return success with user data (excluding password)
    const { password: _, ...userWithoutPassword } = user
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: userWithoutPassword,
      token,
    })
  } catch (error) {
    console.error("Server error:", error)
    return res.status(500).json({ success: false, message: "Server error" })
  }
})

// Protected route example
app.get("/api/user", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" })
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET)

    // Get user data
    const { data: user, error } = await supabase
      .from("users")
      .select("id, name, email, created_at")
      .eq("id", decoded.id)
      .single()

    if (error || !user) {
      return res.status(404).json({ success: false, message: "User not found" })
    }

    return res.status(200).json({ success: true, user })
  } catch (error) {
    console.error("Server error:", error)
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, message: "Invalid token" })
    }
    return res.status(500).json({ success: false, message: "Server error" })
  }
})

// Save property route
app.post("/api/save-property", async (req, res) => {
  try {
    const { propertyId } = req.body
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" })
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET)

    // Check if property is already saved
    const { data: existingSave } = await supabase
      .from("saved_properties")
      .select("*")
      .eq("user_id", decoded.id)
      .eq("property_id", propertyId)
      .single()

    if (existingSave) {
      // If already saved, remove it (toggle functionality)
      const { error } = await supabase
        .from("saved_properties")
        .delete()
        .eq("user_id", decoded.id)
        .eq("property_id", propertyId)

      if (error) {
        return res.status(500).json({ success: false, message: "Error removing saved property" })
      }

      return res.status(200).json({ success: true, message: "Property removed from saved list", saved: false })
    } else {
      // Save the property
      const { error } = await supabase
        .from("saved_properties")
        .insert([{ user_id: decoded.id, property_id: propertyId }])

      if (error) {
        return res.status(500).json({ success: false, message: "Error saving property" })
      }

      return res.status(200).json({ success: true, message: "Property saved successfully", saved: true })
    }
  } catch (error) {
    console.error("Server error:", error)
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, message: "Invalid token" })
    }
    return res.status(500).json({ success: false, message: "Server error" })
  }
})

// Get saved properties
app.get("/api/saved-properties", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" })
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET)

    // Get saved properties
    const { data: savedProperties, error } = await supabase
      .from("saved_properties")
      .select("property_id")
      .eq("user_id", decoded.id)

    if (error) {
      return res.status(500).json({ success: false, message: "Error fetching saved properties" })
    }

    return res.status(200).json({
      success: true,
      savedProperties: savedProperties.map((item) => item.property_id),
    })
  } catch (error) {
    console.error("Server error:", error)
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, message: "Invalid token" })
    }
    return res.status(500).json({ success: false, message: "Server error" })
  }
})

// Real Estate Chatbot Route with Gemini and Dynamic Location Detection
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ success: false, message: "Message is required" });
    }

    const lowerMessage = message.toLowerCase();
    let response = "";

    // Define the system prompt for Gemini
    const systemPrompt = `
      You are a knowledgeable real estate agent assisting users in finding properties in Mumbai and surrounding areas. 
      You have expertise in price trends, property types, and local markets. Use the following data from the database when specific locations or property details are requested. 
      Respond naturally and helpfully, providing insights on price trends when relevant. 
      If a user asks for property recommendations, fetch and include specific properties from the database in your response based on the mentioned location.
    `;

    // List of known locations from your properties (case-insensitive)
    const knownLocations = [
      "bandra", "juhu", "goregaon", "andheri", "bandra kurla complex", "worli", 
      "powai", "lonavala", "malad", "colaba", "lower parel", "karjat"
    ];

    // Check for recommendation requests with a location
    if (lowerMessage.includes("recommend") || lowerMessage.includes("find") || lowerMessage.includes("property in")) {
      // Extract potential location from the message
      const detectedLocation = knownLocations.find((loc) => lowerMessage.includes(loc));
      
      if (detectedLocation) {
        const { data: properties, error } = await supabase
          .from("properties")
          .select("title, location, price, type, status, bedrooms, bathrooms, area")
          .ilike("location", `%${detectedLocation}%`)
          .limit(3);

        if (error) {
          console.error("Error fetching properties:", error);
          response = `Sorry, I couldn't fetch properties for ${detectedLocation} right now. Try again later!`;
        } else if (properties.length > 0) {
          const propertyList = properties
            .map(
              (p) =>
                `- ${p.title} (${p.price}) - ${p.type} for ${p.status}, ${p.bedrooms || "N/A"} bedrooms, ${p.area} at ${p.location}`
            )
            .join("\n");
          response = `Here are some property recommendations in ${detectedLocation}:\n${propertyList}\nWould you like more details about any of these or information on price trends in ${detectedLocation}?`;
        } else {
          response = `I couldn’t find any properties in ${detectedLocation} right now. Would you like suggestions for nearby areas?`;
        }
      } else {
        response = "Please specify a location (e.g., Bandra, Juhu, Andheri) so I can recommend properties for you!";
      }
    } else {
      // Use Gemini for general responses with context from the database
      const { data: allProperties, error } = await supabase
        .from("properties")
        .select("title, location, price, type, status");

      if (error) {
        console.error("Error fetching properties for context:", error);
      }

      const propertyContext = allProperties
        ? allProperties
            .map((p) => `${p.title} (${p.price}) - ${p.type} for ${p.status} in ${p.location}`)
            .join("\n")
        : "No property data available.";

      // Prepare the prompt for Gemini
      const prompt = `${systemPrompt}\n\nUser message: "${message}"\nAvailable properties:\n${propertyContext}`;

      // Call Gemini API
      const result = await model.generateContent(prompt);
      const geminiResponse = await result.response;
      response = geminiResponse.text().trim();
    }

    // Fallback keyword-based responses if Gemini fails or for specific cases
    if (!response) {
      if (lowerMessage.includes("property") || lowerMessage.includes("home") || lowerMessage.includes("apartment")) {
        if (lowerMessage.includes("sale")) {
          response = "Looking for properties for sale? We have many options! Could you specify a location or budget?";
        } else if (lowerMessage.includes("rent")) {
          response = "Interested in rentals? Tell me about your preferred location or budget!";
        } else {
          response = "Would you like properties for sale or rent? Please tell me more about what you're looking for!";
        }
      } else if (lowerMessage.includes("location") || lowerMessage.includes("area")) {
        response = "Please specify which location in Mumbai you're interested in (e.g., Bandra, Juhu, Powai)!";
      } else if (lowerMessage.includes("budget") || lowerMessage.includes("price")) {
        response = "What's your budget range? I can find properties that match your needs!";
      } else if (lowerMessage.includes("contact") || lowerMessage.includes("agent")) {
        response = "Would you like to speak to an agent? I can arrange that! Please provide your preferred contact method.";
      } else if (lowerMessage.includes("list") || lowerMessage.includes("available")) {
        response = "I can list available properties! Please tell me your preferred type (apartment, villa, etc.) or location.";
      } else {
        response = "I'm here to help you find properties! How can I assist you today?";
      }
    }

    return res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("Chatbot error:", error);
    return res.status(500).json({ success: false, message: "Chatbot error occurred" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
