function switchToRegister() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('registerFormContainer').style.display = 'block';
    document.getElementById('switchToLogin').style.display = 'block';
    document.getElementById('switchToRegister').style.display = 'none';
}

function switchToLogin() {
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('registerFormContainer').style.display = 'none';
    document.getElementById('switchToLogin').style.display = 'none';
    document.getElementById('switchToRegister').style.display = 'block';
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === 'admin' && password === 'admin') {
        setSessionData(username); 
        window.location.href = 'form.html'; 
    } else {
        document.getElementById('loginErrorMessage').textContent = 'Invalid credentials, please try again.';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const email = document.getElementById('registerEmail').value;

    alert('Registration successful! You can now log in.');

    switchToLogin();
});

function setSessionData(username) {
    localStorage.setItem('username', username);
}
function checkSession() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('logoutSection').style.display = 'block';
        document.getElementById('loggedInUser').textContent = `Welcome, ${username}`;
    } else {
        document.getElementById('loginSection').style.display = 'block';
        document.getElementById('logoutSection').style.display = 'none';
    }
}


document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('username'); 
    window.location.href = 'index.html'; 
});

window.onload = checkSession;
