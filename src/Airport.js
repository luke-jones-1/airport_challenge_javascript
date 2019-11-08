'use strict';

function Airport(){
  this._hangar = [];
};

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane){
  if(this.isStormy()) {
    throw new Error('cannot land during storm');
  } else {
    this._hangar.push(plane);
  };
};

Airport.prototype.clearForTakeOff = function(plane){
  if(this.isStormy()) {
    throw new Error('cannot takeoff during storm');
  } else {
    this._hangar = [];
  };
};

Airport.prototype.isStormy = function(){
  return false;
}
//
// User.prototype.dataRequest(){
//
// }
