<?php
header('Content-Type:text/plain');

@$uname=$_REQUEST['uname'] or die('uname require');
@$upwd=$_REQUEST['upwd'] or die('upwd require');

require('init.php');

$sql="SELECT uid FROM users WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);

$row=mysqli_fetch_row($result);
if($row===null){
    echo 'err';
}else{
    echo 'ok';
}