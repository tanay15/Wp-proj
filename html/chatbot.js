document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.getElementById("chat-button")
  const chatContainer = document.getElementById("chat-container")
  const closeChat = document.getElementById("close-chat")
  const chatMessages = document.getElementById("chat-messages")
  const chatForm = document.getElementById("chat-form")
  const userInput = document.getElementById("user-input")

  // Chat toggle
  if (chatButton && chatContainer) {
    chatButton.addEventListener("click", () => {
      chatContainer.classList.add("active")
      chatContainer.style.display = "flex"
    })
  }

  if (closeChat && chatContainer) {
    closeChat.addEventListener("click", () => {
      chatContainer.classList.remove("active")
      chatContainer.style.display = "none"
    })
  }

  // Handle chat form submission
  if (chatForm && chatMessages) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const message = userInput.value.trim()
      if (!message) return

      // Add user message to chat
      addMessage("user", message)

      // Clear input
      userInput.value = ""

      // Show typing indicator
      showTypingIndicator()

      // Process message and get response
      setTimeout(
        () => {
          // Remove typing indicator
          removeTypingIndicator()

          // Add bot response
          const botResponse = getBotResponse(message)
          addMessage("bot", botResponse)

          // Scroll to bottom
          chatMessages.scrollTop = chatMessages.scrollHeight
        },
        1000 + Math.random() * 1000,
      ) // Random delay between 1-2 seconds
    })
  }

  // Add message to chat
  function addMessage(role, content) {
    const messageElement = document.createElement("div")
    messageElement.className = `message ${role}-message`
    messageElement.textContent = content

    chatMessages.appendChild(messageElement)
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  // Show typing indicator
  function showTypingIndicator() {
    const typingIndicator = document.createElement("div")
    typingIndicator.className = "typing-indicator"
    typingIndicator.id = "typing-indicator"

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("div")
      dot.className = "typing-dot"
      typingIndicator.appendChild(dot)
    }

    chatMessages.appendChild(typingIndicator)
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  // Remove typing indicator
  function removeTypingIndicator() {
    const typingIndicator = document.getElementById("typing-indicator")
    if (typingIndicator) {
      typingIndicator.remove()
    }
  }

  // Get bot response based on user message
  function getBotResponse(message) {
    message = message.toLowerCase()

    // Simple keyword-based responses
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! How can I help you with your property search today?"
    }

    if (
      message.includes("property") &&
      (message.includes("search") || message.includes("find") || message.includes("looking"))
    ) {
      return "I can help you find the perfect property! What area are you interested in, and do you have any specific requirements like number of bedrooms or budget?"
    }

    if (message.includes("price") || message.includes("cost") || message.includes("expensive")) {
      return "Our properties range from ₹1.8 Cr to ₹18 Cr depending on location, size, and features. Do you have a specific budget in mind?"
    }

    if (message.includes("location") || message.includes("area") || message.includes("neighborhood")) {
      return "We have properties in various prime locations including Bandra, Juhu, Andheri, Powai, BKC, Worli, and more. Which area interests you the most?"
    }

    if (message.includes("contact") || message.includes("agent") || message.includes("realtor")) {
      return "You can contact our agents directly through the property listing pages or by calling our main office. Would you like me to have an agent contact you?"
    }

    if (message.includes("mortgage") || message.includes("loan") || message.includes("financing")) {
      return "We work with several trusted mortgage providers who can offer competitive rates. You can also use our mortgage calculator on property detail pages to estimate your payments."
    }

    if (message.includes("thank")) {
      return "You're welcome! Feel free to ask if you have any other questions about our properties or services."
    }

    // Default response
    return "I'm here to help with your real estate needs. You can ask me about our properties, locations, pricing, or how to contact our agents for more information."
  }
})
