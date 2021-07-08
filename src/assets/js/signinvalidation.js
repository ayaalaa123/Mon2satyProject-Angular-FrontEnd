var app = angular.module("myApp", []);
app.controller("validateCtrl", function ($scope) {
  $scope.companyName = "";
  $scope.email = "";
  $scope.address = "";
  $scope.supplierFax = "";
  $scope.managerName = "";
  $scope.managerPhone = "";
  $scope.supplierPhone = "";
  $scope.password = "";
  $scope.legalPaperwork = "";
  $scope.infoPaperwork = "";
});
