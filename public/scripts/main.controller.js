angular.module('gameApp')
      .controller('MainController', MainController);



  function MainController(game){
    var main = this;
    console.log('Maincontroller loaded');

    main.characters = {};

    main.getCharacter = function(){
      game.getCharacter()
          .then(function(response){
            main.characters = response;
            console.log(response);
          });
    };










}; //end MainController
