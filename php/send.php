<?php

$username = $_POST['username'];
$userphone = $_POST['userphone'];

$username = htmlspecialchars($username);
$userphone = htmlspecialchars($userphone);

$username = urldecode($username);
$userphone = urldecode($userphone);

$username = trim($username);
$userphone = trim($userphone);

$to  = 'example@email.ru'; //электронный адрес получателя
$subject = 'Письмо с сайта terminalmontage.ru';
$message = 'Пользователь' . $username . ' отправил вам заявку. Связяться с ним можно по телефону ' . $userphone . '.'
;
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

mail($to, $subject, $message, $headers);

?>
