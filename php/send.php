<?php

$username = $_POST['username'];
$userphone = $_POST['userphone'];

$username = htmlspecialchars($username);
$userphone = htmlspecialchars($userphone);

$username = urldecode($username);
$userphone = urldecode($userphone);

$username = trim($username);
$userphone = trim($userphone);

// echo $username;
// echo "<br>";
// echo $userphone;

// получатель
$to  = 'yuzha@inbox.ru';

// тема письма
$subject = 'Письмо с сайта terminalmontage.ru';

// текст письма
$message = 'Пользователь' . $_POST['username'] . ' отправил вам письмо:<br />' . $_POST['message'] . '<br />
Связяться с ним можно по телефону ' . $_POST['userphone'] . '.'
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Дополнительные заголовки
$headers .= 'To: Полина <yuzha@inbox.ru>' . "\r\n"; // Свое имя и email

// Отправляем
mail($to, $subject, $message, $headers);

// if (mail("yuzha@inbox.ru", "Заявка с сайта terminalmontage.ru", "Имя:".$username.". Телефон: ".$userphone ,"From: example2@mail.ru \r\n"))
//  {
//     echo "сообщение успешно отправлено";
// } else {
//     echo "при отправке сообщения возникли ошибки";
// }


if(!$mail->Send()) {
  echo "Mailer Error: " . $mail->ErrorInfo;
} else {
  echo "Message sent!";
}
?>
