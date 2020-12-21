/**
 * @description sequelize 实例
 * @author liucong
 */
const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd, isTest } = require('../utils/env')

const { database, user, password } = MYSQL_CONF

const conf = {
    host: `localhost`,
    dialect: `mysql`
}

if (isTest) {
    conf.logging = () => {}
}

// 线上环境，使用连接池
if (isProd) {
    conf.pool = {
        max: 5,
        min: 0,
        idle: 10000 // 若一个连接池 10s 内无使用则释放
    }
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq