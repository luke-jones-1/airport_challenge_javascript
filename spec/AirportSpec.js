'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land'])
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([])
  });

  it('can clear lanes for landing', function(){
    airport.clearForLanding(plane)
    expect(airport.planes()).toEqual([plane])
  });

  it('can clearplanes for takeoff', function(){
    airport.clearForLanding(plane)
    airport.clearForTakeOff(plane)
    expect(airport.planes()).toEqual([])
  });

  it('can determine weather conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy conditions', function(){

    it('can block planes from taking off if weather is stormy', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });

    it('can block planes from landing if weather is stormy', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    })
  })
});
