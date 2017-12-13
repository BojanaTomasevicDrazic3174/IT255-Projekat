<?php

   header('Access-Control-Allow-Methods: GET');
   include("functions.php");

   $method2  = file_get_contents('php://input');
   $data = json_decode($method2);

   $idClientA =$data -> idClientA;
   $clientName =$data -> clientName;
   $clientLastName =$data -> clientLastName;
   $clientAddress =$data -> clientAddress ;
   $clientDateOfBirth =$data -> clientDateOfBirth;
   $clientTelefonNum =$data -> clientTelefonNum;
   $clientEmail =$data -> clientEmail;
   $clientUsername =$data -> clientUsername;
   $clientPassword =$data -> clientPassword;
   $tip =$data -> tip;

   echo addClient($idClientA,$clientName,$clientLastName,$clientAddress,$clientDateOfBirth,$clientTelefonNum,$clientEmail,$clientUsername,$clientPassword,$tip);


  ?>
