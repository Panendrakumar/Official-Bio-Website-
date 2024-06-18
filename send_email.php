<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Email address where you want to receive messages
    $to = 'logan444ythelp@gmail.com'; // Replace with your email address
    
    // Email subject
    $subject = 'New Message from Contact Form';
    
    // Email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message\n";
    
    // Email headers
    $headers = "From: $email";
    
    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        echo '<script>alert("Message sent successfully. We will contact you shortly."); window.location.href = "contact.html";</script>';
    } else {
        echo '<script>alert("Sorry, there was an error sending your message. Please try again later."); window.location.href = "contact.html";</script>';
    }
} else {
    // If the form is not submitted, redirect to the contact page
    header('Location: contact.html');
}
?>
