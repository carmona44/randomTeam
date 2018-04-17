// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('PrincipalController', principalController);

function principalController($scope, $ionicPopup) {
  $scope.data = {
    nombre: '',
    nivel: 'Nivel 1',
    esPortero: false
  };
  $scope.jugador = {};
  $scope.jugadores = [];
  $scope.porteros = [];
  $scope.nivel1 = [];
  $scope.nivel2 = [];
  $scope.nivel3 = [];
  $scope.equipoA = [];
  $scope.equipoB = [];

  $scope.nuevoJugador = function () {
    if($scope.data.nombre != ''){
      $scope.jugador = {
        nombre: $scope.data.nombre,
        nivel: $scope.data.nivel,
        esPortero: $scope.data.esPortero
      }
      $scope.jugadores.push($scope.jugador);

      $scope.data.nombre = '';
      $scope.data.esPortero = false;
    }
  }

  $scope.mostrarAyuda = function () {
    $ionicPopup.alert({
      title: 'AYUDA',
      template: 'Descripcion de la ayuda'
    });
  }

  $scope.hacerEquipos = function () {
    var i = 0;
    $scope.porteros = [];
    $scope.nivel1 = [];
    $scope.nivel2 = [];
    $scope.nivel3 = [];
    $scope.equipoA = [];
    $scope.equipoB = [];

    //Clasificación de los jugadores por categorías
    if ($scope.jugadores.length > 0){
      for (i=0; i<$scope.jugadores.length; i++){
        $scope.jugador = $scope.jugadores[i];
        if($scope.jugador.esPortero){
          $scope.porteros.push($scope.jugador);
        } else {
          if($scope.jugador.nivel == 'Nivel 1'){
            $scope.nivel1.push($scope.jugador);
          } else if ($scope.jugador.nivel == 'Nivel 2'){
            $scope.nivel2.push($scope.jugador);
          } else {
            $scope.nivel3.push($scope.jugador);
          }
        }
      }
    }

    //Creación de los equipos A y B
    var indice = 0;
    var mitad = 0;

    if($scope.porteros.length > 0){
      mitad = $scope.porteros.length/2;
      while($scope.porteros.length > mitad){
        indice = Math.floor(Math.random() * $scope.porteros.length);
        $scope.equipoA.push($scope.porteros[indice]);
        $scope.porteros.splice(indice, 1);
      }
      for(i=0; i<$scope.porteros.length; i++){
        $scope.equipoB.push($scope.porteros[i]);
      }
    }

    if($scope.nivel1.length > 0){
      mitad = $scope.nivel1.length/2;
      if($scope.equipoA.length > $scope.equipoB.length){
        while($scope.nivel1.length > mitad){
          indice = Math.floor(Math.random() * $scope.nivel1.length);
          $scope.equipoB.push($scope.nivel1[indice]);
          $scope.nivel1.splice(indice, 1);
        }
        for(i=0; i<$scope.nivel1.length; i++){
          $scope.equipoA.push($scope.nivel1[i]);
        }
      } else {
        while($scope.nivel1.length > mitad){
          indice = Math.floor(Math.random() * $scope.nivel1.length);
          $scope.equipoA.push($scope.nivel1[indice]);
          $scope.nivel1.splice(indice, 1);
        }
        for(i=0; i<$scope.nivel1.length; i++){
          $scope.equipoB.push($scope.nivel1[i]);
        }
      }
    }

    if($scope.nivel3.length > 0){
      mitad = $scope.nivel3.length/2;
      if($scope.equipoA.length > $scope.equipoB.length){
        while($scope.nivel3.length > mitad){
          indice = Math.floor(Math.random() * $scope.nivel3.length);
          $scope.equipoB.push($scope.nivel3[indice]);
          $scope.nivel3.splice(indice, 1);
        }
        for(i=0; i<$scope.nivel3.length; i++){
          $scope.equipoA.push($scope.nivel3[i]);
        }
      } else {
        while($scope.nivel3.length > mitad){
          indice = Math.floor(Math.random() * $scope.nivel3.length);
          $scope.equipoA.push($scope.nivel3[indice]);
          $scope.nivel3.splice(indice, 1);
        }
        for(i=0; i<$scope.nivel3.length; i++){
          $scope.equipoB.push($scope.nivel3[i]);
        }
      }
    }

    if($scope.nivel2.length > 0){
      mitad = $scope.nivel2.length/2;
      if($scope.equipoA.length > $scope.equipoB.length){
        while($scope.nivel2.length > mitad){
          indice = Math.floor(Math.random() * $scope.nivel2.length);
          $scope.equipoB.push($scope.nivel2[indice]);
          $scope.nivel2.splice(indice, 1);
        }
        for(i=0; i<$scope.nivel2.length; i++){
          $scope.equipoA.push($scope.nivel2[i]);
        }
      } else {
        while($scope.nivel2.length > mitad){
          indice = Math.floor(Math.random() * $scope.nivel2.length);
          $scope.equipoA.push($scope.nivel2[indice]);
          $scope.nivel2.splice(indice, 1);
        }
        for(i=0; i<$scope.nivel2.length; i++){
          $scope.equipoB.push($scope.nivel2[i]);
        }
      }
    }
  }
}
