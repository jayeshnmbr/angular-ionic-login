/**
 * Created by SBI on 2/2/16.
 */

app.controller('loginCtrl', function($scope, LoginService,$ionicPopup,$state) {
  $scope.data = {};
  $scope.login = function(){
    console.log(">>> login >>> "+ $scope.data.username+" >>> pwd ? "+$scope.data.password);

    LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
      console.log("success > "+ LoginService.getCreds());
      $state.go('tabs');
    }).error(function(data) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });

    });
  }

});

app.controller('tabCtrl', function($scope, LoginService) {
  $scope.test = LoginService.getCreds();
})
