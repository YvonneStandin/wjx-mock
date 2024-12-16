const Mock = require('mockjs')
const Random = Mock.Random

const getStatList = require('./data/getStatList')

module.exports = [
    {
        url: '/api/stat/:questionId',
        method:'get',
        response() {
            return {
                errno: 0,
                data: {
                    total: 100, //分页
                    list: getStatList()
                }
            }
        }
    }
]