var app = angular.module("idModule", []);

app.service("idService", function () {
    
    this.setId = function (id) {
        localStorage["id"] = id;
    };
    
    this.getId = function () {
        return localStorage["id"];
    };
    
    this.removeId = function () {
        localStorage.removeItem("id");
    };
    
});