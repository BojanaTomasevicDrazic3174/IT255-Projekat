<?php
   //login forma

   header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
include("konektor.php");

$qKor = "
  SELECT CENA_AUTOMOBILA as carPrice, DATUM_KUPOVINE as dateOfPurchase, GODINA_PROIZVODNJE as dateOfProduction, ID_AUTOMOBIL as idCar, ID_OSIGURANJE as idInsurance,
  ID_TARIFNA_KLASA as idTariffClass, KILOMETRAZA as kilometras, MARKA_AUTOMOBILA as carBrand, MODEL_AUTOMOBILA as carModel, SNAGA_AUTOMOBILA as carPowers, URL_SLIKE as urlImage
  FROM `automobil`
  ";
  $korisnici = $konektor -> prepare($qKor);
  $korisnici -> execute(array(

  ));
  $fKor = $korisnici ->fetchAll(PDO::FETCH_OBJ);
  echo json_encode($fKor);
//echo "<pre>",print_r($fKor),"</pre><br>";


  ?>
