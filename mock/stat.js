const Mock = require('mockjs')
const Random = Mock.Random

const getStatList = require('./data/getStatList')

module.exports = [
    {
        url: '/api/stat/:questionId',
        method:'get',
        response(ctx) {
            const {query ={}} = ctx
            const pageSize = parseInt(query.pageSize) || 10
            return {
                errno: 0,
                data: {
                    total: 100, //分页
                    list: getStatList(pageSize)
                }
            }
        }
    },
    {
        // 单个组件 数据汇总（图表统计
        url: '/api/stat/:questionId/:fe_id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    stat:[
                        { name: '1个月', count: 156 },
                        { name: '2个月', count: 388 },
                        { name: '1季度', count: 473 },
                    ]
                }
            }
        }
    }
]