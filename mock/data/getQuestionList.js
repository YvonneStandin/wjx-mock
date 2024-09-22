/**
 * @description  生成问卷列表
 * @author Yvonne
 */
const Mock = require('mockjs')
const Random = Mock.Random
function getQuestionList({len = 10,isDeleted=false,isStar=false}) {
    const list = []
    for (let i = 0; i < len; i++) {
        list.push(
            {
                _id:Random.id(),
                title: Random.ctitle(),
                isPublished: Random.boolean(),
                isStar: isStar ? isStar : Random.boolean(),
                answerCount: Random.natural(50,100),
                createdAt: Random.datetime(),
                isDeleted //默认全部是未被假删除的
            }
        )
        
    }


    return list
}

module.exports = getQuestionList