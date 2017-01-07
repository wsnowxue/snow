<?php
$conn = mysqli_connect('127.0.0.1', 'root', '', 'bestcake', 3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

//PHP连接新浪云数据库的参数变为：
/*
	$db_url = SAE_MYSQL_HOST_M;
	$db_user = SAE_MYSQL_USER;
	$db_pwd = SAE_MYSQL_PASS;
	$db_dbname = SAE_MYSQL_DB;
	$db_port =  SAE_MYSQL_PORT;
	$conn = mysqli_connect($db_url,$db_user,$db_pwd,$db_dbname,$db_port);*/