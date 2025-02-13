function register() {
    const email = document.getElementById('reg-email').value.trim();
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value.trim();

    if (email && username && password) {
        localStorage.setItem('registeredEmail', email);
        localStorage.setItem('registeredUser', username);
        localStorage.setItem('registeredPass', password);

        alert("Registration successful! Please log in.");
        toggleForm();
    } else {
        alert("Please enter a valid email, username, and password.");
    }
}

function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    const storedEmail = localStorage.getItem('registeredEmail');
    const storedUser = localStorage.getItem('registeredUser');
    const storedPass = localStorage.getItem('registeredPass');

    if (email === storedEmail && password === storedPass) {
        alert("Login successful!");
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', storedUser);
        window.location.href = "form.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function logout() {
    sessionStorage.clear();
    alert("You have logged out.");
    window.location.href = "index.html";
}

function toggleForm() {
    let registerSection = document.getElementById("register-section");
    let loginSection = document.getElementById("login-section");

    if (registerSection.style.display === "none") {
        registerSection.style.display = "block";
        loginSection.style.display = "none";
    } else {
        registerSection.style.display = "none";
        loginSection.style.display = "block";
    }
}

window.onload = function () {
    const storedUser = localStorage.getItem('registeredUser');
    if (storedUser) {
        document.getElementById('login-email').value = localStorage.getItem('registeredEmail');
        document.getElementById('login-username').value = storedUser;
    }

    if (sessionStorage.getItem('loggedIn') === 'true') {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("logout-section").style.display = "block";
    } else {
        document.getElementById("register-section").style.display = "block";
        document.getElementById("login-section").style.display = "none";
    }
};
