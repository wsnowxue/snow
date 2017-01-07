SET NAMES 'utf8';
DROP DATABASE IF EXISTS bestcake;
CREATE DATABASE bestcake CHARSET=UTF8;
USE bestcake;

/*蛋糕详情表*/
CREATE TABLE cakes(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    name_en VARCHAR(64),
    name_zh VARCHAR(64),
    csize INT, /* 1-1.2磅  2-2.2磅   3-3.2磅   4-6磅*/
    material VARCHAR(2048),
    detail VARCHAR(2048)
);
INSERT INTO cakes(cid,name_en,name_zh,csize,material,detail) VALUES
    (1,'PAPI','PAPI熊蛋糕',1,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Fall in love in Berlin','柏林之恋',1,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Strawberry Napoleon','草莓拿破仑',2,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Frozen Grilled Cheese','冻烤燃情芝士',2,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Cheese Polar Milk','极地牛乳',4,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Blueberry Mousse','莱茵河莓妖精',4,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Mango Mousse','么么哒香芒',4,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Chocolate Street','巧克力石板街',4,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Fall in Love','情定爱情海',4,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Songlu Chocolate','松露巧克力',4,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Lion King','新狮子王',1,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Red Velvet Cake','白色红丝绒',4,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。'),
    (NULL,'Rum Chestnut Cake','朗姆香栗',3,'进口安佳淡奶油、红丝绒预拌粉、甜菜根粉','最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时。5月1日~10月31日建议2天内食用 11月1日~翌年4月日建议3天内食用。');
##SELECT * FROM cakes;

/*用户信息表*/
CREATE TABLE users(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    utel VARCHAR(32),
    upwd VARCHAR(32)
);
INSERT INTO users(uid,uname,utel,upwd) VALUES
    (1,'雪雪','15005722340','123456'),
    (NULL,'丫丫','12345678998','654321');

/*订单详情表*/
CREATE TABLE cake_order(
    oid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT, /*用户信息表 id*/
    cid INT, /*蛋糕 id*/
    count INT, /*蛋糕数量*/
    order_time BIGINT, /*下单时间*/
    name_zh VARCHAR(32) /*蛋糕种类*/
);
INSERT INTO cake_order(oid,uid,cid,count,order_time,name_zh) VALUES
    (100000,1,6,1,123456789789,'PAPI熊蛋糕'),
    (NULL,1,8,1,133456789789,'柏林之恋');


























