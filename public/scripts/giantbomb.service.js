angular.module('gameApp')
      .service('game', GiantBombAPIService);

function GiantBombAPIService($http){
  var API = 'http://www.giantbomb.com/api/game/3030-4725/?api_key=';
  var key = '118830789795be11a3c964a48afea8e23a696242';



  this.getCharacter = function(){
    return $http.get(API + key + '/characters')
                .then(function(response){
    return response.data;
    });
  };










} // end GiantBombAPIService
