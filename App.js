const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simulate form submission (you can add actual form submission logic here)
    setTimeout(function() {
        // Show the notification
        var notification = document.getElementById('notification');
        notification.classList.add('show');

        // Hide the notification after 3 seconds
        setTimeout(function() {
            notification.classList.remove('show');
        }, 3000);

        // Reset the form (optional)
        document.getElementById('contactForm').reset();
    }, 500); // Simulate a delay before showing the notification
});
// Get the modal elements
var loginModal = document.getElementById('loginModal');
var signupModal = document.getElementById('signupModal');

// Get the button that opens the login modal
var loginBtn = document.getElementById('login-btn');

// Get the <span> elements that close the modals
var closeBtns = document.getElementsByClassName('close');

// Get the "Sign up here" and "Login here" links
var showSignup = document.getElementById('showSignup');
var showLogin = document.getElementById('showLogin');

// Open the login modal when login button is clicked
loginBtn.onclick = function() {
    loginModal.style.display = 'block';
}

// Close the modals when the close button is clicked
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    }
}

// Switch to signup modal
showSignup.onclick = function() {
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
}

// Switch to login modal
showLogin.onclick = function() {
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
}

// Close the modals when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == loginModal || event.target == signupModal) {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    }
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Logged in successfully!');
    loginModal.style.display = 'none';
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Signed up successfully!');
    signupModal.style.display = 'none';
});
