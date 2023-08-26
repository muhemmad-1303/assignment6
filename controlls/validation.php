<?php
include "database.php";
$response=[];
$jsonData1 = file_get_contents('php://input');
$data1 = json_decode($jsonData1, true);


$jsonData2 = file_get_contents('php://input');
$data2 = json_decode($jsonData2, true);

$jsonData3= file_get_contents('php://input');
$data3 = json_decode($jsonData2, true);



$error=[];

if(isset($data1['error'])){
     $statement=$pdo->prepare("select * from user where username ='{$data1['username']}'");
     $statement->execute();
     $res=$statement->fetch(PDO::FETCH_ASSOC);
     if($res){
      $error["username"]="username has taken";
     }
     $response['usererror']=$error['username']?? "";
    }

if(isset($data2['emailerror'])){
        $statement=$pdo->prepare("select * from user where email ='{$data2['email']}'");
        $statement->execute();
        $res=$statement->fetch(PDO::FETCH_ASSOC);
        if($res){
         $error["email"]="email has taken";
        }
        $response['emailerror']=$error["email"]?? '';
       }    
if(isset($data3['numbererror'])){
    $statement=$pdo->prepare("select * from user where number ='{$data3['number']}'");
    $statement->execute();
    $res=$statement->fetch(PDO::FETCH_ASSOC);
    if($res){
     $error["number"]="number has taken";
    }
    $response['numbererror']=$error["number"]?? '';
       }  
  
  header('Content-Type: application/json');
  echo json_encode($response);