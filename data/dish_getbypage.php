<?php

header("Content-Type:application/json");

@$start = $_REQUEST['start'];
if(empty($start))
{
    $start = 0;
}
$count = 5;

$conn = mysqli_connect('127.0.0.1','root','','bestcake');
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "SELECT cid,name_en,name_zh,csize,material FROM cakes LIMIT $start,$count";
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