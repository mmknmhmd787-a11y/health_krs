const SECRET_KEY = "Krs123456&0"; 
const loginForm = document.getElementById('loginForm');
const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const errorMsg = document.getElementById('errorMessage');

loginForm.onsubmit = (e) => {
    e.preventDefault(); 
    const passVal = document.getElementById('password').value;
    const userVal = document.getElementById('username').value;

    if (passVal === SECRET_KEY) {
        document.getElementById('displayUser').innerText = userVal;
        loginPage.classList.add('hidden');
        dashboardPage.classList.remove('hidden');
    } else {
        errorMsg.style.display = 'block';
        document.getElementById('password').value = "";
    }
};
