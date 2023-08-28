<?php
include "database.php";
$response=[];
$jsonData1 = file_get_contents('php://input');
$data1 = json_decode($jsonData1, true);


$jsonData2 = file_get_contents('php://input');
$data2 = json_decode($jsonData2, true);

$error=[];

if(isset($data1['error'])){
     $statement=$pdo->prepare("select * from user where username ='{$data1['username']}'");
     $statement->execute();
     $res=$statement->fetch(PDO::FETCH_ASSOC);
     if(!$res){
      $error["username"]="no user found";
     }
     $response['loginusererror']=$error['username']?? "";
     
    }


header('Content-Type: application/json');
echo json_encode($response);