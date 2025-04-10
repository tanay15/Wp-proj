// Sample property data
const properties = [
    {
        id: 1,
        title: "Luxury Apartment in Bandra",
        location: "Bandra West, Mumbai",
        price: 15000000,
        status: "sale",
        type: "apartment",
        bedrooms: 3,
        bathrooms: 2,
        area: 1500,
        description: "Beautiful luxury apartment with stunning sea view in the heart of Bandra. This spacious 3-bedroom apartment features modern amenities, a large balcony, and 24/7 security.",
        features: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Garden", "Power Backup"],
        images: ["/placeholder.svg?height=600&width=800"],
        agentId: 1
    },
    {
        id: 2,
        title: "Modern Villa in Juhu",
        location: "Juhu, Mumbai",
        price: 50000000,
        status: "sale",
        type: "villa",
        bedrooms: 5,
        bathrooms: 4,
        area: 4000,
        description: "Luxurious 5-bedroom villa in the prestigious Juhu area. This property offers spacious living areas, a private garden, swimming pool, and modern amenities for comfortable living.",
        features: ["Swimming Pool", "Garden", "Home Theater", "Gym", "Parking", "24/7 Security"],
        images: ["/placeholder.svg?height=600&width=800"],
        agentId: 2
    },
    {
        id: 3,
        title: "Office Space in BKC",
        location: "Bandra Kurla Complex, Mumbai",
        price: 30000000,
        status: "sale",
        type: "commercial",
        bedrooms: 0,
        bathrooms: 2,
        area: 2000,
        description: "Prime commercial property in Bandra Kurla Complex. This office space is ideal for businesses looking for a strategic location in Mumbai's business district.",
        features: ["24/7 Security", "Parking", "Power Backup", "Conference Room", "Cafeteria"],
        images: ["/placeholder.svg?height=600&width=800"],
        agentId: 3
    },
    {
        id: 4,
        title: "Residential Plot in Powai",
        location: "Powai, Mumbai",
        price: 20000000,
        status: "sale",
        type: "plot",
        bedrooms: 0,
        bathrooms: 0,
        area: 3000,
        description: "Large residential plot in Powai with excellent connectivity. This plot is perfect for building your dream home in a serene environment with all modern amenities nearby.",
        features: ["Gated Community", "Water Connection", "Electricity", "Road Access"],
        images: ["/placeholder.svg?height=600&width=800"],
        agentId: 1
    },
    {
        id: 5,
        title: "2BHK Apartment for Rent in Andheri",
        location: "Andheri East, Mumbai",
        price: 50000,
        status: "rent",
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        area: 1000,
        description: "Well-maintained 2BHK apartment for rent in Andheri East. The apartment is fully furnished and located close to the metro station, making it convenient for daily commute.",
        features: ["Furnished", "24/7 Security", "Parking", "Gym", "Power Backup"],
        images: ["/placeholder.svg?height=600&width=800"],
        agentId: 2
    },
    {
        id: 6,
        title: "Penthouse in Worli",
        location: "Worli, Mumbai",
        price: 80000000,
        status: "sale",
        type: "apartment",
        bedrooms: 4,
        bathrooms: 4,
        area: 3500,
        description: "Luxurious penthouse in Worli with panoramic sea view. This 4-bedroom penthouse offers the ultimate luxury living experience with high-end finishes and exclusive amenities.",
        features: ["Sea View", "Private Terrace", "Swimming Pool", "Gym", "Home Theater", "24/7 Security"],
        images: ["/placeholder.svg?height=600&width=800"],
        agentId: 3
    }
];

// Helper functions (moved to top for clarity)
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function isPropertySaved(propertyId) {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.savedProperties && user.savedProperties.includes(propertyId);
}

function formatCurrency(number) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(number);
}

function toggleSavedProperty(propertyId) {
    let user = JSON.parse(localStorage.getItem('user')) || { savedProperties: [] };
    const isSaved = user.savedProperties.includes(propertyId);
    
    if (isSaved) {
        user.savedProperties = user.savedProperties.filter(id => id !== propertyId);
    } else {
        user.savedProperties.push(propertyId);
    }
    
    localStorage.setItem('user', JSON.stringify(user));
    return !isSaved;
}

