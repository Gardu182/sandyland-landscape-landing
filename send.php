<?php
$config = require __DIR__ . '/config.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_POST) {
    $name = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $phone = $_POST['phone-number'];
    $msg = $_POST['message'];
    $messageHtml = "<html>
                    <h5>Contact Information</h5>
                    <p>Name: <b>$name</b></p>
                    <p>Last Name: <b>$lastName</b></p>
                    <p>Email: <b>$email</b></p>
                    <p>Phone: <b>$phone</b></p>
                    <hr>
                    <h5>Messagee</h5>
                    <p>$msg</p>
                    </html>";


    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = $config["smtp_user"];                     //SMTP username
        $mail->Password   = $config["smtp_password"];                              //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('remitente@gmail.com', 'Tony');
        $mail->addAddress('egarduno182@gmail.com', 'Edgar G');     //Add a recipient

        // Attach file if provided
        if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
            $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
        }

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $messageHtml;

        if ($mail->send()) {
            header("Location: index.html#home");
            echo 'Message has been sent';
            exit;
        }
    } catch (Exception $e) {
        echo "Message could not be sent.: {$mail->ErrorInfo}";
    }
}
