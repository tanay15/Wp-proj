// Simple AngularJS integration for Real Estate Website
// Add this script to your HTML files to enable AngularJS features

// Initialize AngularJS app
var realEstateApp = angular.module('realEstateApp', []);

// Main Controller
realEstateApp.controller('MainController', function($scope) {
  // Initialize properties
  $scope.properties = [];
  $scope.agents = [];
  $scope.testimonials = [];
  $scope.currentUser = null;
  $scope.mobileMenuActive = false;
  
  // Load data from localStorage or default
  $scope.init = function() {
    // Load properties
    var storedProperties = localStorage.getItem('properties');
    if (storedProperties) {
      $scope.properties = JSON.parse(storedProperties);
    } else {
      // Default properties
      $scope.properties = [
        {
          id: 1,
          title: "Modern Apartment in Downtown",
          price: 750000,
          priceFormatted: "$750,000",
          address: "123 Main St, New York, NY",
          type: "sale",
          location: "New York",
          bedrooms: 3,
          bathrooms: 2,
          area: 1200,
          lat: 40.7128,
          lng: -74.0060,
          image: "/placeholder.svg?height=200&width=300"
        },
        {
          id: 2,
          title: "Luxury Condo with Ocean View",
          price: 3500,
          priceFormatted: "$3,500/month",
          address: "456 Ocean Ave, Los Angeles, CA",
          type: "rent",
          location: "Los Angeles",
          bedrooms: 2,
          bathrooms: 2,
          area: 1000,
          lat: 34.0522,
          lng: -118.2437,
          image: "/placeholder.svg?height=200&width=300"
        },
        {
          id: 3,
          title: "Family Home with Backyard",
          price: 550000,
          priceFormatted: "$550,000",
          address: "789 Oak St, Chicago, IL",
          type: "sale",
          location: "Chicago",
          bedrooms: 4,
          bathrooms: 3,
          area: 2200,
          lat: 41.8781,
          lng: -87.6298,
          image: "/placeholder.svg?height=200&width=300"
        }
      ];
      localStorage.setItem('properties', JSON.stringify($scope.properties));
    }
    
    // Load agents
    var storedAgents = localStorage.getItem('agents');
    if (storedAgents) {
      $scope.agents = JSON.parse(storedAgents);
    } else {
      // Default agents
      $scope.agents = [
        {
          id: 1,
          name: "John Smith",
          title: "Senior Real Estate Agent",
          description: "Specializing in luxury properties and commercial real estate.",
          phone: "+1234567890",
          email: "john@realestate.com",
          image: "/placeholder.svg?height=150&width=150"
        },
        {
          id: 2,
          name: "Sarah Johnson",
          title: "Residential Property Expert",
          description: "Helping families find their dream homes for over 10 years.",
          phone: "+1234567890",
          email: "sarah@realestate.com",
          image: "/placeholder.svg?height=150&width=150"
        },
        {
          id: 3,
          name: "Michael Brown",
          title: "Investment Property Specialist",
          description: "Expert in finding high-return investment opportunities.",
          phone: "+1234567890",
          email: "michael@realestate.com",
          image: "/placeholder.svg?height=150&width=150"
        },
        {
          id: 4,
          name: "Emily Davis",
          title: "First-Time Buyer Specialist",
          description: "Guiding first-time buyers through the home buying process.",
          phone: "+1234567890",
          email: "emily@realestate.com",
          image: "/placeholder.svg?height=150&width=150"
        }
      ];
      localStorage.setItem('agents', JSON.stringify($scope.agents));
    }
    
    // Load testimonials
    var storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      $scope.testimonials = JSON.parse(storedTestimonials);
    } else {
      // Default testimonials
      $scope.testimonials = [
        {
          id: 1,
          text: "Working with RealEstate was an absolute pleasure. They helped us find our dream home in just two weeks. The entire process was smooth and stress-free.",
          author: "Robert & Lisa Thompson",
          title: "New Homeowners",
          image: "/placeholder.svg?height=50&width=50"
        },
        {
          id: 2,
          text: "As a first-time buyer, I was nervous about the process. My agent at RealEstate guided me through every step and found me a perfect starter home within my budget.",
          author: "Jennifer Wilson",
          title: "First-Time Buyer",
          image: "/placeholder.svg?height=50&width=50"
        },
        {
          id: 3,
          text: "I've been investing in properties for years, and RealEstate has consistently found me the best investment opportunities. Their market knowledge is unparalleled.",
          author: "David Martinez",
          title: "Property Investor",
          image: "/placeholder.svg?height=50&width=50"
        }
      ];
      localStorage.setItem('testimonials', JSON.stringify($scope.testimonials));
    }
    
    // Check if user is logged in
    var user = localStorage.getItem('currentUser');
    if (user) {
      $scope.currentUser = JSON.parse(user);
    }
  };
  
  // Logout function
  $scope.logout = function() {
    localStorage.removeItem('currentUser');
    $scope.currentUser = null;
    window.location.reload();
  };
  
  // Save property
  $scope.saveProperty = function(propertyId) {
    if (!$scope.currentUser) {
      alert('Please log in to save properties');
      window.location.href = 'login.html';
      return;
    }
    
    var savedProperties = JSON.parse(localStorage.getItem('savedProperties_' + $scope.currentUser.id) || '[]');
    
    if (!savedProperties.includes(propertyId)) {
      savedProperties.push(propertyId);
      localStorage.setItem('savedProperties_' + $scope.currentUser.id, JSON.stringify(savedProperties));
    }
  };
  
  // Check if property is saved
  $scope.isPropertySaved = function(propertyId) {
    if (!$scope.currentUser) return false;
    
    var savedProperties = JSON.parse(localStorage.getItem('savedProperties_' + $scope.currentUser.id) || '[]');
    return savedProperties.includes(propertyId);
  };
  
  // Initialize data
  $scope.init();
});

