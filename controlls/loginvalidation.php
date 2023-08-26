<?php
include "database.php";
$response=[];
$jsonData1 = file_get_contents('php://input');
$data1 = json_decode($jsonData1, true);


$jsonData2 = file_get_contents('php://input');
$data2 = json_decode($jsonData2, true);