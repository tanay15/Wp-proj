// Sample agent data
const agents = [
    {
        id: 1,
        name: "Saihajvir Singh",
        title: "Senior Real Estate Agent",
        email: "saihajvir@yourrealestate.com",
        phone: "+91 98765 43210",
        image: "/placeholder.svg?height=400&width=400",
        bio: "Saihajvir has over 10 years of experience in the Mumbai real estate market. She specializes in luxury properties and has helped numerous clients find their dream homes in premium locations across the city.",
        expertise: ["Luxury Properties", "Residential", "Investment"],
        languages: ["English", "Hindi", "Marathi"],
        properties: [1, 4]
    },
    {
        id: 2,
        name: "Tanish Sharma",
        title: "Commercial Property Specialist",
        email: "tanish@yourrealestate.com",
        phone: "+91 98765 43211",
        image: "/placeholder.svg?height=400&width=400",
        bio: "Tanish is an expert in commercial real estate with a focus on office spaces and retail properties. With his deep understanding of business requirements, he helps clients find the perfect space for their operations.",
        expertise: ["Commercial", "Office Space", "Retail"],
        languages: ["English", "Hindi", "Gujarati"],
        properties: [2, 5]
    },
    {
        id: 3,
        name: "Tanay Chaplot",
        title: "Residential Property Expert",
        email: "tanay@yourrealestate.com",
        phone: "+91 98765 43212",
        image: "/placeholder.svg?height=400&width=400",
        bio: "Tanay specializes in residential properties across Mumbai. Her attention to detail and understanding of client needs make her an excellent guide in the home buying process.",
        expertise: ["Residential", "First-time Buyers", "Family Homes"],
        languages: ["English", "Hindi", "Marathi"],
        properties: [3, 6]
    }
];

// Helper function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Sample properties data (replace with your actual data source)
const properties = [
    { id: 1, name: "Luxury Apartment", price: 500000 },
    { id: 2, name: "Commercial Office Space", price: 1000000 },
    { id: 3, name: "Family Home", price: 750000 },
    { id: 4, name: "Penthouse Suite", price: 1200000 },
    { id: 5, name: "Retail Storefront", price: 800000 },
    { id: 6, name: "Townhouse", price: 600000 }
];

// Function to create a property card
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';

    card.innerHTML = `
        <h3>${property.name}</h3>
        <p>Price: $${property.price}</p>
    `;

    return card;
}

// Load agents on the agents page
document.addEventListener('DOMContentLoaded', function() {
    // Load all agents on agents page
    const agentsGrid = document.getElementById('agents-grid');
    if (agentsGrid) {
        agentsGrid.innerHTML = '';
        agents.forEach(agent => {
            const agentCard = createAgentCard(agent);
            agentsGrid.appendChild(agentCard);
        });
    }
    
    // Load agent profile on agent profile page
    const agentProfile = document.getElementById('agent-profile');
    if (agentProfile) {
        const agentId = parseInt(getUrlParameter('id'));
        const agent = agents.find(a => a.id === agentId);
        
        if (agent) {
            displayAgentProfile(agent, agentProfile);
        } else {
            agentProfile.innerHTML = '<p>Agent not found.</p>';
        }
    }
});

// Create agent card
function createAgentCard(agent) {
    const card = document.createElement('div');
    card.className = 'agent-card';
    
    card.innerHTML = `
        <div class="agent-image" style="background-image: url('${agent.image}')"></div>
        <div class="agent-details">
            <h3 class="agent-name">${agent.name}</h3>
            <p class="agent-title">${agent.title}</p>
            <div class="agent-contact">
                <a href="tel:${agent.phone}">Call</a>
                <a href="mailto:${agent.email}">Email</a>
                <a href="agent-profile.html?id=${agent.id}">View Profile</a>
            </div>
        </div>
    `;
    
    return card;
}

// Display agent profile
function displayAgentProfile(agent, container) {
    // Get agent's properties
    const agentProperties = properties.filter(property => 
        agent.properties.includes(property.id)
    );
    
    container.innerHTML = `
        <div class="agent-profile">
            <div class="agent-profile-image" style="background-image: url('${agent.image}')"></div>
            <div class="agent-profile-info">
                <h1>${agent.name}</h1>
                <p class="agent-profile-title">${agent.title}</p>
                
                <div class="agent-profile-contact">
                    <a href="tel:${agent.phone}">Call</a>
                    <a href="mailto:${agent.email}">Email</a>
                </div>
                
                <div class="agent-profile-bio">
                    <h2>About</h2>
                    <p>${agent.bio}</p>
                </div>
                
                <div>
                    <h3>Expertise</h3>
                    <p>${agent.expertise.join(', ')}</p>
                </div>
                
                <div>
                    <h3>Languages</h3>
                    <p>${agent.languages.join(', ')}</p>
                </div>
            </div>
        </div>
        
        <div class="agent-properties">
            <h2>${agent.name}'s Listings</h2>
            <div class="property-grid" id="agent-properties-grid"></div>
        </div>
    `;
    
    // Add agent's properties
    const agentPropertiesGrid = container.querySelector('#agent-properties-grid');
    
    if (agentProperties.length === 0) {
        agentPropertiesGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; margin: 2rem 0;">No properties currently listed by this agent.</p>';
    } else {
        agentProperties.forEach(property => {
            const propertyCard = createPropertyCard(property);
            agentPropertiesGrid.appendChild(propertyCard);
        });
    }
}