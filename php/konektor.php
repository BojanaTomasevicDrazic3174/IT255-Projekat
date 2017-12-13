<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

try {
  $konektor = new PDO('mysql: host=localhost; dbname=renta_car_unos','root','jupiter05');
  $konektor -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
   echo $e -> getMessage();
   die();
}


 ?>
