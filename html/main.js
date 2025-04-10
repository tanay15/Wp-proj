// Main JavaScript file for Real Estate Website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
    }
    
    // Initialize Leaflet maps if they exist
    initMaps();
    
    // Initialize property view toggle
    initViewToggle();
    
    // Initialize chatbot
    initChatbot();
    
    // Initialize property filters
    initPropertyFilters();
    
    // Initialize authentication
    initAuth();
  });
  
  // Initialize Leaflet Maps
  function initMaps() {
    // Check if map element exists
    const listingsMap = document.getElementById('listings-map');
    if (!listingsMap) return;
    
    // Initialize map
    const map = L.map('listings-map').setView([39.8283, -98.5795], 4); // Center of US
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Get properties data from data attribute
    const propertiesData = JSON.parse(listingsMap.getAttribute('data-properties') || '[]');
    
    // Add markers for each property
    propertiesData.forEach(function(property) {
      if (property.lat && property.lng) {
        const marker = L.marker([property.lat, property.lng]).addTo(map);
        
        marker.bindPopup(`
          <strong>${property.title}</strong><br>
          ${property.price}<br>
          <a href="property-details.html?id=${property.id}">View Details</a>
        `);
      }
    });
    
    // Fit bounds to markers
    if (propertiesData.length > 0) {
      const bounds = propertiesData
        .filter(p => p.lat && p.lng)
        .map(p => [p.lat, p.lng]);
      
      if (bounds.length > 0) {
        map.fitBounds(bounds);
      }
    }
  }
  
  // Initialize Property View Toggle
  function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    if (viewBtns.length === 0) return;
    
    viewBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        viewBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get view type
        const viewType = this.getAttribute('data-view');
        
        // Hide all views
        document.querySelectorAll('.properties-section').forEach(function(section) {
          section.classList.remove('active-view');
        });
        
        // Show selected view
        document.querySelector(`.${viewType}-view`).classList.add('active-view');
        
        // Refresh map if map view
        if (viewType === 'map') {
          const map = document.querySelector('#listings-map');
          if (map && map._leaflet_id) {
            map._leaflet_id.invalidateSize();
          }
        }
      });
    });
  }
  
  // Initialize Chatbot
  function initChatbot() {
    const chatbotButton = document.querySelector('.chatbot-button');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    const chatbotInput = document.querySelector('.chatbot-input input');
    const chatbotSendBtn = document.querySelector('.chatbot-input button');
    
    if (!chatbotButton || !chatbotContainer) return;
    
    // Toggle chatbot
    chatbotButton.addEventListener('click', function() {
      chatbotContainer.classList.toggle('active');
      
      // Add welcome message if it's the first time opening
      if (chatbotContainer.classList.contains('active') && chatbotMessages.children.length === 0) {
        addBotMessage("Hello! I'm your real estate assistant. How can I help you today?");
      }
    });
    
    // Close chatbot
    if (chatbotClose) {
      chatbotClose.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
      });
    }
    
    // Send message on button click
    if (chatbotSendBtn && chatbotInput) {
      chatbotSendBtn.addEventListener('click', sendMessage);
    }
    
    // Send message on Enter key
    if (chatbotInput) {
      chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          sendMessage();
        }
      });
    }
    
    // Send message function
    function sendMessage() {
      const message = chatbotInput.value.trim();
      if (!message) return;
      
      // Add user message
      addUserMessage(message);
      
      // Clear input
      chatbotInput.value = '';
      
      // Process message and get response
      processMessage(message);
    }
    
    // Add bot message
    function addBotMessage(text) {
      // Create typing indicator
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'chatbot-typing';
      typingIndicator.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      `;
      chatbotMessages.appendChild(typingIndicator);
      
      // Scroll to bottom
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      
      // Simulate typing delay
      setTimeout(function() {
        // Remove typing indicator
        chatbotMessages.removeChild(typingIndicator);
        
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = 'message message-bot';
        messageElement.textContent = text;
        
        // Add to chat
        chatbotMessages.appendChild(messageElement);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }, 1000);
    }
    
    // Add user message
    function addUserMessage(text) {
      // Create message element
      const messageElement = document.createElement('div');
      messageElement.className = 'message message-user';
      messageElement.textContent = text;
      
      // Add to chat
      chatbotMessages.appendChild(messageElement);
      
      // Scroll to bottom
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Process message and generate response
    function processMessage(message) {
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        addBotMessage("Hello! How can I assist you with your real estate needs today?");
      } 
      else if (lowerMessage.includes('property') && (lowerMessage.includes('buy') || lowerMessage.includes('purchase'))) {
        addBotMessage("We have many properties available for purchase. You can browse our listings or tell me what you're looking for in terms of location, budget, and features.");
      }
      else if (lowerMessage.includes('rent')) {
        addBotMessage("We have rental properties available. What area are you interested in and what's your budget?");
      }
      else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        addBotMessage("Our properties range from $1,000/month for rentals to $500,000+ for purchases. Can you tell me more about what you're looking for?");
      }
      else if (lowerMessage.includes('agent') || lowerMessage.includes('realtor')) {
        addBotMessage("We have experienced agents ready to help you. Would you like me to connect you with one of our real estate professionals?");
      }
      else if (lowerMessage.includes('location') || lowerMessage.includes('area')) {
        addBotMessage("We have properties in downtown, suburbs, and surrounding areas. Which location interests you the most?");
      }
      else if (lowerMessage.includes('thank')) {
        addBotMessage("You're welcome! Is there anything else I can help you with?");
      }
      else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
        addBotMessage("Thank you for chatting with us! Feel free to return if you have more questions. Have a great day!");
      }
      else {
        addBotMessage("I'd be happy to help with that. For more specific information, would you like to speak with one of our agents?");
      }
    }
  }
  
  // Initialize Property Filters
  function initPropertyFilters() {
    const filterForm = document.getElementById('property-filter-form');
    if (!filterForm) return;
    
    filterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get filter values
      const type = document.getElementById('filter-type').value;
      const location = document.getElementById('filter-location').value;
      const minPrice = document.getElementById('filter-min-price').value;
      const maxPrice = document.getElementById('filter-max-price').value;
      const bedrooms = document.getElementById('filter-bedrooms').value;
      
      // Get all property cards
      const propertyCards = document.querySelectorAll('.property-card');
      
      // Filter properties
      propertyCards.forEach(function(card) {
        let show = true;
        
        // Check type
        if (type !== 'any' && card.getAttribute('data-type') !== type) {
          show = false;
        }
        
        // Check location
        if (location !== 'any' && !card.getAttribute('data-location').includes(location)) {
          show = false;
        }
        
        // Check min price
        if (minPrice && parseInt(card.getAttribute('data-price')) < parseInt(minPrice)) {
          show = false;
        }
        
        // Check max price
        if (maxPrice && parseInt(card.getAttribute('data-price')) > parseInt(maxPrice)) {
          show = false;
        }
        
        // Check bedrooms
        if (bedrooms !== 'any' && parseInt(card.getAttribute('data-bedrooms')) < parseInt(bedrooms)) {
          show = false;
        }
        
        // Show or hide card
        card.style.display = show ? '' : 'none';
      });
    });
  }
  
  // Initialize Authentication
  function initAuth() {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    
    // Update UI based on login status
    if (currentUser) {
      const user = JSON.parse(currentUser);
      
      // Update auth buttons
      const authButtons = document.querySelector('.auth-buttons');
      if (authButtons) {
        authButtons.innerHTML = `
          <a href="profile.html">${user.name}</a>
          <a href="#" class="btn btn-outline logout-btn">Logout</a>
        `;
        
        // Add logout event listener
        const logoutBtn = document.querySelector('.logout-btn');
        if (logoutBtn) {
          logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.reload();
          });
        }
      }
    }
    
    // Handle login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Find user
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
          // Store logged in user
          localStorage.setItem('currentUser', JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email
          }));
          
          // Show success message
          showAuthMessage('Login successful! Redirecting...', 'success');
          
          // Redirect to home page
          setTimeout(function() {
            window.location.href = 'index.html';
          }, 1500);
        } else {
          // Show error message
          showAuthMessage('Invalid email or password', 'error');
        }
      });
    }
    
    // Handle register form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
      registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        
        // Validate inputs
        if (!name || !email || !password || !confirmPassword) {
          showAuthMessage('Please fill in all fields', 'error');
          return;
        }
        
        if (password !== confirmPassword) {
          showAuthMessage('Passwords do not match', 'error');
          return;
        }
        
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if email already exists
        if (users.some(u => u.email === email)) {
          showAuthMessage('Email already registered', 'error');
          return;
        }
        
        // Create new user
        const newUser = {
          id: Date.now().toString(),
          name: name,
          email: email,
          password: password
        };
        
        // Add to users array
        users.push(newUser);
        
        // Save to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        // Show success message
        showAuthMessage('Registration successful! You can now log in.', 'success');
        
        // Redirect to login page
        setTimeout(function() {
          window.location.href = 'login.html';
        }, 1500);
      });
    }
    
    // Show auth message
    function showAuthMessage(message, type) {
      const authMessage = document.querySelector('.auth-message');
      if (!authMessage) return;
      
      authMessage.textContent = message;
      authMessage.className = `auth-message ${type}`;
      authMessage.style.display = 'block';
    }
  }

  // Function to update navigation based on auth state
  function updateNavigation() {
    const authLinks = document.getElementById('auth-links');
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
        const user = JSON.parse(userData);
        authLinks.innerHTML = `
            <div class="user-menu">
                <span class="user-name">${user.name}</span>
                <div class="dropdown-content">
                    <a href="saved-properties.html">Saved Properties</a>
                    <a href="#" id="logout-btn">Logout</a>
                </div>
            </div>
        `;

        // Add event listener for logout
        document.getElementById('logout-btn').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    } else {
        authLinks.innerHTML = '<a href="login.html">Sign In</a>';
    }
  }

  // Call updateNavigation when the page loads
  document.addEventListener('DOMContentLoaded', updateNavigation);

  // Add styles for user menu
  const style = document.createElement('style');
  style.textContent = `
    .user-menu {
        position: relative;
        cursor: pointer;
    }

    .user-name {
        color: var(--primary-color);
        padding: 10px;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        right: 0;
        background-color: var(--white);
        min-width: 160px;
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        z-index: 1000;
    }

    .user-menu:hover .dropdown-content {
        display: block;
    }

    .dropdown-content a {
        color: var(--black);
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {
        background-color: var(--light-gray);
    }
  `;
  document.head.appendChild(style);