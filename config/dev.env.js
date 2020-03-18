'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: 'location.protocol + "//" + location.host',
  BASE_API: '"http://47.101.160.190:8080"',
})
