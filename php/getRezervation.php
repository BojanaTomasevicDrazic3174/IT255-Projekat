<?php
   //login forma

   header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
include("konektor.php");

$qKor = "
  SELECT CENA as price, DATUM_POCETKA as startDate, DATUM_REZARVACIJE as dateRezervation, DATUM_ZAVRSETKA as endDate, ID_AUTOMOBIL as idCar,
  ID_KLIJENTA as idClient, ID_REZERVACIJA as idRezervation, ID_TRAJANJA as idDuration, NACIN_REZERVISANJA as typeRezervation , PREDJENA_KILOMETRAZA as mileagePassed, STATUS as status, VALIDNA_REZERVACIJA as validRezervation
  FROM `rezervacija`
  WHERE ID_KLIJENTA = :ID_KLIJENTA";
  $korisnici = $konektor -> prepare($qKor);
  $korisnici -> execute(array(
    ':ID_KLIJENTA' => $_REQUEST['idClient']
  ));
  $fKor = $korisnici ->fetchAll(PDO::FETCH_OBJ);
  echo json_encode($fKor);
//echo "<pre>",print_r($fKor),"</pre><br>";


  ?>
