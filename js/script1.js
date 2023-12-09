// script1.js

function login() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    const enteredEmail = document.querySelector('.sign-in input[type="email"]').value;
    const enteredPassword = document.querySelector('.sign-in input[type="password"]').value;

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        alert('Login successful!');
        // Chuyển hướng đến trang index.html khi đăng nhập thành công
        window.location.href = 'index.html';
    } else {
        alert('Incorrect email or password.');
    }
}


// script1.js
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

function toggleForm() {
    const container = document.getElementById('container');
    container.classList.toggle('active');
}

loginButton.addEventListener('click', () => {
    toggleForm();
});

registerButton.addEventListener('click', () => {
    toggleForm();
});

function register() {
    const name = document.querySelector('.sign-up input[type="text"]').value;
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelector('.sign-up input[type="password"]').value;

    // Store the registration information in Local Storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Optionally, you can redirect to another page after registration
    // window.location.href = 'index1.html';
}

function login() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    const enteredEmail = document.querySelector('.sign-in input[type="email"]').value;
    const enteredPassword = document.querySelector('.sign-in input[type="password"]').value;

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        alert('Login successful!'); // You can replace this with your own logic or redirect to another page
    } else {
        alert('Incorrect email or password.');
    }
}


// Adding sample accounts
localStorage.setItem('adminEmail', 'admin@example.com');
localStorage.setItem('adminPassword', 'admin123');

localStorage.setItem('userEmail', 'user@example.com');
localStorage.setItem('userPassword', 'user123');
