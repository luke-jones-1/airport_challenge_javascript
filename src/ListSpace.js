'use strict';

function ListSpace(name='', cost=0, address='', description=''){
  this._name = name;
  this._cost = cost;
  this._address = address;
  this._description = description;
};

ListSpace.prototype.all = function(){
  var pg = require(‘pg’);
  var connectionString = "postgres://Student:@localhost/ip:5432/makersbnb_test";
  var pgClient = new pg.Client(connectionString);
  var query = pgClient.query('SELECT * FROM listings;');
  query
};
