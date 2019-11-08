'use strict';

function Plane(){};

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};
//
// ListSpace.prototype.all = function(){
//   var pg = require(‘pg’);
//   var connectionString = "postgres://Student:@localhost/ip:5432/makersbnb_test";
//   var pgClient = new pg.Client(connectionString);
//   var query = pgClient.query('SELECT * FROM listings;');
//   query
// };
