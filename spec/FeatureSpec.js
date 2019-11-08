'use strict';

describe('feature test', function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('Planes can land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
