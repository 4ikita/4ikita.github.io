<?php 
$name = $_POST['name'];
$Email = $_POST['Email'];
$Number = $_POST['Number'];
$quantity = $_POST['quantity'];
$comments = $_POST['comments'];
$name = htmlspecialchars($name);
$Email = htmlspecialchars($Email);
$Number = htmlspecialchars($Number);
$quantity = htmlspecialchars($quantity);
$comments = htmlspecialchars($comments);
$name = urldecode($name);
$Email = urldecode($Email);
$Number = urldecode($Number);
$quantity = urldecode($quantity);
$comments = urldecode($quantity);
$name = trim($name);
$Email = trim($Email);
$Number = trim($Number);
$quantity = trim($quantity);
$comments = trim($comments);
echo $name;
echo "<br>";
echo $Email;
echo "<br>";
echo $Number;
echo "<br>";
echo $quantity;
echo "<br>";
echo $comments;

if(isset($_POST['submit'])){
    $to = "math4pro@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
    $from = $_POST['Email']; // this is the sender's Email address
    $first_name = $_POST['name'];
    $subject = "Форма отправки сообщений с сайта";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " оставил сообщение:" . "\n\n" . $_POST['comments'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['comments'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
	
    mail($to,$subject,$message,$headers);
   // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
    echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
	echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";

}


?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://localhost:8888/getrop");}
window.setTimeout("changeurl();",3000);
</script>