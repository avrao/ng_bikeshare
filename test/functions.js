//Test starts here
describe('login tests', function(){
        beforeEach(function(){
            browser().navigateTo('http://127.0.0.1:8000/index.html/login');
            window.sleep(1);
        });

        it('should log in a user and redirect', function(){
           input('username').enter('user');
           input('password').enter('pass');
           element(':button').click();
           expect(browser().location().url()).toBe('/reservation');
        });
    });

describe('BikeShareCtrl tests', function() {
  var $scope;
  beforeEach(module('app'));
  beforeEach(inject(function ($rootScope){
    $scope = $rootScope.$new();
  }));
  it('should add reservations as per the logged in user', inject(function($controller)) {

  });
})



describe("Controller:LoginController", function()){
  beforeEach(function(){
    module("app");
  });

beforeEach(inject(function($controller, $rootScope, $location, AuthenticatedService, $httpBackend){
  this.$location = $location;
  this.$httpBackend = $httpBackend;
  this.scope = $rootScope.$new();
  this.locationPath = spyOn($location, 'path');

  $controller('LoginController', {
    $scope: this.scope,
    $location: $location,
    AuthenticatedService: AuthenticatedService
});
    
  }));

  describe("Successfully logging in", function(){
    it("should redirect you to /reservation", function(){
      //arrange, act, assert
      //arrange
      this.$httpBackend.expectPOST('/login', this.scope.credentials).respond(200);
      //act
      this.scope.login();
      this.$httpBackend.flush();

      //assertion
      expect(this.locationPath).toHaveBeenCaledWith('/reservation')
    });
  });
}