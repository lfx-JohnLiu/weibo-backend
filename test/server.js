/**
 * @description jest server
 * @author liucong
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)