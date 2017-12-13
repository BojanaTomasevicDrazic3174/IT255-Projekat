<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
include("functions.php");

if(isset($_POST['clientName']) && isset($_POST['clientLastName']) && isset($_POST['clientAddress']) && isset($_POST['clientDateOfBirth'])
&& isset($_POST['clientTelefonNum']) && isset($_POST['clientEmail']) && isset($_POST['clientUsername']) && isset($_POST['clientPassword'])){

$firstname = $_POST['clientName'];
$lastname = $_POST['clientLastName'];
$adresa = $_POST['clientAddress'];
$datum_r = $_POST['clientDateOfBirth'];
$telefon = $_POST['clientTelefonNum'];
$email = $_POST['clientEmail'];
$username = $_POST['clientUsername'];
$password = $_POST['clientPassword'];


echo register($firstname,$lastname,$adresa,$datum_r,$telefon,$email,$username,$password);

}

?>
