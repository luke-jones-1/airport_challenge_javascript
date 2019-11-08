'use strict';

describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });
  it('can land at an airport', function() {
    expect(plane.land).not.toBeUndefined();
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  })
//
//   describe('name tests',function(){
//     it('can view name',function(){
//       expect(listspace._name).toEqual('name');
//     });
//   });
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
