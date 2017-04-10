angular.module('starter')
  .controller('mapController', function($scope, $ionicPopup){

    // Opções da captura das coordenadas (getCurrentPosition)
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    // Inicialização do mapa
    var map;
    function initialize(posicao) {

      // Exibições das cordenadas que estão no parametro -> posicao
      $scope.showPosition(posicao.coords);
      console.log(posicao.coords);

      var latlng = new google.maps.LatLng(posicao.coords.latitude, posicao.coords.longitude);

      var options = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(document.getElementById("map"), options);

      var marker = new google.maps.Marker({
          position: latlng,
          title: "Meu ponto personalizado! :-D",
          map: map
      });
    }

    // Caso de erro na captura da coordenadas
    function error(err){
      console.log(err);
    }

    // Chamada da posição atual
    navigator.geolocation.getCurrentPosition(initialize, error, options);

    // Função do popup
    $scope.showPosition = function (posicao) {
         var coordsPopup = $ionicPopup.confirm({
           title: 'Coordenadas',
           template: 'Latitude: ' + posicao.latitude + '<br> Longitude: ' + posicao.longitude,
           buttons: [
             {text: 'Cancelar'},
             {text: 'Ok', type: 'button-positive'}
           ]
         });
    };
  });
