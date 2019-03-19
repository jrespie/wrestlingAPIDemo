'use strict';
module.exports = function(app) {
  var wrestlers = require('../controllers/wrestlerController');

var cors = require('cors');

  // todoList Routes
  app.route('/wrestlers')
    .get(cors(),wrestlers.list_all_wrestlers)
    .post(wrestlers.create_a_wrestler);


  app.route('/wrestlers/:wrestlerId')
    .get(wrestlers.read_a_wrestler)
    .put(wrestlers.update_a_wrestler)
    .delete(wrestlers.delete_a_wrestler);
};