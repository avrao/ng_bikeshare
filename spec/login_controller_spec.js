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
      expect(this.locationPath).toHaveBeenCalledWith('/reservation')
    });
  });
}