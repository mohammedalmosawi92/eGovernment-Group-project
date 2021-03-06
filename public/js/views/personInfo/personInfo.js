var app = angular.module("app.personInfo", ["ngRoute", "tempModule","idModule", "idNumberModule", "tokenModule", "privModule", "usernameModule", "statusModule", "usersModule", "requestModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/personInfo", {
        templateUrl: "/js/views/personInfo/personInfo.tpl.html",
        controller: "personInfoCtrl"
    })
})

app.controller("personInfoCtrl", function ($scope, tempService, $location, idService, idNumberService, tokenService, privService, usernameService, statusService, usersService, requestService) {
    
    var id = idService.getId();
    $scope.status = function() {
        return  statusService.getStatus();
    }
    var idNumber = idNumberService.getId();
    $scope.personInfo = {};
    $scope.personInfo.userId = id;
    $scope.personInfo.dob = new Date();
    $scope.personInfo.username = usernameService.getUsername();
    $scope.personInfo.idNumber = Number(idNumberService.getId());
    $scope.personInfo.status = "اعزب";
    $scope.personInfo.sex = "ذكر";
    
    $scope.personalImage = function(file) {
        $scope.personInfo.personalImage = file.value;
    }
    
    $scope.idImage = function(file) {
        $scope.personInfo.idImage = file.value;
    }
    
    $scope.loadData = function() {
        console.log($scope.personInfo)
        tempService.getDataByUserId($scope.personInfo.userId).then(function(response) {
            $scope.personInfo = response.data.data;
            $scope.personInfo.dob = new Date(response.data.data.dob);
        }, function(response) {
            console.log(response.status)
        })
    }
    
    
    $scope.loadInfo = function() {
        requestService.getDataByUserId(id).then(function(response) {
            $scope.yourInfo = response.data.data;
        })
        usersService.getUserById(id).then(function(response) {
            $scope.userInfo = response.data.data;
        })
    }
    
    $scope.submit = function () {
        tempService.postData($scope.personInfo).then(function (response) {
            usersService.updateStatus(id,"waiting").then(function() {
                statusService.setStatus("waiting");
                $location.path("/personInfo");
            })
        }, function (response) {
            console.log(response.status);
        });
    }
});