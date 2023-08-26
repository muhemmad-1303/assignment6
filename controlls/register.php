<?php
include 'database.php';
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true); 
foreach($data as $key=>$value){
    $form_data[$key]=val($value);
 }

$hasshedpassword=password_hash($form_data['password'],PASSWORD_BCRYPT);
$statement=$pdo->prepare("INSERT INTO user(username, email, number, gender, password) VALUES ('{$form_data['username']}','{$form_data['email']}','{$form_data['number']}','{$form_data['gender']}','$hasshedpassword')");
$statement->execute();

    
function val($data){
    $data=trim($data);
    $data=stripslashes($data);
    $data=htmlspecialchars($data);
    return $data;
 }

 $response = array(
   "message"=>"success",
 );
 
 
 header('Content-Type: application/json');
 echo json_encode($response);