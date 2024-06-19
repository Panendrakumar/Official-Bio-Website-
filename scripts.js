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
    const signupForm = document.getElementById('signup-form');
    const signupButton = document.getElementById('signup-button');
    const showLoginLink = document.getElementById('show-login');

    // Function to show signup form and hide login form
    function showSignupForm() {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }

    // Function to show login form and hide signup form
    function showLoginForm() {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    }

    signupButton.addEventListener('click', function() {
        showSignupForm();
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle signup form submission logic here
        // Example: Validate inputs and create new account
        console.log('Signup form submitted');
    });
});
