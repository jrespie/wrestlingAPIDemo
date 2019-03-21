'use strict';


var mongoose = require('mongoose'),
  Wrestler = mongoose.model('Wrestlers');

exports.list_all_wrestlers = function(req, res) {
  Wrestler.find({}, function(err, wrestler) {
	if (err){
		res.status(404);        // HTTP status 404: NotFound
		res.send(err);
	}
	 res.json(wrestler);
  });
};

exports.create_a_wrestler = function(req, res) {
  var new_wrestler = new Wrestler(req.body);
  new_wrestler.save(function(err, wrestler) {
	if (err){
		if(err.name==="ValidationError"){
			res.status(422);
			res.json(err.message);
		}
		else{
			res.status(500);        // HTTP status 404: NotFound
			res.send(err);
		}
	}
	res.status(201);
    res.json(wrestler);
  });
};


exports.read_a_wrestler = function(req, res) {
  Wrestler.findById(req.params.wrestlerId, function(err, wrestler) {
	if(!wrestler){
		res.status(404);
		res.send("Cannot find wrestler with id: "+req.params.wrestlerId);
	}
    else if (err){
		if(err.name==="CastError"){
			res.status(404);
			res.send("Cannot find wrestler with id: "+err.value);
		}
		else{
			res.status(500);
			res.send(err);
		}
	}
	else {
		res.send(wrestler);
	}
  }
)};


exports.update_a_wrestler = function(req, res) {
  Wrestler.findOneAndUpdate({_id: req.params.wrestlerId}, req.body, {new: true}, function(err, wrestler) {
    if (err){
		res.status(500);
		res.send(err);
	  }
	  else if(!wrestler){
		res.status(404)
		res.json({message: "wrestler does not exist"});
	  }
	  else {
		res.status(202);
		res.json(wrestler);
	}
  });
};


exports.delete_a_wrestler = function(req, res) {
  Wrestler.findOneAndRemove({
    _id: req.params.wrestlerId
  }, function(err, wrestler) {
    if (err){
	  res.status(500);
	  res.send(err);
	}
	else if(!wrestler){
	  res.status(404)
	  res.json({message: "wrestler does not exist"});
	}
	else {
		res.status(204);
		res.json({ message: 'wrestler successfully deleted' });
	}
  });
};