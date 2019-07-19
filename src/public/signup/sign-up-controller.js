(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignupdataService'];
function SignUpController(SignupdataService) {
  var signUpCtrl = this;
  signUpCtrl.submit = function(){
    signUpCtrl.errorMessage = "";
    signUpCtrl.showMessage = false;
    var userInfo = {};
     SignupdataService.getShortNames(signUpCtrl.menuNumber).then(function(data){
       if(data === "ERROR"){
         signUpCtrl.errorMessage = "No such menu number exists";
       }else{
         userInfo = {
           favData : data,
           userData : signUpCtrl.user
         };
        SignupdataService.storeData(userInfo);
        signUpCtrl.showMessage = true;
       }
    });
  };
}

})();
