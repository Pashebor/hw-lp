<?php
require ('./phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail -> isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'info.repeople@mail.ru';
$mail->Password = 'shmakover666witches';
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';
$mail->CharSet = 'UTF-8';
$mail->From = 'info.repeople@mail.ru';
$mail->FromName = 'REPEOPLE';
$mail->addAddress('Viprepeople@mail.ru', 'REPEOPLE');
$mail->addAddress('pashebor@gmail.com', 'REPEOPLE');
$mail->isHtml(true);
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idToDel = $_POST["formData"];
    /*$requestCallback = preg_replace('/(\w+)\s{0,1}:/', '"\1":', str_replace(array("\r\n", "\r", "\n", "\t"), "", $idToDel))*/;
    $arrRequest = json_decode($idToDel, true);
    if (!empty($arrRequest)) {
        switch ($arrRequest['form-name']) {
            case 'callback':
                $mail->Subject = 'Заказ обратного звонка';
                $mail->Body = '<div><p>Время звонка: '.$arrRequest['callback'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
                $mail->send();
                echo json_encode(["response" => true]);
                break;
            case 'header':
                $mail->Subject = 'Рекомендации(Лендинг-шапка) - заказ рекомендаций';
                $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p></div><div><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
                $mail->send();
                echo json_encode(["response" => true]);
                break;
            case 'recomendations-example':
                $mail->Subject = 'Заказ примера рекомендаций';
                $mail->Body = '<div><p>Электронная почта клиента: '.$arrRequest['email'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
                $mail->send();
                echo json_encode(["response" => true]);
                break;
            case 'product-order':
                $mail->Subject = 'Заказ продукта (натальные карты и т.д.)';
                $mail->Body = '<div><p>Продукт: '.$arrRequest['product'].'</p><p>Электронная почта клиента: '.$arrRequest['email'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
                $mail->send();
                echo json_encode(["response" => true]);
                break;
            case 'schema':
                $mail->Subject = 'Заявка на составление точного анализа';
                $mail->Body = '<div><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
                $mail->send();
                echo json_encode(["response" => true]);
                break;
        }
    } else {
        echo json_encode(["response" => false]);
    }
}
?>