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

  it('planes can be instructed to take off', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  })

  it('blocks takeoff when stormy', function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(); }).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  })

  it ('blocks landing when stormy', function(){
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
    expect(airport.planes()).toEqual([]);
  })
});