// Load featured properties on the homepage
document.addEventListener('DOMContentLoaded', function() {
    // Load featured properties on homepage
    const featuredPropertiesGrid = document.getElementById('featured-properties-grid');
    if (featuredPropertiesGrid) {
        // Display first 3 properties as featured
        const featuredProperties = properties.slice(0, 3);
        
        featuredPropertiesGrid.innerHTML = '';
        featuredProperties.forEach(property => {
            const propertyCard = createPropertyCard(property);
            featuredPropertiesGrid.appendChild(propertyCard);
        });
    }
    
    // Load all properties on properties page
    const propertiesGrid = document.getElementById('properties-grid');
    if (propertiesGrid) {
        propertiesGrid.innerHTML = '';
        properties.forEach(property => {
            const propertyCard = createPropertyCard(property);
            propertiesGrid.appendChild(propertyCard);
        });
        
        // Set up filter functionality
        setupPropertyFilters();
    }
    
    // Load property details on property details page
    const propertyDetails = document.getElementById('property-details');
    if (propertyDetails) {
        const propertyId = parseInt(getUrlParameter('id'));
        const property = properties.find(p => p.id === propertyId);
        
        if (property) {
            displayPropertyDetails(property, propertyDetails);
        } else {
            propertyDetails.innerHTML = '<p>Property not found.</p>';
        }
    }
    
    // Load saved properties
    const savedPropertiesGrid = document.getElementById('saved-properties-grid');
    if (savedPropertiesGrid) {
        loadSavedProperties();
    }
});

// Create property card
function createPropertyCard(property, isSavedPage = false) {
    const card = document.createElement('div');
    card.className = 'property-card';
    
    const isSaved = isPropertySaved(property.id);
    const saveButtonText = isSaved ? 'Unsave' : 'Save';
    
    card.innerHTML = `
        <div class="property-image" style="background-image: url('${property.images[0]}')"></div>
        <div class="property-details">
            <h3 class="property-title">${property.title}</h3>
            <p class="property-location">${property.location}</p>
            <p class="property-price">${formatCurrency(property.price)}${property.status === 'rent' ? '/month' : ''}</p>
            <div class="property-features">
                <span>${property.bedrooms} Beds</span>
                <span>${property.bathrooms} Baths</span>
                <span>${property.area} sq.ft</span>
            </div>
            <div class="property-actions">
                <a href="property-details.html?id=${property.id}">View Details</a>
                <a href="#" class="save-property" data-id="${property.id}">${saveButtonText}</a>
            </div>
        </div>
    `;
    
    // Add event listener for save button
    const saveButton = card.querySelector('.save-property');
    saveButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const propertyId = parseInt(this.getAttribute('data-id'));
        const isSaved = toggleSavedProperty(propertyId);
        
        this.textContent = isSaved ? 'Unsave' : 'Save';
        
        // If on saved properties page, remove the card
        if (isSavedPage && !isSaved) {
            card.remove();
            
            // Check if there are any saved properties left
            const savedPropertiesGrid = document.getElementById('saved-properties-grid');
            if (savedPropertiesGrid && savedPropertiesGrid.children.length === 0) {
                savedPropertiesGrid.style.display = 'none';
                document.getElementById('no-saved-properties').style.display = 'block';
            }
        }
    });
    
    return card;
}

