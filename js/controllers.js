var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function MyController($scope){
  $scope.author = {
    'name' : 'Gabriel Quinones',
    'title' : 'Software Programmer',
    'company' : 'Accenture'
  }
});
