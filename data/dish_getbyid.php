<?php

header("Content-Type:application/json");

@$id = $_REQUEST['id'];
if(empty($id))
{
    echo '[]';
    return ;
}

$conn = mysqli_connect('127.0.0.1','root','','bestcake');
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "SELECT cid,name_zh,csize,material,detail FROM cakes WHERE cid=$id";
$result = mysqli_query($conn,$sql);


$output = [];
while(true)
{
    $row = mysqli_fetch_assoc($result);
    if(!$row)
    {
        break;
    }
    $output[] = $row;
}

echo json_encode($output);

?>