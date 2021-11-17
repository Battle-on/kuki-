const questions = [
    {
        name: 'projectAssets',
        type: 'projectType',
        message: '请选择模板:',
        choices: [
            {
                name: 'Vue',
                value: 'Vue',
                checked: true   // 默认选中
            },{
                name: 'React',
                value: 'React'
            }
        ]
    },
    {
        type: 'input',
        name: 'projectName',
        message: '输入项目名称',
        default: 'project'
    },
    {
        type: 'input',
        name: 'projectAuthor',
        message: '项目开发者',
        store: true,   // 记住用户的选择
        default: 'wangjunfa'
    },{
        type: 'input',
        name: 'projectVersion',
        message: '项目版本号',
        default: '0.0.1'
    }
]
export default questions