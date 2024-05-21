// scripts.js
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registration successful!');
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('secured-container').style.display = 'block';
        document.getElementById('secured-username').textContent = username;
    } else {
        alert('Invalid login credentials');
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    document.getElementById('secured-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});