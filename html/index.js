// Check if user is authenticated
function checkAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Function to get authenticated user data
async function getUserData() {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch('http://localhost:3000/api/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (data.success) {
            return data.user;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    }
}

// Update UI based on authentication status
function updateAuthUI() {
    const authLinks = document.getElementById('auth-links');
    if (localStorage.getItem('token')) {
        const user = JSON.parse(localStorage.getItem('user'));
        authLinks.innerHTML = `
            <span>Welcome, ${user.name}</span>
            <a href="#" onclick="logout()">Logout</a>
        `;
    } else {
        authLinks.innerHTML = `
            <a href="login.html">Sign In</a>
        `;
    }
}

// Call updateAuthUI when the page loads
document.addEventListener('DOMContentLoaded', updateAuthUI); 