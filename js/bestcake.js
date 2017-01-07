/**
 * Created by bjwsl-001 on 2016/12/9.
 */

var app = angular.module('bestcake', ['ionic']);
app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('start', {
      url: '/KflStart',
      templateUrl: 'tpl/start.html'
    })
    .state('main', {
      url: '/KflMain',
      templateUrl: 'tpl/main.html',
      controller: 'mainCtrl'
    })
    .state('detail', {
      url: '/KflDetail/:id',
      templateUrl: 'tpl/detail.html',
      controller: 'detailCtrl'
    })
    .state('cart', {
      url: '/KflCart/:id',
      templateUrl: 'tpl/cart.html',
      controller: 'cartCtrl'
    })
    .state('myOrder', {
      url: '/KflMyOrder',
      templateUrl: 'tpl/myOrder.html',
      controller:'myOrderCtrl'
    })
    .state('login',{
      url:'/kflLogin',
      templateUrl:'tpl/login.html',
      controller:'loginCtrl'
    });
  $urlRouterProvider.otherwise('KflStart');
});

app.controller('parentCtrl', ['$scope', '$state',
  function ($scope, $state) {
    $scope.jump = function (state, arg) {
      $state.go(state, arg)
    }
  }]);

app.controller('startCtrl',['$scope','$timeout','$state',function($scope,$timeout,$state){
  setTimeout(function(){
    $state.go('login')
  },2000);
}]);

app.controller('mainCtrl',['$scope','$ionicPopup', '$http','$state','$timeout','$ionicSideMenuDelegate',
    function ($scope,$ionicPopup, $http,$state,$timeout,$ionicSideMenuDelegate) {
      $scope.list = [];
      $scope.hasMore = true;
      $http.get('data/dish_getbypage.php')
        .success(function (data) {
          $scope.list = data;
        });
      $scope.loadMore = function () {
        //如果输入框当中是由内容，不用处理加载更多的业务逻辑
        $http.get('data/dish_getbypage.php?start='
        + $scope.list.length)
          .success(function (data) {
            if (data.length < 5) {
              $scope.hasMore = false;
            }
            if (data.length > 0) {
              $scope.list = $scope.list.concat(data);
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');
          })
      };
      $scope.operateRightMenu = function(arg){
        $ionicSideMenuDelegate.toggleRight(arg);
      };
      //------------------确认退出框-------------------
      $scope.showConfirmWindow = function(){
        $ionicPopup.confirm({
          title:'提示',
          template:'您确定退出贝思客吗?',
          okText:'确认',
          cancelText:'取消'
        })
        .then(function(result){
          //console.log(result);
          if(result){
              setTimeout(function(){
                $state.go('login')
              },500);
          }
        }
        )
      };
    }]);

app.controller('detailCtrl', ['$scope', '$http', '$stateParams',
  function ($scope, $http, $stateParams) {
    //console.log($stateParams.id);
    $http.get('data/dish_getbyid.php?id=' + $stateParams.id)
      .success(function (data) {
        //console.log(data);
        $scope.dish = data[0];
      });
  }
]);

app.controller('cartCtrl',['$scope','$state', '$http', '$timeout','$stateParams','$httpParamSerializerJQLike','$ionicPopup',
    function ($scope,$state, $http,$timeout, $stateParams,$httpParamSerializerJQLike,$ionicPopup) {

      $http.get('data/dish_getbyid.php?id=' + $stateParams.id)
          .success(function (data) {
            //console.log(data);
            $scope.dish = data[0];
          });

      //购物数量--------------
      $scope.num=1;
      $scope.addClick=function(){
        $scope.num++;
      };
      $scope.subClick=function(){
        $scope.num--;
        if($scope.num<2){
          $scope.num=1;
        }
      };
      //购物价格
      $scope.priceList=[168,258,398,598];
      $scope.price=168;
      $scope.priceSel=function(index){
        $scope.price=$scope.priceList[index];
      };
      $scope.pic=1;
      $scope.picSel=function(index){
        $scope.pic=index;
      };
      //------------------确认下单框-------------------
      $scope.showConfirmWindow = function(){
        $ionicPopup.confirm({//确认下单
          title:'确认',
          template:$scope.dish.name_zh+' , ￥'+168.00*$scope.num,
          okText:'确认下单',
          cancelText:'取消'
        })
          .then(function(result){
            //console.log(result);
            console.log($scope.num);
            if(result){//下单成功,
              //console.log(result);
              var count=$scope.num;
              var uname = sessionStorage.getItem('uname');
              console.log(uname);
              $scope.order={cid:$scope.dish.cid,uname:uname,count:count,name_zh:$scope.dish.name_zh};//序列化
              var str=$httpParamSerializerJQLike($scope.order);
              //console.log(str);
              $http.get('data/order_add.php?'+str)
              .success(function(data){
                $ionicPopup.confirm({
                  title:'确认',
                  template:'下单成功,订单编号:'+data.oid,
                  okText:'查看订单',
                  cancelText:'确认'
                })
                  .then(function(result){
                    //console.log(result);
                    if(result){//下单成功,查看订单
                      setTimeout(function(){
                        $state.go('myOrder')
                      },500);
                    }else{//下单成功,返回主页
                      setTimeout(function(){
                        $state.go('main')
                      },500);
                    }
                  })
              });
            }
          })
      };
    }
  ]);

app.controller('myOrderCtrl',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {

  console.log($rootScope.uname);
  $http.get('data/order.php?uname='+$rootScope.uname)
  .success(function(data){
        $scope.order=data;
        console.log(data);
      })
  }
]);

app.controller('loginCtrl',['$scope','$rootScope','$http','$timeout','$state',function($scope,$rootScope,$http,$timeout,$state){
  $scope.$watch('uname',function(){
    //console.log($scope.uname);
  });
  $scope.$watch('upwd',function(){
    //console.log($scope.upwd);
  });
  $scope.funcSubmit=function(){
    $http.get('data/login.php?uname='+$scope.uname+'&upwd='+$scope.upwd)
      .success(function(data){
          $rootScope.uname=$scope.uname;
          console.log($rootScope.uname);
        if(data=='ok'){
          sessionStorage.setItem('uname',$scope.uname);
          setTimeout(function(){
            $state.go('main')
          },1500);
        }else{
          alert('用户名或密码错误')
        }
      })
  };
}]);