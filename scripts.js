document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});

// scripts.js

// scripts.js

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


// script.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const signupEmailInput = document.getElementById('signup-email');
    const emailError = document.getElementById('email-error');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Perform additional validation or submission logic here
        console.log('Signup form submitted');
    });

    signupEmailInput.addEventListener('input', function() {
        const email = signupEmailInput.value.trim();
        if (email !== '') {
            // Basic email format validation
            if (!isValidEmail(email)) {
                emailError.textContent = 'Please enter a valid email address.';
            } else {
                emailError.textContent = '';
            }
        } else {
            emailError.textContent = '';
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const sendOtpBtn = document.getElementById('send-otp-btn');
    const otpField = document.getElementById('otp-field');
    const signupBtn = document.getElementById('signup-btn');
    let otpSent = ''; // To store the OTP sent to the user

    sendOtpBtn.addEventListener('click', function() {
        const email = document.getElementById('signup-email').value.trim();

        // Simulate sending OTP to the email (replace with your actual backend logic)
        otpSent = generateOTP(); // Generate OTP
        console.log('OTP:', otpSent); // For testing purposes, log OTP to console

        // Display OTP field and signup button
        otpField.style.display = 'block';
        signupBtn.style.display = 'inline-block';
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate OTP and proceed with account creation
        const enteredOTP = document.getElementById('signup-otp').value.trim();

        if (enteredOTP === otpSent) {
            // OTP verification successful, proceed with account creation
            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value;

            // Perform account creation (send data to backend for server-side processing)
            // Example: sendAccountCreationRequest(name, email, password);
            alert('Account created successfully!');
            // Redirect or perform other actions after account creation
        } else {
            alert('Invalid OTP. Please enter the correct OTP.');
        }
    });

    function generateOTP() {
        // Generate a random 6-digit OTP for demo purposes
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
});
