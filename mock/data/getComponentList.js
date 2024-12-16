/**
 * @description  生成组件列表
 * @author Yvonne
 */
const Mock = require('mockjs')
const Random = Mock.Random

function getComponentList() {
    return [
        {
            // fe_id: Random.id(),
            fe_id: 'c1',//统计页面左侧组件列表和中间表格数据一致，写死id
            type: 'QuestionInfo',
            title: '问卷信息',
            isHidden: false,
            isLocked: false,
            props: {
                title: '智能宠物产品调研',description:'关于欧美市场智能宠物产品使用情况的问卷调查...'
            }
        },
        {
            fe_id: 'c2',
            type: 'QuestionTitle',
            title: '标题',
            isHidden: false,
            isLocked: false,
            props: {
                text: '宠物基础信息',level: 1, isCenter: false
            }
        },
        {
            fe_id: 'c3',
            type: 'QuestionInput',
            title: '输入框1',
            isHidden: false,
            isLocked: false,
            props: {
                title: '姓名',placeholder: '请输入姓名...'
            }
        },
        {
            fe_id: 'c4',
            type: 'QuestionInput',
            title: '输入框2',
            isHidden: false,
            isLocked: false,
            props: {
                title: '年龄',placeholder: '请输入年龄...'
            }
        },
        {
            fe_id: 'c5',
            type: 'QuestionTextarea',
            title: '文本域1',
            isHidden: false,
            isLocked: false,
            props: {
                title: '疫苗情况',placeholder: '请输入疫苗情况...'
            }
        },
        {
            fe_id: 'c6',
            type: 'QuestionParagraph',
            title: '段落',
            isHidden: false,
            isLocked: false,
            props: {
                text: '一行段落...',isCenter: false
            }
        },
        {
            fe_id: 'c7',
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
            fe_id: 'c8',
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
}

module.exports = getComponentList