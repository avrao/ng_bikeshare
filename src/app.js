var app = angular.module("app", [])

app.config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/reservation', {
    templateUrl: 'reservation.html',
    controller: 'ReservationController'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});

app.factory("ImageService", function() {
  var images = [
    {filename: "Bike-Share1.jpg", message: "Pick up a bike."},
    {filename: "bike-share-2.jpg", message: "Ready to go."}
  ];
  return {images:images};
});

app.factory("AuthenticationService", function($location) {
  return {
    login: function(credentials) {
      if (credentials.username !== "user" || credentials.password !== "pass") {
        alert("Username must be 'user', password must be 'pass'");
      } else {
        $location.path('/reservation');
      }
    },
    logout: function() {
      $location.path('/login');
    }
  };
});

app.controller("LoginController", function($scope, $location, AuthenticationService, ImageService) {
  $scope.title = "Bike Share";
  $scope.images = ImageService.images;

  $scope.credentials = { username: "", password: "" };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials);
  }

});

app.controller("ReservationController", function($scope, AuthenticationService, ImageService) {
  $scope.title = "Bike Reservations!";
  // $scope.message = "Mouse Over these images to see a directive at work!";
  $scope.images = ImageService.images;

  $scope.logout = function() {
    AuthenticationService.logout();
  };
});

app.directive("imageGrid", function() {
  return {
    restrict: "E",
    templateUrl: "image-grid.html"
  }
});

app.controller("BikeShareCtrl", function($scope) {
  $scope.locations = [
    { location_name: 'FoggyBotom', location_id:'FoggyBottom'},
    { location_name: 'Vienna',location_id:'Vienna'},    
    { location_name: 'Rosslyn',location_id:'Rosslyn'} 
    ];
 
  $scope.users = [];

  $scope.start_date = '';
  $scope.end_date = '';
  $scope.message = '';

  $scope.reservations = [
   { user_id:$scope.user_id, location_id:$scope.location_id, start_date:$scope.start_date, end_date:$scope.end_date, message:$message}
    // { user_id:'sarah', location_id:'Vienna'}    
         ];


  $scope.makeRes = function() {
    // take a user_id from form
    $scope.reservations.push( { user_id:$scope.user_id, location_id:$scope.location_id, start_date:$scope.start_date, end_date:$scope.end_date, message:$scope.message});
    $scope.user_id = '';
    $scope.location_id = ''; 
    $scope.start_date = '';
    $scope.end_date = '';
    //  message1 = "Reservation Confirmation for: " + $scope.user_id;
    //  message2 = "starting from: " + $scope.start_date ;
    //  message3 = "Ending on: " + $scope.end_date;
    //  message4 = "Location: " + $scope.location_id;

    // $scope.message = message1 + message2 + message3 + message4; 
  };
}); 