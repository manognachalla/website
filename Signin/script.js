const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Validation logic
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('sign-up-name').value;
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;

    if (!name) {
        alert('Name is required.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email format.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Form is valid, you can submit it
    alert('Registration successful');
});

document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;

    if (!validateEmail(email)) {
        alert('Invalid email format.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Form is valid, you can submit it
    const isLoggedIn = true; // Change this based on actual login validation

    if (isLoggedIn) {
        alert('Login successful');
        // Redirect to Cola/index.html
        window.location.href = "Blog/index.html";
    } else {
        alert('Login failed. Please check your credentials.');
    }
});

/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, otherwise false.
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