// Chatbot Controller
realEstateApp.controller('ChatbotController', function($scope, $timeout) {
  $scope.messages = [];
  $scope.newMessage = '';
  $scope.isTyping = false;
  $scope.isChatbotOpen = false;
  
  // Toggle chatbot
  $scope.toggleChatbot = function() {
    $scope.isChatbotOpen = !$scope.isChatbotOpen;
    
    // Add welcome message if it's the first time opening
    if ($scope.isChatbotOpen && $scope.messages.length === 0) {
      $scope.addBotMessage("Hello! I'm your real estate assistant. How can I help you today?");
    }
  };
  
  // Close chatbot
  $scope.closeChatbot = function() {
    $scope.isChatbotOpen = false;
  };
  
  // Add a bot message
  $scope.addBotMessage = function(text) {
    $scope.isTyping = true;
    
    // Simulate typing delay
    $timeout(function() {
      $scope.isTyping = false;
      $scope.messages.push({
        text: text,
        sender: 'bot',
        time: new Date()
      });
      
      // Scroll to bottom
      $timeout(function() {
        var chatMessages = document.querySelector('.chatbot-messages');
        if (chatMessages) {
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }
      }, 100);
    }, 1000);
  };
  
  // Add a user message
  $scope.addUserMessage = function(text) {
    $scope.messages.push({
      text: text,
      sender: 'user',
      time: new Date()
    });
    
    // Scroll to bottom
    $timeout(function() {
      var chatMessages = document.querySelector('.chatbot-messages');
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }, 100);
  };
  
  // Send message
  $scope.sendMessage = function() {
    if (!$scope.newMessage.trim()) return;
    
    // Add user message
    $scope.addUserMessage($scope.newMessage);
    
    // Process message
    $scope.processMessage($scope.newMessage);
    
    // Clear input
    $scope.newMessage = '';
  };
  
  // Process message and generate response
  $scope.processMessage = function(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      $scope.addBotMessage("Hello! How can I assist you with your real estate needs today?");
    } 
    else if (lowerMessage.includes('property') && (lowerMessage.includes('buy') || lowerMessage.includes('purchase'))) {
      $scope.addBotMessage("We have many properties available for purchase. You can browse our listings or tell me what you're looking for in terms of location, budget, and features.");
    }
    else if (lowerMessage.includes('rent')) {
      $scope.addBotMessage("We have rental properties available. What area are you interested in and what's your budget?");
    }
    else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      $scope.addBotMessage("Our properties range from $1,000/month for rentals to $500,000+ for purchases. Can you tell me more about what you're looking for?");
    }
    else if (lowerMessage.includes('agent') || lowerMessage.includes('realtor')) {
      $scope.addBotMessage("We have experienced agents ready to help you. Would you like me to connect you with one of our real estate professionals?");
    }
    else if (lowerMessage.includes('location') || lowerMessage.includes('area')) {
      $scope.addBotMessage("We have properties in downtown, suburbs, and surrounding areas. Which location interests you the most?");
    }
    else if (lowerMessage.includes('thank')) {
      $scope.addBotMessage("You're welcome! Is there anything else I can help you with?");
    }
    else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      $scope.addBotMessage("Thank you for chatting with us! Feel free to return if you have more questions. Have a great day!");
    }
    else {
      $scope.addBotMessage("I'd be happy to help with that. For more specific information, would you like to speak with one of our agents?");
    }
  };
});

// Authentication Controller
realEstateApp.controller('AuthController', function($scope) {
  $scope.loginData = {
    email: '',
    password: ''
  };
  
  $scope.registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  
  $scope.authMessage = {
    text: '',
    type: '',
    show: false
  };
  
  // Show auth message
  $scope.showAuthMessage = function(message, type) {
    $scope.authMessage.text = message;
    $scope.authMessage.type = type;
    $scope.authMessage.show = true;
  };
  
  // Login
  $scope.login = function() {
    // Validate inputs
    if (!$scope.loginData.email || !$scope.loginData.password) {
      $scope.showAuthMessage('Please fill in all fields', 'error');
      return;
    }
    
    // Get users from localStorage
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    var user = users.find(function(u) {
      return u.email === $scope.loginData.email && u.password === $scope.loginData.password;
    });
    
    if (user) {
      // Store logged in user
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email
      }));
      
      $scope.showAuthMessage('Login successful! Redirecting...', 'success');
      
      // Redirect to home page
      setTimeout(function() {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      $scope.showAuthMessage('Invalid email or password', 'error');
    }
  };
  
  // Register
  $scope.register = function() {
    // Validate inputs
    if (!$scope.registerData.name || !$scope.registerData.email || !$scope.registerData.password || !$scope.registerData.confirmPassword) {
      $scope.showAuthMessage('Please fill in all fields', 'error');
      return;
    }
    
    if ($scope.registerData.password !== $scope.registerData.confirmPassword) {
      $scope.showAuthMessage('Passwords do not match', 'error');
      return;
    }
    
    // Get users from localStorage
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.some(function(u) { return u.email === $scope.registerData.email; })) {
      $scope.showAuthMessage('Email already registered', 'error');
      return;
    }
    
    // Create new user
    var newUser = {
      id: Date.now().toString(),
      name: $scope.registerData.name,
      email: $scope.registerData.email,
      password: $scope.registerData.password
    };
    
    // Add to users array
    users.push(newUser);
    
    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    $scope.showAuthMessage('Registration successful! You can now log in.', 'success');
    
    // Redirect to login page
    setTimeout(function() {
      window.location.href = 'login.html';
    }, 1500);
  };
});