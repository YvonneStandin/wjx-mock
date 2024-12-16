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
                    desc: '问卷描述',
                    js: '',
                    css: '',
                    isPublished: true,
                    componentList: [
                        {
                            fe_id: Random.id(),
                            type: 'QuestionInfo',
                            title: '问卷信息',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '智能宠物产品调研',description:'关于欧美市场智能宠物产品使用情况的问卷调查...'
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
                            type: 'QuestionTextarea',
                            title: '文本域1',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '疫苗情况',placeholder: '请输入疫苗情况...'
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
                        },
                        {
                            fe_id: Random.id(),
                            title: '单选框',
                            type: 'QuestionRadio',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '单选标题',
                                options: ['选项1', '选项2', '选项3'],
                                selectedOption: '',
                                isVertical: false,
                            },
                        },
                        {
                            fe_id: 'VPBF-eCKkd59-ugLgoIXy',
                            title: '多选框',
                            type: 'QuestionCheckbox',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '多选标题',
                                isVertical: false,
                                optionList: [
                                    { value: '选项1', isSelected: false },
                                    { value: '选项2', isSelected: false },
                                    { value: '选项3', isSelected: false },
                                ],
                            },
    
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