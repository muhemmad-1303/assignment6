<?php
include 'database.php';
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true); 
foreach($data as $key=>$value){
    $form_data[$key]=val($value);
 }

$state=$pdo->prepare("select password from user where username ='{$form_data['username']}'");
$state->execute();
$res=$state->fetch(PDO::FETCH_ASSOC);

    
function val($data){
    $data=trim($data);
    $data=stripslashes($data);
    $data=htmlspecialchars($data);
    return $data;
 }
 if(password_verify($form_data['password'],$res['password'])){
     $response = ["token"=>$form_data['username']];
 }

 
 
 
 
 header('Content-Type: application/json');
 echo json_encode($response);