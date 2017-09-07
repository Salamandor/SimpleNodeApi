'use strict';
module.exports = function(app) {
  var usersApi = require('../controllers/usersapiController');

  // usersApi Routes
  app.route('/users')
    .get(usersApi.list_all_users)
    .post(usersApi.create_a_user);


  app.route('/users/:userId')
    .get(usersApi.read_a_user)
    .put(usersApi.update_a_user)
    .delete(usersApi.delete_a_user);
};