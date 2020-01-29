var app = angular.module('myApp1', []);
app.controller('myCtrl1', function($scope) {
  $scope.emyFunc = function() {
    $scope.email = "vikashvicky0495.com";
    $('.email').css('background-color','#4267B2').css('color','white');
    $('.slide1').slideUp()
  }
  $scope.emyFuk = function(){
    $scope.email = "";
    $('.email').css('color','black').css('background-color','white');
    $('.slide1').slideDown()
  }
  $scope.cmyFunc = function() {
    $scope.cont = "+353 89 96 32971";
    $('.cont').css('background-color','#4267B2').css('color','white');
    $('.slide2').slideUp()
  }
  $scope.cmyFuk = function(){
    $scope.cont = "";
    $('.cont').css('color','black').css('background-color','white');
    $('.slide2').slideDown()
  }
  $scope.amyFunc = function() {
    $scope.address = "30, Rishmond Hall, Richmond Road, Dublin 3, Dublin";
    $('.address').css('background-color','#4267B2').css('color','white');
    $('.slide3').slideUp()
  }
  $scope.amyFuk = function(){
    $scope.address = "";
    $('.address').css('color','black').css('background-color','white');
    $('.slide3').slideDown()
  }
});
