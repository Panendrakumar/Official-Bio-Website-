document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const agreementCheckbox = document.getElementById('agreement');
    const submitButton = document.getElementById('submit-button');

    const emailAPIKey = 'YOUR_EMAIL_VALIDATOR_API_KEY';

    agreementCheckbox.addEventListener('change', () => {
        submitButton.disabled = !agreementCheckbox.checked;
    });

    submitButton.addEventListener('mouseenter', (event) => {
        if (submitButton.disabled) {
            submitButton.title = 'Please click the checkbox first';
        } else {
            submitButton.title = '';
        }
    });

    emailInput.addEventListener('blur', async () => {
        const email = emailInput.value;
        if (validateEmailFormat(email)) {
            const isValid = await validateEmailWithAPI(email);
            if (!isValid) {
                emailError.textContent = 'Please type a valid email id';
                submitButton.disabled = true;
            } else {
                emailError.textContent = '';
                submitButton.disabled = !agreementCheckbox.checked;
            }
        } else {
            emailError.textContent = 'Please type a valid email id';
            submitButton.disabled = true;
        }
    });

    form.addEventListener('submit', (event) => {
        if (!validateEmailFormat(emailInput.value) || !agreementCheckbox.checked) {
            event.preventDefault();
            emailError.textContent = 'Please type a valid email id';
        }
    });

    function validateEmailFormat(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    async function validateEmailWithAPI(email) {
        const response = await fetch(`https://api.email-validator.net/api/verify?EmailAddress=${email}&APIKey=${emailAPIKey}`);
        const data = await response.json();
        return data.status === 200;
    }
});



// script.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle login form submission logic here
        // Example: Validate credentials and perform login action
        console.log('Login form submitted');
    });
});
