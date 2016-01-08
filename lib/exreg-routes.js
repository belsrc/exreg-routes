'use strict'

var chalk = require('chalk');

/**
 * Pads the string so that everything lines up nice.
 * @param  {String} method The request method.
 * @return {String}
 */
var stringPadding = function(method) {
  switch(method.toUpperCase()) {
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


/**
 * Styles the route variables.
 * @param  {String} str The route path string.
 * @return {String}
 */
var styleVars = function(str) {
  var inputsRegex = /(:[a-zA-Z0-9]+)(?=\/?)/gi;

  return str.replace(inputsRegex, function(match) {
    return chalk.magenta(match);
  });
};



module.exports = function(app) {

  var routes = app._router.stack
    .filter(function(r) {
      return r.route;
    })
    .map(function(r) {
      return r.route;
    });

  for(var i = 0, len = routes.length; i < len; i++) {
    var methods = Object.keys(routes[i].methods).join(', ').toUpperCase();
    var output  = chalk.green(methods) + stringPadding(methods);
    var path = routes[i].path.toString();

    path = styleVars(path);

    console.log(output + path);
  }
};
