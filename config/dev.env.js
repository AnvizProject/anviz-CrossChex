'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: 'location.protocol + "//" + location.host',
  BASE_API: '"http://192.168.60.164:8080"',
})
 