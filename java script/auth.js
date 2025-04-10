// Client-side authentication functions to replace the existing auth.js

// API URL - replace with your actual backend URL when deployed
const API_URL = "http://localhost:3000/api"

// Check if user is logged in
document.addEventListener("DOMContentLoaded", () => {
  updateAuthLinks()

  // Handle login form
  const loginForm = document.getElementById("login-form")
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const email = e.target.elements.email.value
      const password = e.target.elements.password.value

      try {
        const response = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })

        const data = await response.json()

        if (data.success) {
          // Store user data and token
          localStorage.setItem("user", JSON.stringify(data.user))
          localStorage.setItem("token", data.token)
          window.location.href = "index.html"
        } else {
          const errorMessage = document.getElementById("error-message")
          errorMessage.textContent = data.message || "Invalid email or password"
          errorMessage.style.display = "block"
        }
      } catch (error) {
        console.error("Login error:", error)
        const errorMessage = document.getElementById("error-message")
        errorMessage.textContent = "An error occurred. Please try again."
        errorMessage.style.display = "block"
      }
    })
  }

  // Handle register form
  const registerForm = document.getElementById("register-form")
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const name = e.target.elements.name.value
      const email = e.target.elements.email.value
      const password = e.target.elements.password.value
      const confirmPassword = e.target.elements.confirmPassword.value

      if (password !== confirmPassword) {
        const errorMessage = document.getElementById("error-message")
        errorMessage.textContent = "Passwords do not match"
        errorMessage.style.display = "block"
        return
      }

      try {
        const response = await fetch(`${API_URL}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        })

        const data = await response.json()

        if (data.success) {
          // Store user data and token
          localStorage.setItem("user", JSON.stringify(data.user))
          localStorage.setItem("token", data.token)
          window.location.href = "index.html"
        } else {
          const errorMessage = document.getElementById("error-message")
          errorMessage.textContent = data.message || "Registration failed"
          errorMessage.style.display = "block"
        }
      } catch (error) {
        console.error("Registration error:", error)
        const errorMessage = document.getElementById("error-message")
        errorMessage.textContent = "An error occurred. Please try again."
        errorMessage.style.display = "block"
      }
    })
  }

  // Handle logout button
  const logoutButton = document.getElementById("logout-button")
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      logout()
      window.location.href = "index.html"
    })
  }

  // Handle logout link
  const logoutLink = document.getElementById("logout-link")
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault()
      logout()
      window.location.href = "index.html"
    })
  }
})

// Logout function
function logout() {
  localStorage.removeItem("user")
  localStorage.removeItem("token")
}

// Update auth links based on login status
function updateAuthLinks() {
  const authLinksElement = document.getElementById("auth-links")
  if (!authLinksElement) return

  const user = JSON.parse(localStorage.getItem("user"))

  if (user) {
    authLinksElement.innerHTML = `
      <a href="saved-properties.html">Saved</a>
      </li>
      <li>
        <a href="profile.html">Profile</a>
      </li>
      <li>
        <a href="#" id="logout-link">Logout</a>
    `

    // Add event listener to logout link
    const logoutLink = document.getElementById("logout-link")
    if (logoutLink) {
      logoutLink.addEventListener("click", (e) => {
        e.preventDefault()
        logout()
        window.location.reload()
      })
    }
  } else {
    authLinksElement.innerHTML = `<a href="login.html" class="${window.location.pathname.includes("login.html") || window.location.pathname.includes("register.html") ? "active" : ""}">Sign In</a>`
  }
}

// Save property function
async function saveProperty(propertyId) {
  const token = localStorage.getItem("token")

  if (!token) {
    alert("Please log in to save properties")
    return false
  }

  try {
    const response = await fetch(`${API_URL}/save-property`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ propertyId }),
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error("Error saving property:", error)
    return false
  }
}

// Check if property is saved
async function isPropertySaved(propertyId) {
  const token = localStorage.getItem("token")

  if (!token) {
    return false
  }

  try {
    const response = await fetch(`${API_URL}/saved-properties`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

// Get user profile
async function getUserProfile() {
  const token = localStorage.getItem("token")

  if (!token) {
    return null
  }

  try {
    const response = await fetch(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()

    if (data.success) {
      return data.user
    }

    return null
  } catch (error) {
    console.error("Error fetching user profile:", error)
    return null
  }
}
