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
                    title: Random.ctitle(),
                    componentList: [
                        {
                            fe_id: Random.id(),
                            type: 'QuestionInfo',
                            title: '问卷信息',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '智能宠物产品调研',description:'这是一份关于欧美市场智能宠物产品使用情况的问卷调查。为更好发展智能宠物产品市场规模、扩充主要品类及优化现有产品线，诚邀各宠物家长参与问卷调查，为毛孩子的幸福共同努力！'
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'QuestionTitle',
                            title: '标题',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                text: '宠物基础信息',level: 1, isCenter: false
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'QuestionInput',
                            title: '输入框1',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '姓名',placeholder: '请输入姓名...'
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'QuestionInput',
                            title: '输入框2',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '年龄',placeholder: '请输入年龄...'
                            }
                        },
                        {
                            fe_id: Random.id(),
                            type: 'QuestionParagraph',
                            title: '段落',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                text: '一行段落...',isCenter: false
                            }
                        }
                    ]
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
            const {query ={}} = ctx
            const isStar = ctx.url.indexOf('isStar=true') >=0
            const isDeleted = ctx.url.indexOf('isDeleted=true') >=0

            const pageSize = parseInt(query.pageSize) || 10

            return {
                errno: 0,
                data: {
                    list: getQuestionList({isDeleted,isStar,len:pageSize}),//当前页
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