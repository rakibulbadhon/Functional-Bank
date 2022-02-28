document.getElementById('submit-button').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user passwod
    const passField = document.getElementById('user-password');
    const userPassword = passField.value;
    //check email & password
    if (userEmail == 'badhon@gmail.com' && userPassword == 1234) {
        window.location.href = "banking.html";
    }
    else {
        console.log('not a user');
    }
});