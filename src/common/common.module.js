(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://juisambare-module5.herokuapp.com')
.constant('MyPath', 'https://juisambare-module5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
