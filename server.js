document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const backendURL = 'https://logan444yt.netlify.app/signup'; // Replace with actual backend URL

    fetch(backendURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Success message
        console.log('Account created successfully:', data);
        alert('Account created successfully. Redirecting to login page.');

        // Redirect to login page after successful signup
        window.location.href = 'account.html';
    })
    .catch(error => {
        console.error('Error creating account:', error);
        alert('Error creating account. Please try again.');
    });
});
