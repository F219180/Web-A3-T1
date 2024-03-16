$(document).ready(function() {
    // SignIn Form Validation
    $('#signInForm').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        
        if (username.trim() === '') {
            alert('Username cannot be empty');
            return;
        }

        if (password.trim() === '') {
            alert('Password cannot be empty');
            return;
        }

        // You can add additional validation here if needed

        // If all validations pass, you can proceed with SignIn
        alert('Sign In Successful');
    });

    // SignUp Form Validation
    $('#signUpForm').submit(function(event) {
        event.preventDefault();
        var fullName = $('#fullName').val();
        var email = $('#email').val();
        var signupPassword = $('#signupPassword').val();
        var age = $('#age').val();

        if (fullName.trim() === '') {
            alert('Full Name cannot be empty');
            return;
        }

        if (email.trim() === '' || !isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (signupPassword.trim() === '' || !isValidPassword(signupPassword)) {
            alert('Password must contain at least one special character and one numeric character');
            return;
        }

        if (isNaN(age) || age < 1 || age > 120) {
            alert('Please enter a valid age');
            return;
        }

        // You can add additional validation here if needed

        // If all validations pass, you can proceed with SignUp
        alert('Sign Up Successful');
    });

    // Helper function to validate email format
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to validate password format
    function isValidPassword(password) {
        var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    }
});
