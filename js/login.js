document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple check for demonstration (Replace with server-side authentication in production)
        if (username === 'staff' && password === 'password123') {
            // Set session storage to indicate the user is logged in
            sessionStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'staff.html';
        } else {
            document.getElementById('errorMsg').textContent = 'Invalid username or password.';
        }
    });
});
