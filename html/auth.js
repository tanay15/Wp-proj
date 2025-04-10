// Base URL of your backend server
const API_BASE_URL = 'http://localhost:3000/api';

// Function to handle login
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const errorMessage = document.getElementById('error-message');

    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (data.success) {
            // Store the token and user data
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            // Check for redirect parameter
            const redirectUrl = new URLSearchParams(window.location.search).get('redirect');
            if (redirectUrl) {
                window.location.href = redirectUrl;
            } else {
                window.location.href = 'index.html';
            }
        } else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = data.message;
        }
    } catch (error) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'An error occurred. Please try again.';
    }
}

// Function to handle registration
async function handleRegister(event) {
    event.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const errorMessage = document.getElementById('error-message');

    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (data.success) {
            // Store the token and user data
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            // Redirect to home page or dashboard
            window.location.href = 'index.html';
        } else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = data.message;
        }
    } catch (error) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'An error occurred. Please try again.';
    }
}

// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('token') !== null;
}

// Function to logout
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}

// Add event listeners when the document loads
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});