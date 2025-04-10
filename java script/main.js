// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYearElements = document.querySelectorAll('#current-year');
    const currentYear = new Date().getFullYear();
    
    currentYearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // Initialize mobile menu toggle if needed
    initializeMobileMenu();
});

// Mobile menu toggle
function initializeMobileMenu() {
    const header = document.querySelector('header');
    
    if (!header.querySelector('.mobile-menu-toggle')) {
        const nav = header.querySelector('nav');
        const mobileMenuToggle = document.createElement('div');
        mobileMenuToggle.className = 'mobile-menu-toggle';
        mobileMenuToggle.innerHTML = '<span></span><span></span><span></span>';
        
        header.insertBefore(mobileMenuToggle, nav);
        
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Add mobile menu styles
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 767px) {
                header {
                    flex-wrap: wrap;
                    padding: 0 5%;
                }
                
                header nav {
                    display: none;
                    width: 100%;
                    padding: 10px 0;
                }
                
                header nav.active {
                    display: block;
                }
                
                .mobile-menu-toggle {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 30px;
                    height: 21px;
                    cursor: pointer;
                    padding: 10px 0;
                }
                
                .mobile-menu-toggle span {
                    display: block;
                    height: 3px;
                    width: 100%;
                    background-color: var(--primary-color);
                    transition: var(--transition);
                }
                
                .mobile-menu-toggle.active span:nth-child(1) {
                    transform: translateY(9px) rotate(45deg);
                }
                
                .mobile-menu-toggle.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-menu-toggle.active span:nth-child(3) {
                    transform: translateY(-9px) rotate(-45deg);
                }
            }
            
            @media (min-width: 768px) {
                .mobile-menu-toggle {
                    display: none;
                }
                
                header nav {
                    display: block !important;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
}

// Helper function to format currency
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

// Helper function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Helper function to create HTML elements with attributes and content
function createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    for (const key in attributes) {
        if (key === 'className') {
            element.className = attributes[key];
        } else {
            element.setAttribute(key, attributes[key]);
        }
    }
    
    if (content) {
        if (typeof content === 'string') {
            element.innerHTML = content;
        } else {
            element.appendChild(content);
        }
    }
    
    return element;
}

// Helper function to truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}