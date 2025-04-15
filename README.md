# Property Seek - Mumbai Real Estate Website

![Property Seek Logo](html/random.svg?height=100&width=100)

Property Seek is a modern, responsive real estate website designed to help users find their dream properties in Mumbai. The platform offers a comprehensive solution for property seekers, with features like property listings, agent profiles, blog content, and an interactive chatbot.

## Features

- **Property Listings**: Browse through a wide range of properties with detailed information, images, and location data
- **Property Search & Filtering**: Search properties by location, type, price range, and more
- **Property Details**: View comprehensive information about each property including amenities, location, and nearby places
- **Agent Profiles**: Connect with real estate agents who can help with your property search
- **Blog Section**: Read informative articles about real estate trends, investment opportunities, and home buying guides
- **Interactive Chatbot**: Get instant assistance with your property queries
- **User Authentication**: Create an account to save favorite properties and access personalized features
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Frameworks**: AngularJS
- **Styling**: Custom CSS with responsive design
- **Maps Integration**: Google Maps API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript (for development)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/property-seek.git
   ```

2. Navigate to the project directory:
   ```
   cd property-seek
   ```

3. Open the project in your preferred code editor.

4. For local development, you can use a simple HTTP server:
   ```
   npx serve html
   ```

5. Open your browser and visit `http://localhost:3000` to view the website.

## Project Structure

```
property-seek/
├── html/                  # Main HTML files
│   ├── index.html         # Homepage
│   ├── properties.html    # Property listings page
│   ├── property-details.html # Individual property page
│   ├── agents.html        # Agents listing page
│   ├── blog.html          # Blog page
│   ├── about.html         # About page
│   ├── contact.html       # Contact page
│   ├── login.html         # Login page
│   ├── register.html      # Registration page
│   └── saved-properties.html # User's saved properties
├── css/                   # CSS files
│   └── final images/      # Image assets
├── java script/           # JavaScript files
│   ├── main.js            # Main JavaScript functionality
│   ├── auth.js            # Authentication related functions
│   ├── properties.js      # Property listing and details functionality
│   ├── agents.js          # Agent listing and profile functionality
│   ├── blog.js            # Blog functionality
│   ├── chatbot.js         # Chatbot functionality
│   └── activity-tracker.js # User activity tracking
└── vercel.json            # Vercel deployment configuration
```

## Key Features Explained

### Property Search and Filtering

The website allows users to search for properties using various filters such as location, property type, price range, and more. The search functionality is implemented in `properties.js`.

### Interactive Chatbot

The chatbot provides instant assistance to users with their property queries. It's implemented in `chatbot.js` and uses a simple keyword-based response system.

### User Authentication

User authentication is handled through `auth.js`, which manages login, registration, and session management using localStorage.

### Property Details

Each property has a detailed page showing comprehensive information, images, location on map, and nearby amenities. This is implemented in `properties.js`.

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains the necessary configuration for static site deployment.

To deploy to Vercel:

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Deploy the project:
   ```
   vercel
   ```

## Future Enhancements

- Integration with a backend API for real-time data
- Advanced search filters and sorting options
- Property comparison feature
- Virtual property tours
- Mortgage calculator with more detailed options
- User reviews and ratings for properties and agents

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Maps API for location services
- Font Awesome for icons
- Roboto font from Google Fonts
- All contributors who have helped shape this project

## Contact

For any queries or suggestions, please reach out to us at info@propertyseek.com. 


##NOTE
.env file has not been uploaded.!!!!due to OBVIOUS reasons.
