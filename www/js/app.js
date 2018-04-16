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
    $scope.porteros = [];
    $scope.nivel1 = [];
    $scope.nivel2 = [];
    $scope.nivel3 = [];

    if ($scope.jugadores.length > 0){
      for (var i=0; i<$scope.jugadores.length; i++){
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

    //Math.floor(Math.random() * 2)

    console.log($scope.porteros);
    console.log($scope.nivel2);
    console.log($scope.nivel1);
    console.log($scope.nivel3);
  }
}