// Display property details
function displayPropertyDetails(property, container) {
    const agent = agents.find(a => a.id === property.agentId);
    
    container.innerHTML = `
        <div class="property-gallery" style="background-image: url('${property.images[0]}')"></div>
        <div class="property-info-content">
            <div class="property-info-header">
                <div class="property-info-title">
                    <h1>${property.title}</h1>
                    <p>${property.location}</p>
                </div>
                <div class="property-info-price">
                    ${formatCurrency(property.price)}${property.status === 'rent' ? '/month' : ''}
                </div>
            </div>
            
            <div class="property-info-details">
                <div class="property-info-detail">
                    <span>${property.bedrooms}</span>
                    <small>Bedrooms</small>
                </div>
                <div class="property-info-detail">
                    <span>${property.bathrooms}</span>
                    <small>Bathrooms</small>
                </div>
                <div class="property-info-detail">
                    <span>${property.area}</span>
                    <small>Square Feet</small>
                </div>
                <div class="property-info-detail">
                    <span>${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
                    <small>Property Type</small>
                </div>
                <div class="property-info-detail">
                    <span>${property.status === 'sale' ? 'For Sale' : 'For Rent'}</span>
                    <small>Status</small>
                </div>
            </div>
            
            <div class="property-description">
                <h2>Description</h2>
                <p>${property.description}</p>
            </div>
            
            <div class="property-features">
                <h2>Features</h2>
                <ul class="property-features-list">
                    ${property.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="property-agent">
                <div class="property-agent-image" style="background-image: url('${agent.image}')"></div>
                <div class="property-agent-info">
                    <h3>${agent.name}</h3>
                    <p>${agent.title}</p>
                    <div class="property-agent-contact">
                        <a href="tel:${agent.phone}">Call</a>
                        <a href="mailto:${agent.email}">Email</a>
                        <a href="agent-profile.html?id=${agent.id}">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add save property button
    const saveButton = document.createElement('button');
    saveButton.id = 'save-property-button';
    saveButton.className = isPropertySaved(property.id) ? 'saved' : '';
    saveButton.textContent = isPropertySaved(property.id) ? 'Saved Property' : 'Save Property';
    saveButton.style.marginTop = '20px';
    saveButton.style.width = '100%';
    
    saveButton.addEventListener('click', function() {
        const isSaved = toggleSavedProperty(property.id);
        this.textContent = isSaved ? 'Saved Property' : 'Save Property';
        this.className = isSaved ? 'saved' : '';
    });
    
    container.querySelector('.property-info-content').appendChild(saveButton);
}

// Set up property filters
function setupPropertyFilters() {
    const filterButton = document.getElementById('filter-button');
    if (!filterButton) return;
    
    filterButton.addEventListener('click', function() {
        const locationSearch = document.getElementById('search-location').value.toLowerCase();
        const propertyType = document.getElementById('property-type').value;
        const propertyStatus = document.getElementById('property-status').value;
        
        const filteredProperties = properties.filter(property => {
            const locationMatch = !locationSearch || property.location.toLowerCase().includes(locationSearch);
            const typeMatch = !propertyType || property.type === propertyType;
            const statusMatch = !propertyStatus || property.status === propertyStatus;
            
            return locationMatch && typeMatch && statusMatch;
        });
        
        const propertiesGrid = document.getElementById('properties-grid');
        propertiesGrid.innerHTML = '';
        
        if (filteredProperties.length === 0) {
            propertiesGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; margin: 2rem 0;">No properties found matching your criteria.</p>';
        } else {
            filteredProperties.forEach(property => {
                const propertyCard = createPropertyCard(property);
                propertiesGrid.appendChild(propertyCard);
            });
        }
    });
}

// Load saved properties
function loadSavedProperties() {
    const user = JSON.parse(localStorage.getItem('user'));
    const savedPropertiesGrid = document.getElementById('saved-properties-grid');
    const noSavedProperties = document.getElementById('no-saved-properties');
    
    if (!user || !user.savedProperties || user.savedProperties.length === 0) {
        savedPropertiesGrid.style.display = 'none';
        noSavedProperties.style.display = 'block';
        return;
    }
    
    savedPropertiesGrid.style.display = 'grid';
    noSavedProperties.style.display = 'none';
    
    // Get saved properties from data
    const savedProperties = properties.filter(property => 
        user.savedProperties.includes(property.id)
    );
    
    // Display saved properties
    savedPropertiesGrid.innerHTML = '';
    savedProperties.forEach(property => {
        const propertyCard = createPropertyCard(property, true);
        savedPropertiesGrid.appendChild(propertyCard);
    });
}

// Sample agent data for property details
const agents = [
    {
        id: 1,
        name: "Saihajvir Singh",
        title: "Senior Real Estate Agent",
        email: "saihaj@yourrealestate.com",
        phone: "+91 98765 43210",
        image: "/placeholder.svg?height=400&width=400"
    },
    {
        id: 2,
        name: "Tanish Sharma",
        title: "Commercial Property Specialist",
        email: "tanish@yourrealestate.com",
        phone: "+91 98765 43211",
        image: "/placeholder.svg?height=400&width=400"
    },
    {
        id: 3,
        name: "Tanay Chaplot",
        title: "Residential Property Expert",
        email: "tanay@yourrealestate.com",
        phone: "+91 98765 43212",
        image: "/placeholder.svg?height=400&width=400"
    }
];