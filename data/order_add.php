<?php

header("Content-Type:application/json;charset=UTF-8");

@$count = $_REQUEST['count'];
@$uname = $_REQUEST['uname'];
@$cid = $_REQUEST['cid'];
@$name_zh = $_REQUEST['name_zh'];
$order_time = time()*1000;

if(empty($count) ||empty($uname)
 || empty($cid) || empty($name_zh) || empty($order_time))
 {
    echo '[]';
    return;
 }

require('init.php');

$sql="SELECT uid FROM users WHERE uname='$uname'";
$result=mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);

$uid=intval($row['uid']);

$sql = "INSERT INTO cake_order VALUES(NULL,'$uid','$cid','$count','$order_time','$name_zh')";
$result = mysqli_query($conn,$sql);

$arr = [];
if($result){
    $arr['oid'] = mysqli_insert_id( $conn );
    $arr['msg'] = 'success';
}
else
{
    $arr['msg'] = 'err';
}

echo json_encode($arr);

?>