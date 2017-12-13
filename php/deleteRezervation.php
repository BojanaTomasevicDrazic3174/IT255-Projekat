<?php

   header('Access-Control-Allow-Methods: GET');
   include("functions.php");

   if(!empty($_REQUEST['id'])){
   	echo deleteRezervation($_REQUEST['id']);
   }


  ?>
