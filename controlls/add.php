<?php
include "database.php";
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true); 
$task=$data['task'];
$name=$data['username'];

    
$statement=$pdo->prepare("INSERT INTO task (task,username)VALUES('$task','$name')");
$statement->execute();

    
// function val($data){
//     $data=trim($data);
//     $data=stripslashes($data);
//     $data=htmlspecialchars($data);
//     return $data;
//  }

 $response = array(
   'message' => 'post'
 );
 
 
 header('Content-Type: application/json');
 echo json_encode($response);



?>