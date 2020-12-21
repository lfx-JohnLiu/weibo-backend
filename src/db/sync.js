/**
 * @description sequelize 同步数据库
 * @author liucong
 */
const seq = require('./seq')

// require('./model')

// 测试链接
seq.authenticate().then((res) => {
    console.log('auth ok')
}).catch((res) => {
    console.log('auth err')
})

// 执行同步
seq.sync({ force: true }).then(() => {
    console.log('sync ok')
    process.exit()
})