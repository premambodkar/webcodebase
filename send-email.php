<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Read POST JSON body
$input = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($input['name']);
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($input['message']);

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo "Missing fields";
    exit;
}

// Change this to your email
$to = "connect@tekmbilical.com";
$subject = "Contact Message from $name";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Email sent successfully.";
} else {
    http_response_code(500);
    echo "Failed to send email.";
}
?>