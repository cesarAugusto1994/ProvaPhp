<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "prova_php";

$con = @mysql_connect($host, $user, $pass);
@mysql_select_db($db, $con);

?>