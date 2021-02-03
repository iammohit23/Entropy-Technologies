<?php

$name = $_POST['fullname'];
$email = $_POST['email'];
$message = $_POST['message'];

$email_from - 'EntropyTechnologies.in';

$email_subject = " New Message";

$email_body - "User Name: $fullname.\n"-
               "User Email: $email.\n"-
               "User Message: $message.\n";

$to - "mohitpandey23november@gmail.com";

$headers - "From: $email_from \r\n";

$headers - "Reply-To: $email \r\n";

mail($to,$email_subject,$email_body,$headers);

headers("Location: entropy-technology-contact.html");

?>