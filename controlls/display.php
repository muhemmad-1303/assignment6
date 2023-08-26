<?php
include 'database.php';
$jsonData = file_get_contents('php://input');
$res = json_decode($jsonData, true);
$username=$res['username'];
$statement = $pdo->prepare("SELECT *FROM task where username='$username' ORDER BY complete ASC;");
$statement->execute();
$result=$statement->fetchAll(PDO::FETCH_ASSOC);

foreach ($result as $key){
    $data[]=$key;
}
$response=$data;


header('Content-Type: application/json');
echo json_encode($response);
