<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_POST) {
    $name = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $phone = $_POST['phone-number'];
    $msg = $_POST['message'];
    $messageHtml = "<html>
                    <h5>Datos de contacto</h5>
                    <p>Name: <b>$name</b></p>
                    <p>Last Name: <b>$lastName</b></p>
                    <p>Email: <b>$email</b></p>
                    <p>Phone: <b>$phone</b></p>
                    <hr>
                    <h5>Mensaje</h5>
                    <p>$msg</p>
                    </html>";
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'egarduno182@gmail.com';                     //SMTP username
    $mail->Password   = 'qsddskivufjqubxg';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('remitente@gmail.com', 'Tony');
    $mail->addAddress('egarduno182@gmail.com', 'Edgar G');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $messageHtml;

    if ($mail->send()) {
        echo 'Message has been sent';
        header("Location: index.html#home");
        exit;
    }
} catch (Exception $e) {
    echo "Message could not be sent.: {$mail->ErrorInfo}";
}
