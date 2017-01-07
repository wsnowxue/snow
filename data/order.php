<?php
header("Content-Type:application/json");
@$uname=$_REQUEST['uname'] or die('uname required');

require('init.php');

$sql="SELECT uid FROM users WHERE uname='$uname'";
$result=mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);

$uid=intval($row['uid']);

$sql="SELECT * FROM cake_order WHERE uid='$uid'";
$result = mysqli_query($conn,$sql);

$output = [];
while(true){
    $row = mysqli_fetch_assoc($result);
    if(!$row){
        break;
    }
    $output[] = $row;
}

echo json_encode($output);