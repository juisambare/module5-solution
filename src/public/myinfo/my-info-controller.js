(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['menudata','MyPath'];
function MyInfoController(menudata,MyPath) {
  var myInfoCtrl = this;
  myInfoCtrl.myapipath = MyPath;
  if(menudata.favData){
    myInfoCtrl.menudata = menudata;
  }else{
    myInfoCtrl.showSignUpMessage = true;
  }
}

})();
