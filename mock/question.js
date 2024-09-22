const Mock = require('mockjs')
const Random = Mock.Random

const getQuestionList = require('./data/getQuestionList')

module.exports = [
    {
        url: '/api/question/:id',//获取单个调查问卷
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle()
                },
            }
        }
    },
    {
        url: '/api/question/:id',//更新问卷信息，假删除也用这个，只是更改isDeleted属性
        method: 'patch',
        response() {
            return {
                errno: 0
            }
        }
    },
    {
        url: '/api/question',//新建问卷
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()   
                }
            }
        }
    },
    {
        url: '/api/question',//获取问卷列表
        method: 'get',
        response(ctx) {
            const isStar = ctx.url.indexOf('isStar=true') >=0
            const isDeleted = ctx.url.indexOf('isDeleted=true') >=0

            return {
                errno: 0,
                data: {
                    list: getQuestionList({isDeleted,isStar}),//当前页
                    total: 100
                }
            }
        }
    },
    {
        url: '/api/question',//批量彻底删除问卷
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    },
    {
        url: '/api/question/duplicate/:id',//复制问卷
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()   
                }
            }
        }
    }
]