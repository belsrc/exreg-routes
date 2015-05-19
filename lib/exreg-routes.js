'use strict'

var chalk = require('chalk');

/**
 * Pads the string so that everything lines up nice.
 * @param  {String} method The request method.
 * @return {String}
 */
var stringPadding = function(method) {
  switch(method) {
    case 'GET':
      return '    ';
    case 'POST':
      return '   ';
    case 'PUT':
      return '    ';
    case 'DELETE':
      return ' ';
    default:
      return ' ';
  }
};


module.exports = function(app) {

  var routes = app._router.stack.filter(function(r) {
    return r.route;
  }).map(function(r) {
    return r.route;
  });

  for(var i = 0, len = routes.length; i < len; i++) {
    var methods = Object.keys(routes[i].methods).join(', ').toUpperCase();

    console.log(chalk.green(methods) + stringPadding(methods) + chalk.bold(routes[i].path));
  }
};
