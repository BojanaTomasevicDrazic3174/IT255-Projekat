<?php

   header('Access-Control-Allow-Methods: GET');
   include("functions.php");

   $method2  = file_get_contents('php://input');
   $data = json_decode($method2);

   $idRezervation =$data -> idRezervation;
   $idCar =$data -> idCar;
   $idClientA =$data -> idClient;
   $idDuration =$data -> idDuration ;
   $dateRezervation =$data -> dateRezervation;
   $startDate =$data -> startDate;
   $endDate =$data -> endDate;
   $validRezervation =$data -> validRezervation;
   $typeRezervation =$data -> typeRezervation;
   $mileagePassed =$data -> mileagePassed;
   $price =$data -> price;
   $status  =$data -> status;

   echo addRezervation($idRezervation,$idCar,$idClientA,$idDuration,$dateRezervation,
   $startDate,$endDate,$validRezervation,$typeRezervation,$mileagePassed,$price,$status);


  ?>
