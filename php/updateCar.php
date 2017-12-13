<?php

   header('Access-Control-Allow-Methods: GET');
   include("functions.php");

   $method2  = file_get_contents('php://input');
   $data = json_decode($method2);

   $idCar =$data -> idCar;
   $idTariffClass =$data -> idTariffClass;
   $idInsurance =$data -> idInsurance;
   $carBrand =$data -> carBrand ;
   $carModel =$data -> carModel;
   $dateOfPurchase =$data -> dateOfPurchase;
   $carPrice =$data -> carPrice;
   $kilometras =$data -> kilometras;
   $dateOfProduction =$data -> dateOfProduction;
   $carPowers =$data -> carPowers;
   $urlImage =$data -> urlImage;

   echo updateCar($idCar,$idTariffClass,$idInsurance,$carBrand,$carModel,$dateOfPurchase,$carPrice,$kilometras,$dateOfProduction,$carPowers,$urlImage);


  ?>
