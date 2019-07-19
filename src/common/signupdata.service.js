(function () {
"use strict";

angular.module('common')
.service('SignupdataService', SignupdataService);


SignupdataService.$inject = ['$http'];
function SignupdataService($http) {
  var service = this;
  service.showItems = {};
  service.getShortNames = function (short_name) {
    return $http.get('https://juisambare-module5.herokuapp.com/menu_items/'+short_name+'.json').then(function (response) {
      return response.data;
    },function(response){
      return "ERROR";
    });
  };

service.storeData = function(data){
service.showItems = data;
};
service.getMenudata = function(){
  return service.showItems;
};


}



})();
