const sessionManager = {
    startSession: function(username) {
        sessionStorage.setItem('loggedIn', 'true'); 
        sessionStorage.setItem('username', username); 
        console.log("Session started for: " + username);
    },

    endSession: function() {
        sessionStorage.removeItem('loggedIn');  
        sessionStorage.removeItem('username');  
        console.log("Session ended.");
    },

    isLoggedIn: function() {
        return sessionStorage.getItem('loggedIn') === 'true';  
    },

    getUsername: function() {
        return sessionStorage.getItem('username');  
    },

    logout: function() {
        this.endSession();  
        window.location.href = "index.html";  
    }
};

if (!sessionManager.isLoggedIn() && !window.location.pathname.includes("index.html")) {
    alert("You must be logged in to access this page.");
    window.location.href = "index.html"; 
}

window.onload = function() {
    if (sessionManager.isLoggedIn()) {
        console.log("Welcome, " + sessionManager.getUsername());
    } else {
        console.log("User not logged in.");
    }
};