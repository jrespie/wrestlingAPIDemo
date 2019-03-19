'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WrestlerSchema = new Schema({
  name: {
	type: String,
	match: new RegExp('^[a-zA-Z0-9_ ]+$')
  },
  realname: {
	type: String,
    required: 'Real Name is required'
  },
  birthdate: {
    type: Date
  },
  specialmove: {
	type: String,
	required: 'Special Move is required'
  },
  hometown: {
	type: String
  },
  bio: {
	type: String
  }

});

module.exports = mongoose.model('Wrestlers', WrestlerSchema);