// Property data
const properties = [
    {
      id: 1,
      title: "Luxury Apartment in Bandra",
      location: "Bandra West, Mumbai",
      price: "₹4.5 Cr",
      type: "apartment",
      status: "sale",
      bedrooms: 3,
      bathrooms: 3,
      area: "2200 sq ft",
      features: ["Swimming Pool", "Gym", "24x7 Security", "Power Backup"],
      description: "Elegant 3BHK apartment with stunning sea view in a premium society with world-class amenities.",
      images: ["bandra 1.svg", "bandra 2.svg", "bandra 3.svg", "bandra 4.svg"],
      agent: 1,
      coordinates: { lat: 19.0596, lng: 72.8295 },
      nearbyPlaces: [
        { name: "Holy Family Hospital", type: "hospital", distance: "0.8 km" },
        { name: "St. Stanislaus High School", type: "school", distance: "1.2 km" },
        { name: "Bandra Police Station", type: "police", distance: "1.5 km" },
        { name: "Chhatrapati Shivaji International Airport", type: "airport", distance: "12 km" },
      ],
    },
    {
      id: 2,
      title: "Sea-facing Villa in Juhu",
      location: "Juhu Beach, Mumbai",
      price: "₹12 Cr",
      type: "villa",
      status: "sale",
      bedrooms: 4,
      bathrooms: 5,
      area: "5000 sq ft",
      features: ["Private Garden", "Terrace", "Servant Quarters", "Smart Home"],
      description: "Luxurious 4BHK villa with breathtaking sea views, modern architecture, and premium finishes.",
      images: ["juhu 1.svg", "juhu 2.svg", "juhu 4.svg"],
      agent: 2,
      coordinates: { lat: 19.0883, lng: 72.8264 },
      nearbyPlaces: [
        { name: "Kokilaben Dhirubhai Ambani Hospital", type: "hospital", distance: "3.5 km" },
        { name: "Jamnabai Narsee School", type: "school", distance: "2.1 km" },
        { name: "Juhu Police Station", type: "police", distance: "1.0 km" },
        { name: "Chhatrapati Shivaji International Airport", type: "airport", distance: "8 km" },
      ],
    },
    {
      id: 3,
      title: "Residential Plot in Goregaon",
      location: "Goregaon East, Mumbai",
      price: "₹2.8 Cr",
      type: "plot",
      status: "sale",
      area: "2400 sq ft",
      features: ["Corner Plot", "Ready for Construction", "Near Highway"],
      description: "Prime residential plot with excellent connectivity and all utilities available.",
      images: ["3.svg", "12.svg", "13.svg"],
      agent: 3,
      coordinates: { lat: 19.1663, lng: 72.8526 },
      nearbyPlaces: [
        { name: "Lifeline Hospital", type: "hospital", distance: "2.2 km" },
        { name: "Ryan International School", type: "school", distance: "1.8 km" },
        { name: "Goregaon Police Station", type: "police", distance: "1.3 km" },
        { name: "Chhatrapati Shivaji International Airport", type: "airport", distance: "15 km" },
      ],
    },
    {
      id: 4,
      title: "2BHK Apartment in Andheri",
      location: "Andheri East, Mumbai",
      price: "₹1.8 Cr",
      type: "apartment",
      status: "sale",
      bedrooms: 2,
      bathrooms: 2,
      area: "1050 sq ft",
      features: ["Modular Kitchen", "Children's Play Area", "Club House"],
      description: "Well-designed 2BHK apartment in a gated community with modern amenities.",
      images: ["andheri 1.svg", "andheri 2.svg", "andheri 3.svg", "andheri 4.svg"],
      agent: 1,
      coordinates: { lat: 19.1136, lng: 72.8697 },
      nearbyPlaces: [
        { name: "Seven Hills Hospital", type: "hospital", distance: "3.0 km" },
        { name: "Holy Angels School", type: "school", distance: "1.5 km" },
        { name: "Andheri Police Station", type: "police", distance: "2.1 km" },
        { name: "Chhatrapati Shivaji International Airport", type: "airport", distance: "5 km" },
      ],
    },
    {
      id: 5,
      title: "Commercial Space in BKC",
      location: "Bandra Kurla Complex, Mumbai",
      price: "₹3.5 Cr",
      type: "commercial",
      status: "sale",
      area: "1800 sq ft",
      features: ["Premium Building", "Ready to Move", "Parking Space"],
      description: "Premium office space in Mumbai's business district with modern infrastructure.",
      images: ["bkc 1.svg", "bkc 4.svg"],
      agent: 2,
      coordinates: { lat: 19.0654, lng: 72.8681 },
      nearbyPlaces: [
        { name: "Asian Heart Institute", type: "hospital", distance: "1.0 km" },
        { name: "American School of Bombay", type: "school", distance: "2.5 km" },
        { name: "BKC Police Station", type: "police", distance: "0.7 km" },
        { name: "Chhatrapati Shivaji International Airport", type: "airport", distance: "10 km" },
      ],
    },
    {
      id: 6,
      title: "Penthouse in Worli",
      location: "Worli, Mumbai",
      price: "₹18 Cr",
      type: "apartment",
      status: "sale",
      bedrooms: 4,
      bathrooms: 5,
      area: "4500 sq ft",
      features: ["Private Terrace", "Jacuzzi", "Home Theater", "Smart Home"],
      description:
        "Luxurious 4BHK penthouse with panoramic city and sea views, designer interiors, and premium amenities.",
      images: ["worli 1.svg", "worli 2.svg", "worli 4.svg"],
      agent: 3,
      coordinates: { lat: 19.0134, lng: 72.8153 },
      nearbyPlaces: [
        { name: "Jaslok Hospital", type: "hospital", distance: "3.2 km" },
        { name: "Sophia College", type: "school", distance: "2.8 km" },
        { name: "Worli Police Station", type: "police", distance: "1.2 km" },
        { name: "Chhatrapati Shivaji International Airport", type: "airport", distance: "18 km" },
      ],
    },
    {
      id: 7,
      title: "Modern 3BHK in Powai",
      location: "Powai, Mumbai",
      price: "₹3.2 Cr",
      type: "apartment",
      status: "sale",
      bedrooms: 3,
      bathrooms: 3,
      area: "1800 sq ft",
      features: ["Lake View", "Modular Kitchen", "Gym", "Clubhouse"],
      description: "Contemporary 3BHK apartment with stunning lake views and premium amenities in a gated community.",
      images: ["powai 1.svg", "7.svg", "14.svg"],
      agent: 1,
      coordinates: { lat: 19.1207, lng: 72.908 },
      nearbyPlaces: [
        { name: "Hiranandani Hospital", type: "hospital", distance: "1.5 km" },
        { name: "Hiranandani Foundation School", type: "school", distance: "0.8 km" },
        { name: "Powai Police Station", type: "police", distance: "2.0 km" },
        { name: "Chhatrapati Shivaji International Airport", type: "airport", distance: "9 km" },
      ],
    },
    {
      id: 8,
      title: "Luxury Villa in Lonavala",
      location: "Lonavala, Maharashtra",
      price: "₹8.5 Cr",
      type: "villa",
      status: "sale",
      bedrooms: 5,
      bathrooms: 6,
      area: "6000 sq ft",
      features: ["Swimming Pool", "Garden", "Mountain View", "Home Theater"],
      description:
        "Spectacular 5BHK villa with panoramic mountain views, private pool, and lush gardens perfect for weekend getaways.",
      images: ["8.svg", "15.svg", "20.svg"],
      agent: 2,
      coordinates: { lat: 18.7546, lng: 73.4016 },
      nearbyPlaces: [
        { name: "Lonavala General Hospital", type: "hospital", distance: "4.5 km" },
        { name: "New Era High School", type: "school", distance: "3.2 km" },
        { name: "Lonavala Police Station", type: "police", distance: "3.8 km" },
        { name: "Pune International Airport", type: "airport", distance: "65 km" },
      ],
    },
    {
      id: 9,
      title: "1BHK Apartment for Rent in Malad",
      location: "Malad West, Mumbai",
      price: "₹35,000/month",
      type: "apartment",
      status: "rent",
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sq ft",
      features: ["Furnished", "24x7 Security", "Power Backup"],
      description: "Well-maintained 1BHK apartment available for rent in a residential complex with good amenities.",
      images: ["9.svg", "21.svg", "22.svg", "23.svg"],
      agent: 3,
      coordinates: { lat: 19.1883, lng: 72.8401 },
      nearbyPlaces: [
        { name: "Surana Hospital", type: "hospital", distance: "1.8 km" },
        { name: "St. Anne's High School", type: "school", distance: "1.2 km" },
        { name: "Malad Police Station", type: "police", distance: "2.0 km" },
        { name: "Chhatrapati Shivaji International Airport", type: "airport", distance: "17 km" },
      ],
    },
    {
      id: 10,
      title: "Spacious 4BHK in Colaba",
      location: "Colaba, Mumbai",
      price: "₹9.8 Cr",
      type: "apartment",
      status: "sale",
      bedrooms: 4,
      bathrooms: 4,
      area: "3200 sq ft",
      features: ["Sea View", "Heritage Building", "High Ceilings", "Wooden Flooring"],
      description: "Elegant 4BHK apartment in a heritage building with sea views and classic architecture.",
      images: ["10.svg", "11.svg", "12.svg"],
      agent: 1,
      coordinates: { lat: 18.9067, lng: 72.8147 },
      nearbyPlaces: [
        { name: "GT Hospital", type: "hospital", distance: "2.5 km" },
        { name: "Cathedral School", type: "school", distance: "1.0 km" },
        { name: "Colaba Police Station", type: "police", distance: "0.5 km" },
        { name: "Chhatrapati Shivaji International Airport", type: "airport", distance: "25 km" },
      ],
    },
    {
      id: 11,
      title: "Modern Office Space in Lower Parel",
      location: "Lower Parel, Mumbai",
      price: "₹4.2 Cr",
      type: "commercial",
      status: "sale",
      area: "2200 sq ft",
      features: ["Premium Building", "24x7 Access", "Conference Room", "Parking"],
      description: "Contemporary office space in a premium commercial building with modern amenities.",
      images: ["11.svg", "13.svg", "14.svg"],
      agent: 2,
      coordinates: { lat: 18.9982, lng: 72.827 },
      nearbyPlaces: [
        { name: "KEM Hospital", type: "hospital", distance: "3.0 km" },
        { name: "Bombay Scottish School", type: "school", distance: "4.2 km" },
        { name: "N.M. Joshi Marg Police Station", type: "police", distance: "1.5 km" },
        { name: "Chhatrapati Shivaji International Airport", type: "airport", distance: "20 km" },
      ],
    },
    {
      id: 12,
      title: "Luxury Farmhouse in Karjat",
      location: "Karjat, Maharashtra",
      price: "₹5.5 Cr",
      type: "villa",
      status: "sale",
      bedrooms: 4,
      bathrooms: 5,
      area: "10000 sq ft",
      features: ["Swimming Pool", "Organic Farm", "Mountain View", "Guest House"],
      description: "Luxurious farmhouse with organic farming area, swimming pool, and breathtaking mountain views.",
      images: ["12.svg", "15.svg", "20.svg"],
      agent: 3,
      coordinates: { lat: 18.9102, lng: 73.3341 },
      nearbyPlaces: [
        { name: "Karjat Civil Hospital", type: "hospital", distance: "5.0 km" },
        { name: "Karjat Public School", type: "school", distance: "4.5 km" },
        { name: "Karjat Police Station", type: "police", distance: "4.8 km" },
        { name: "Pune International Airport", type: "airport", distance: "80 km" },
      ],
    },
  ]
  
  // Helper function to get URL parameters
  function getUrlParameter(name) {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]")
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
    var results = regex.exec(location.search)
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
  }
  
  // Function to save/unsave a property
  async function saveProperty(propertyId) {
    try {
      const token = localStorage.getItem("token")
      if (!token) {
        // If not logged in, redirect to login page with return URL
        const currentPath = window.location.pathname + window.location.search
        window.location.href = `login.html?redirect=${encodeURIComponent(currentPath)}`
        return false
      }

      const response = await fetch('/api/save-property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ propertyId })
      })

      const data = await response.json()
      if (data.success) {
        // Update localStorage to maintain UI state
        const savedProperties = JSON.parse(localStorage.getItem("savedProperties") || "[]")
        const index = savedProperties.indexOf(propertyId)
        
        if (data.saved) {
          if (index === -1) savedProperties.push(propertyId)
        } else {
          if (index !== -1) savedProperties.splice(index, 1)
        }
        
        localStorage.setItem("savedProperties", JSON.stringify(savedProperties))
        return true
      }
      return false
    } catch (error) {
      console.error("Error saving property:", error)
      return false
    }
  }
  
  // Function to check if a property is saved
  async function isPropertySaved(propertyId) {
    try {
      const token = localStorage.getItem("token")
      if (!token) return false

      const response = await fetch('/api/saved-properties', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()
      if (data.success) {
        return data.savedProperties.includes(propertyId)
      }
      return false
    } catch (error) {
      console.error("Error checking saved property:", error)
      return false
    }
  }
  
  // Function to load saved properties
  async function loadSavedProperties() {
    try {
      const token = localStorage.getItem("token")
      if (!token) {
        window.location.href = 'login.html?redirect=/saved-properties.html'
        return
      }

      const response = await fetch('/api/saved-properties', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()
      const savedPropertiesGrid = document.getElementById("saved-properties-grid")
      const noSavedProperties = document.getElementById("no-saved-properties")

      if (savedPropertiesGrid) {
        if (data.success && data.savedProperties.length > 0) {
          savedPropertiesGrid.innerHTML = ""
          data.savedProperties.forEach((propertyId) => {
            const property = properties.find((p) => p.id === propertyId)
            if (property) {
              const propertyCard = createPropertyCard(property, true)
              savedPropertiesGrid.appendChild(propertyCard)
            }
          })
          if (noSavedProperties) noSavedProperties.style.display = 'none'
        } else {
          savedPropertiesGrid.innerHTML = ""
          if (noSavedProperties) noSavedProperties.style.display = 'block'
        }
      }
    } catch (error) {
      console.error("Error loading saved properties:", error)
    }
  }
  
  // Dummy agents data
  const agents = [
    {
      id: 1,
      name: "Saihajvir Singh",
      designation: "Senior Sales Executive",
      phone: "+91 9820098200",
      email: "ss@example.com",
      image: "img/agent1.jpg",
    },
    {
      id: 2,
      name: "Tanish Sharma",
      designation: "Real Estate Broker",
      phone: "+91 9967099670",
      email: "t.sharma@example.com",
      image: "img/agent2.jpg",
    },
    {
      id: 3,
      name: "Tanay Chaplot",
      designation: "Property Consultant",
      phone: "+91 9892098920",
      email: "tc@example.com",
      image: "img/agent3.jpg",
    },
  ]
  
  // Load properties on page load
  document.addEventListener("DOMContentLoaded", () => {
    // Load featured properties on home page
    const featuredPropertiesGrid = document.getElementById("featured-properties-grid")
    if (featuredPropertiesGrid) {
      // Get first 3 properties for featured section
      const featuredProperties = properties.slice(0, 3)
  
      featuredPropertiesGrid.innerHTML = ""
      featuredProperties.forEach((property) => {
        const propertyCard = createPropertyCard(property)
        featuredPropertiesGrid.appendChild(propertyCard)
      })
    }
  
    // Load all properties on properties page
    const propertiesGrid = document.getElementById("properties-grid")
    if (propertiesGrid) {
      // Check for search parameter
      const searchParam = getUrlParameter("search")
      if (searchParam) {
        document.getElementById("search-location").value = searchParam
  
        // Filter properties based on search
        const filteredProperties = properties.filter(
          (property) =>
            property.location.toLowerCase().includes(searchParam.toLowerCase()) ||
            property.title.toLowerCase().includes(searchParam.toLowerCase()),
        )
  
        propertiesGrid.innerHTML = ""
        if (filteredProperties.length > 0) {
          filteredProperties.forEach((property) => {
            const propertyCard = createPropertyCard(property)
            propertiesGrid.appendChild(propertyCard)
          })
        } else {
          propertiesGrid.innerHTML = "<p>No properties found matching your criteria.</p>"
        }
      } else {
        // Load all properties
        propertiesGrid.innerHTML = ""
        properties.forEach((property) => {
          const propertyCard = createPropertyCard(property)
          propertiesGrid.appendChild(propertyCard)
        })
      }
  
      // Add event listener to filter button
      const filterButton = document.getElementById("filter-button")
      if (filterButton) {
        filterButton.addEventListener("click", filterProperties)
      }
    }
  
    // Load property details on property details page
    const propertyDetails = document.getElementById("property-details")
    if (propertyDetails && window.location.pathname.includes("property-details.html")) {
      // Check if user is logged in
      const token = localStorage.getItem("token")
      if (!token) {
        // If not logged in, redirect to login page with return URL
        const currentPath = window.location.pathname + window.location.search
        window.location.href = `login.html?redirect=${encodeURIComponent(currentPath)}`
        return
      }

      // Get property ID from URL
      const propertyId = Number.parseInt(getUrlParameter("id"))
      if (propertyId) {
        const property = properties.find((p) => p.id === propertyId)
        if (property) {
          loadPropertyDetails(property)
        } else {
          propertyDetails.innerHTML = `
                      <h1>Property Not Found</h1>
                      <p>The property you are looking for does not exist.</p>
                      <a href="properties.html">Back to Properties</a>
                  `
        }
      } else {
        window.location.href = "properties.html"
      }
    }
  })
  
  // Create property card
  function createPropertyCard(property, isSaved = false) {
    const propertyCard = document.createElement("div")
    propertyCard.className = "property-card"
  
    const savedStatus = isSaved || isPropertySaved(property.id)
  
    propertyCard.innerHTML = `
          <div class="property-image-container">
              <img src="${property.images[0]}" alt="${property.title}" class="property-image">
              <div class="image-controls">
                  <span class="image-indicator active" data-index="0"></span>
                  <span class="image-indicator" data-index="1"></span>
                  <span class="image-indicator" data-index="2"></span>
              </div>
          </div>
          <div class="property-details">
              <h3>${property.title}</h3>
              <p class="location">${property.location}</p>
              <p class="price">${property.price}</p>
              <div style="display: flex; justify-content: space-between;">
                  <a href="property-details.html?id=${property.id}">View Details</a>
                  <button 
                      class="save-property-btn" 
                      data-id="${property.id}"
                      style="background: none; color: ${savedStatus ? "var(--secondary-color)" : "var(--dark-gray)"}; font-size: 1.5rem; padding: 0;"
                  >
                      ${savedStatus ? "♥" : "♡"}
                  </button>
              </div>
          </div>
      `
  
    // Add event listener to save button
    const saveButton = propertyCard.querySelector(".save-property-btn")
    saveButton.addEventListener("click", function () {
      const propertyId = Number.parseInt(this.getAttribute("data-id"))
      const success = saveProperty(propertyId)
  
      if (success) {
        // Toggle heart icon
        if (this.textContent.trim() === "♡") {
          this.textContent = "♥"
          this.style.color = "var(--secondary-color)"
        } else {
          this.textContent = "♡"
          this.style.color = "var(--dark-gray)"
        }
  
        // If on saved properties page, reload the page
        if (window.location.pathname.includes("saved-properties.html")) {
          loadSavedProperties()
        }
      }
    })
  
    // Add image slideshow functionality
    const imageContainer = propertyCard.querySelector(".property-image-container")
    const propertyImage = propertyCard.querySelector(".property-image")
    const indicators = propertyCard.querySelectorAll(".image-indicator")
  
    let currentImageIndex = 0
    const images = property.images
  
    // Add click event to indicators
    indicators.forEach((indicator) => {
      indicator.addEventListener("click", function () {
        const index = Number.parseInt(this.getAttribute("data-index"))
        currentImageIndex = index
        updateImage()
      })
    })
  
    // Add automatic slideshow
    let slideshowInterval
  
    function startSlideshow() {
      slideshowInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length
        updateImage()
      }, 5000)
    }
  
    function stopSlideshow() {
      clearInterval(slideshowInterval)
    }
  
    function updateImage() {
      propertyImage.src = images[currentImageIndex]
  
      // Update indicators
      indicators.forEach((indicator, index) => {
        if (index === currentImageIndex) {
          indicator.classList.add("active")
        } else {
          indicator.classList.remove("active")
        }
      })
    }
  
    // Start slideshow on hover
    imageContainer.addEventListener("mouseenter", startSlideshow)
    imageContainer.addEventListener("mouseleave", stopSlideshow)
  
    return propertyCard
  }
  
  // Filter properties
  function filterProperties() {
    const searchLocation = document.getElementById("search-location").value.toLowerCase()
    const propertyType = document.getElementById("property-type").value
    const propertyStatus = document.getElementById("property-status").value
  
    let filtered = [...properties]
  
    if (searchLocation) {
      filtered = filtered.filter(
        (property) =>
          property.location.toLowerCase().includes(searchLocation) ||
          property.title.toLowerCase().includes(searchLocation),
      )
    }
  
    if (propertyType) {
      filtered = filtered.filter((property) => property.type === propertyType)
    }
  
    if (propertyStatus) {
      filtered = filtered.filter((property) => property.status === propertyStatus)
    }
  
    const propertiesGrid = document.getElementById("properties-grid")
    propertiesGrid.innerHTML = ""
  
    if (filtered.length > 0) {
      filtered.forEach((property) => {
        const propertyCard = createPropertyCard(property)
        propertiesGrid.appendChild(propertyCard)
      })
    } else {
      propertiesGrid.innerHTML = "<p>No properties found matching your criteria.</p>"
    }
  }
  
  // Load property details
  function loadPropertyDetails(property) {
    const propertyDetails = document.getElementById("property-details")
    const agent = agents.find((a) => a.id === property.agent)
  
    // Get similar properties (same type, excluding current property)
    const similarProperties = properties.filter((p) => p.type === property.type && p.id !== property.id).slice(0, 3)

    
  
    propertyDetails.innerHTML = `
        <div class="container">
            <h1 class="property-title">${property.title}</h1>
            
            <div class="property-slideshow-container">
                <div class="slideshow-wrapper">
                    ${property.images.map((image, index) => `
                        <div class="slide ${index === 0 ? 'active' : ''}">
                            <img src="${image}" alt="${property.title} - Image ${index + 1}">
                        </div>
                    `).join('')}
                    
                    <a class="slideshow-nav prev" onclick="changeSlide(-1)">❮</a>
                    <a class="slideshow-nav next" onclick="changeSlide(1)">❯</a>
                </div>
                
                <div class="slideshow-thumbnails">
                    ${property.images.map((image, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})">
                            <img src="${image}" alt="${property.title} - Thumbnail ${index + 1}">
                        </div>
                    `).join('')}
                </div>

                <button 
                    id="save-property-button"
                    class="save-button"
                    style="background: ${isPropertySaved(property.id) ? "var(--secondary-color)" : "var(--accent-color)"}"
                >
                    ${isPropertySaved(property.id) ? "Saved to Favorites" : "Save to Favorites"}
                </button>
            </div>

            <div class="property-header">
                <p class="location">${property.location}</p>
                <p class="price">${property.price}</p>
            </div>

            <div class="property-content">
                <div class="property-main-info">
                    <div class="property-details-section">
                        <h2>Property Details</h2>
                        <div class="details-grid">
                            <div class="detail-item">
                                <span class="label">Type:</span>
                                <span class="value">${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Status:</span>
                                <span class="value">${property.status === "sale" ? "For Sale" : "For Rent"}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Area:</span>
                                <span class="value">${property.area}</span>
                            </div>
                            ${property.bedrooms ? `
                                <div class="detail-item">
                                    <span class="label">Bedrooms:</span>
                                    <span class="value">${property.bedrooms}</span>
                                </div>
                            ` : ''}
                            ${property.bathrooms ? `
                                <div class="detail-item">
                                    <span class="label">Bathrooms:</span>
                                    <span class="value">${property.bathrooms}</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>

                    <div class="property-description" style="margin-top: 20px;">
                        <h2>Description</h2>
                        <p>${property.description}</p>
                    </div>

                    <div class="property-features">
                        <h2>Features</h2>
                    </div>
                    <div>
                        <ol class="features-list" style="margin-left: 30px;">
                            ${property.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ol>
                    </div>

                    <ul class="property-additional-info">
                        <li class="mortgage-calculator">
                            <h2>Mortgage Calculator</h2>
                            <div class="calculator-form">
                                <div class="form-group">
                                    <label for="loan-amount">Loan Amount (₹)</label>
                                    <input type="number" id="loan-amount" value="${Number.parseInt(property.price.replace(/[^\d]/g, "")) * 0.8}" step="100000">
                                </div>
                                <div class="form-group">
                                    <label for="interest-rate">Interest Rate (%)</label>
                                    <input type="number" id="interest-rate" value="7.5" step="0.1" min="1" max="20">
                                </div>
                                <div class="form-group">
                                    <label for="loan-term">Loan Term (years)</label>
                                    <input type="number" id="loan-term" value="20" min="1" max="30">
                                </div>
                                <button id="calculate-mortgage">Calculate</button>
                            </div>
                            <div class="calculator-results">
                                <div class="result-item">
                                    <span>Monthly Payment:</span>
                                    <span id="monthly-payment">₹0</span>
                                </div>
                                <div class="result-item">
                                    <span>Total Payment:</span>
                                    <span id="total-payment">₹0</span>
                                </div>
                                <div class="result-item">
                                    <span>Total Interest:</span>
                                    <span id="total-interest">₹0</span>
                                </div>
                            </div>
                        </li>

                        <li class="schedule-tour">
                            <h2>Schedule a Tour</h2>
                            <form id="tour-form">
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="tour-date">Preferred Date</label>
                                        <input type="date" id="tour-date" required min="${new Date().toISOString().split("T")[0]}">
                                    </div>
                                    <div class="form-group">
                                        <label for="tour-time">Preferred Time</label>
                                        <select id="tour-time" required>
                                            <option value="">Select a time</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="1:00 PM">1:00 PM</option>
                                            <option value="2:00 PM">2:00 PM</option>
                                            <option value="3:00 PM">3:00 PM</option>
                                            <option value="4:00 PM">4:00 PM</option>
                                            <option value="5:00 PM">5:00 PM</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="tour-name">Your Name</label>
                                    <input type="text" id="tour-name" required>
                                </div>
                                <div class="form-group">
                                    <label for="tour-email">Your Email</label>
                                    <input type="email" id="tour-email" required>
                                </div>
                                <div class="form-group">
                                    <label for="tour-phone">Your Phone</label>
                                    <input type="tel" id="tour-phone" required>
                                </div>
                                <div class="form-group">
                                    <label for="tour-message">Message (Optional)</label>
                                    <textarea id="tour-message" rows="3"></textarea>
                                </div>
                                <button type="submit">Schedule Tour</button>
                            </form>
                        </li>
                    </ul>

                    <div class="property-location">
                        
                        <div class="map-container">
                            ${getPropertyMapIframe(property.id)}
                        </div>
                    </div>

                    <div class="nearby-places">
                        <h2>Nearby Places</h2>
                        <div class="nearby-places-grid">
                            ${property.nearbyPlaces.map(place => `
                                <div class="nearby-place">
                                    <div class="place-icon ${place.type}"></div>
                                    <div class="place-details">
                                        <p class="place-name">${place.name}</p>
                                        <p class="place-distance">${place.distance}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    // Add styles to head if not already added
    if (!document.getElementById('property-details-styles')) {
        const styles = document.createElement('style')
        styles.id = 'property-details-styles'
        styles.textContent = `
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }

            .property-title {
                font-size: 3.5rem;
                color: var(--primary-color);
                margin-bottom: 50px;
                text-align: center;
                font-weight: bold;
            }

            .property-slideshow-container {
                margin-bottom: 40px;
            }

            .slideshow-wrapper {
                position: relative;
                width: 100%;
                height: 600px;
                overflow: hidden;
                border-radius: 8px;
                margin-bottom: 20px;
            }

            .slide {
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: opacity 0.5s ease-in-out;
                display: none;
            }

            .slide.active {
                opacity: 1;
                display: block;
            }

            .slide img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .slideshow-nav {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0.5);
                color: white;
                padding: 16px;
                text-decoration: none;
                cursor: pointer;
                border-radius: 50%;
                font-size: 18px;
                transition: background-color 0.3s;
                z-index: 10;
            }

            .slideshow-nav:hover {
                background: rgba(0, 0, 0, 0.8);
            }

            .slideshow-nav.prev {
                left: 20px;
            }

            .slideshow-nav.next {
                right: 20px;
            }

            .slideshow-thumbnails {
                display: flex;
                gap: 10px;
                overflow-x: auto;
                padding: 10px 0;
            }

            .thumbnail {
                flex: 0 0 120px;
                height: 80px;
                cursor: pointer;
                border-radius: 4px;
                overflow: hidden;
                opacity: 0.6;
                transition: opacity 0.3s;
            }

            .thumbnail.active {
                opacity: 1;
                border: 2px solid var(--accent-color);
            }

            .thumbnail:hover {
                opacity: 0.8;
            }

            .thumbnail img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .save-button {
                display: block;
                width: 100%;
                padding: 12px;
                margin-top: 20px;
                border: none;
                border-radius: 4px;
                color: white;
                font-weight: bold;
                cursor: pointer;
                transition: background-color 0.3s;
            }

            .property-content {
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: 30px;
            }

            .property-main-info {
                grid-column: 1;
            }

            .property-sidebar {
                grid-column: 2;
            }

            .property-location, .nearby-places {
                grid-column: 1 / -1;
                margin-top: 30px;
            }

            .map-container {
                height: 400px;
                width: 100%;
                border-radius: 8px;
                overflow: hidden;
            }

            .mortgage-calculator, .schedule-tour {
                background: var(--light-gray);
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 30px;
            }

            .nearby-places-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin-top: 20px;
            }

            .nearby-place {
                display: flex;
                align-items: center;
                background: var(--light-gray);
                padding: 15px;
                border-radius: 8px;
            }

            @media (max-width: 992px) {
                .property-content {
                    grid-template-columns: 1fr;
                }

                .property-sidebar {
                    grid-column: 1;
                }
            }

            @media (max-width: 768px) {
                .slideshow-wrapper {
                    height: 400px;
                }
            }

            .property-header {
                margin: 30px 0;
                text-align: left;
            }

            .property-header .location {
                font-size: 1.2rem;
                color: var(--dark-gray);
                margin-bottom: 10px;
            }

            .property-header .price {
                font-size: 2rem;
                font-weight: bold;
                color: var(--accent-color);
            }
        `
        document.head.appendChild(styles)

        // Add the tour form submission handler
        const tourForm = document.getElementById("tour-form");
        if (tourForm) {
            tourForm.addEventListener("submit", (e) => handleTourBooking(e, property.id));
        }

        // Add date validation to prevent past dates
        const tourDateInput = document.getElementById("tour-date");
        if (tourDateInput) {
            const today = new Date().toISOString().split('T')[0];
            tourDateInput.setAttribute('min', today);
        }

        // Add phone number validation
        const tourPhoneInput = document.getElementById("tour-phone");
        if (tourPhoneInput) {
            tourPhoneInput.addEventListener('input', function(e) {
                // Remove any non-digit characters
                let phone = e.target.value.replace(/\D/g, '');
                
                // Format as XXX-XXX-XXXX
                if (phone.length >= 10) {
                    phone = phone.slice(0, 10);
                    phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
                }
                
                e.target.value = phone;
            });
        }

        // Add email validation
        const tourEmailInput = document.getElementById("tour-email");
        if (tourEmailInput) {
            tourEmailInput.addEventListener('input', function(e) {
                const email = e.target.value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (!emailRegex.test(email)) {
                    tourEmailInput.setCustomValidity('Please enter a valid email address');
                } else {
                    tourEmailInput.setCustomValidity('');
                }
            });
        }
    }

    // Initialize slideshow
    let currentSlide = 0
    const slides = document.querySelectorAll('.slide')
    const thumbnails = document.querySelectorAll('.thumbnail')

    window.changeSlide = function(direction) {
        slides[currentSlide].classList.remove('active')
        thumbnails[currentSlide].classList.remove('active')
        
        currentSlide = (currentSlide + direction + slides.length) % slides.length
        
        slides[currentSlide].classList.add('active')
        thumbnails[currentSlide].classList.add('active')
    }

    window.goToSlide = function(index) {
        slides[currentSlide].classList.remove('active')
        thumbnails[currentSlide].classList.remove('active')
        
        currentSlide = index
        
        slides[currentSlide].classList.add('active')
        thumbnails[currentSlide].classList.add('active')
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1)
        } else if (e.key === 'ArrowRight') {
            changeSlide(1)
        }
    })

    // Add event listeners
    document.getElementById("save-property-button").addEventListener("click", function() {
        const success = saveProperty(property.id)
        if (success) {
            if (this.textContent.trim() === "Save to Favorites") {
                this.textContent = "Saved to Favorites"
                this.style.backgroundColor = "var(--secondary-color)"
            } else {
                this.textContent = "Save to Favorites"
                this.style.backgroundColor = "var(--accent-color)"
            }
        }
    })

    document.getElementById("calculate-mortgage").addEventListener("click", calculateMortgage)

    // Calculate mortgage on page load
    calculateMortgage()
  }
  
  // Current image index and images array for the property detail page
  let currentDetailImageIndex = 0
  let detailImages = []
  
  // Change main property image
  function changeMainImage(direction) {
    const mainImage = document.getElementById("main-property-image")
    if (!mainImage) return
  
    const propertyId = Number.parseInt(getUrlParameter("id"))
    const property = properties.find((p) => p.id === propertyId)
  
    if (!property) return
  
    detailImages = property.images
  
    if (typeof direction === "number") {
      // If a specific index was clicked
      currentDetailImageIndex = direction
    } else if (direction === "next") {
      // Move to next image
      currentDetailImageIndex = (currentDetailImageIndex + 1) % detailImages.length
    } else if (direction === "prev") {
      // Move to previous image
      currentDetailImageIndex = (currentDetailImageIndex - 1 + detailImages.length) % detailImages.length
    }
  
    mainImage.src = detailImages[currentDetailImageIndex]
  
    // Update thumbnail borders
    const thumbnails = document.querySelectorAll(".thumbnail")
    thumbnails.forEach((thumbnail, index) => {
      if (index === currentDetailImageIndex) {
        thumbnail.style.border = "2px solid var(--accent-color)"
      } else {
        thumbnail.style.border = "none"
      }
    })
  }
  
  // Calculate mortgage
  function calculateMortgage() {
    const loanAmount = Number.parseFloat(document.getElementById("loan-amount").value)
    const interestRate = Number.parseFloat(document.getElementById("interest-rate").value) / 100 / 12 // Monthly interest rate
    const loanTerm = Number.parseInt(document.getElementById("loan-term").value) * 12 // Months
  
    // Calculate monthly payment
    const x = Math.pow(1 + interestRate, loanTerm)
    const monthlyPayment = (loanAmount * x * interestRate) / (x - 1)
  
    // Calculate total payment and interest
    const totalPayment = monthlyPayment * loanTerm
    const totalInterest = totalPayment - loanAmount
  
    // Format currency
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  
    // Update results
    document.getElementById("monthly-payment").textContent = formatter.format(monthlyPayment)
    document.getElementById("total-payment").textContent = formatter.format(totalPayment)
    document.getElementById("total-interest").textContent = formatter.format(totalInterest)
  }
  
  // Initialize Google Map
  function initMap(lat, lng, title) {
    // Check if Google Maps API is loaded
    if (typeof google === "undefined") {
      // If not loaded, add script
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMapCallback`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
  
      // Define callback function
      window.initMapCallback = () => {
        createMap(lat, lng, title)
      }
    } else {
      // If already loaded, create map
      createMap(lat, lng, title)
    }
  }
  
  // Create Google Map
  function createMap(lat, lng, title) {
    const mapElement = document.getElementById("property-map")
    if (!mapElement) return
  
    const mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 15,
    }
  
    const map = new google.maps.Map(mapElement, mapOptions)
  
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      title: title,
    })
  }

  // Add this function to properties.js
function getPropertyMapIframe(propertyId) {
  const mapIframes = {
    1: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5112219279267!2d72.82514467484728!3d19.08521608212123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9390aba1951%3A0x7b17bd13f202218b!2sHolly%20Family%20Villa!5e0!3m2!1sen!2sin!4v1744225002321!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    2: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120650.47047934012!2d72.77874925643177!3d19.093296455523355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b649c62b4acb%3A0x87aa5bb3e057d6d1!2sGoregaon%20Pearl%20C.H.S!5e0!3m2!1sen!2sin!4v1744225109661!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    3: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120598.91140633768!2d72.77372940011192!3d19.1639057797277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2%20bhk%20in%20andheri!5e0!3m2!1sen!2sin!4v1744225310348!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    4: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.954174314673!2d72.85359409536937!3d19.0642413142036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ed8b3b49af%3A0x6a969a330706d494!2sThe%20Executive%20Centre%20-%20The%20Capital%20%7C%20Coworking%20Space%20%26%20Serviced%20Workspace!5e0!3m2!1sen!2sin!4v1744225423570!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    5: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30178.866037962398!2d72.80070034645153!3d19.00392885986723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8b78ac3db9%3A0x395ad82b0a483225!2sThe%20St.%20Regis%20Mumbai!5e0!3m2!1sen!2sin!4v1744225662930!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    6: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15079.133488542686!2d72.90099629539242!3d19.11715706353154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e5489f8b2d%3A0xd9e71bac408c562b!2sHiranandani%20Gardens%2C%20Powai%2C%20Mumbai%2C%20Maharashtra%20400076!5e0!3m2!1sen!2sin!4v1744225795810!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    7: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d30224.39707180451!2d73.35617828369139!3d18.751319885253928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sEko%20Stay%20%7C%20Deltin%202%20BHK%20Pool%20Villa!5e0!3m2!1sen!2sin!4v1744225844108!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    8: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.26556474465!2d72.85504364542537!3d19.192302362578797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e719f8148f%3A0xc8064ed6d9bce54f!2sRoyal%20Pristo%20%7C%20Apartments%20In%20Malad!5e0!3m2!1sen!2sin!4v1744225875371!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    9: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.1975714158982!2d72.82200708854714!3d18.91389614556441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1ac8c0b9421%3A0xb1a3298d9d0a87be!2sWaterfront%20Tower!5e0!3m2!1sen!2sin!4v1744225903819!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    10: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.260010467806!2d72.82789297484518!3d19.008260982182435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceeb06a1f7c5%3A0x6e1c3d32d14c1d3c!2sOFFICE%2C%20SOUTH%20WARD%20BMC%2C%20NM%20Joshi%20Marg%2C%20Lower%20Parel%2C%20Mumbai%2C%20Maharashtra%20400025!5e0!3m2!1sen!2sin!4v1744225933170!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    11: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.5767948553253!2d73.37719627484121!3d18.861476082299426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb0837d1bafd%3A0x8dd758e0b6c02446!2sKarjat%20Farmhouse!5e0!3m2!1sen!2sin!4v1744225963859!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    // Add more property IDs and their corresponding iframe links
    // ...

  };
  

  
  return mapIframes[propertyId] || '<div style="height:100%;display:flex;align-items:center;justify-content:center;background:#f3f3f3;">Map not available</div>';
}
  
  // Make functions globally available
  window.changeMainImage = changeMainImage
  window.calculateMortgage = calculateMortgage
  window.initMap = initMap
  
  // Function to handle tour booking
  async function handleTourBooking(event, propertyId) {
    event.preventDefault();
    
    const token = localStorage.getItem("token");
    if (!token) {
      const currentPath = window.location.pathname + window.location.search;
      window.location.href = `login.html?redirect=${encodeURIComponent(currentPath)}`;
      return;
    }

    // Get form data
    const tourData = {
      propertyId: propertyId,
      tourDate: document.getElementById("tour-date").value,
      tourTime: document.getElementById("tour-time").value,
      name: document.getElementById("tour-name").value,
      email: document.getElementById("tour-email").value,
      phone: document.getElementById("tour-phone").value,
      message: document.getElementById("tour-message").value || ''
    };

    try {
      const response = await fetch('http://localhost:3000/api/book-tour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(tourData)
      });

      const data = await response.json();
      
      if (data.success) {
        alert("Tour scheduled successfully! We will contact you shortly to confirm the details.");
        document.getElementById("tour-form").reset();
      } else {
        alert(data.message || "Failed to schedule tour. Please try again.");
      }
    } catch (error) {
      console.error("Error scheduling tour:", error);
      alert("An error occurred while scheduling the tour. Please try again.");
    }
  }
  