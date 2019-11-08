'use strict';

describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });
  it('can land at an airport', function() {
    expect(plane.land).not.toBeUndefined();
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  })

  it('can take off from airport',function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  });

//
//   describe('cost tests',function(){
//     it('can view cost',function(){
//       expect(listspace._cost).toEqual(3);
//     });
//   });
//
//   describe('address tests',function(){
//     it('can view address',function(){
//       expect(listspace._address).toEqual('address');
//     });
//   });
//
//   describe('description tests',function(){
//     it('can view description',function(){
//       expect(listspace._description).toEqual('description');
//     });
//   });
//
});
