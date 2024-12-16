/**
 * @description  生成统计列表
 * @author Yvonne
 */
const Mock = require('mockjs')
const Random = Mock.Random

const getComponentList = require('./getComponentList')


function getStatList(len = 10) {
    const componentList = getComponentList()
    let res = []

    for(let i = 0; i < len; i++) {
        // 模拟一个用户的答卷
        let stat = {
            _id: Random.id()
        }

        // 以 getComponentList 为基准，遍历所有组件依据类型模拟问卷答案
        componentList.forEach(c=>{
            // 将组件 fe_id 作为 key
            const {fe_id, type, props} = c

            switch(type) {
                case 'QuestionInput':
                    stat[fe_id] = Random.ctitle()
                    break;
                case 'QuestionTextarea':
                    stat[fe_id] = Random.ctitle()
                    break;
                case 'QuestionRadio':
                    stat[fe_id] = props.options[0]
                    break;
                case 'QuestionCheckbox':
                    stat[fe_id] = `${props.optionList[0].value},${props.optionList[1].value}`
                    break;
            }
        })

        res.push(stat)

    }



    return res
}

module.exports = getStatList