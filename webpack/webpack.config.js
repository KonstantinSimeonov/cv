'use strict';

require('babel-register');

module.exports = env => require(`./webpack.${env}.js`);
