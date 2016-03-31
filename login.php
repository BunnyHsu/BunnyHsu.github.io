<?php
$username = htmlspecialchars($_POST['username']);
$password = htmlspecialchars($_POST['password']);
$html = MD5($username+$password);
if(htmlspecialchars($password) =='admin' && htmlspecialchars($username) == 'admin')
{
	header("Location:".""."data/".""."$html"."".".html");
	exit();
}
else
{
	echo "<script>
	alert('password or username is not correct!');
	location.href ='signin.html'</script>";
	exit();
}
?>