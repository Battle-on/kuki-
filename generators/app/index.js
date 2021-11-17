'use strict';

var generators = require('yeoman-generator'),
    log = console.log,
    Generator = require('yeoman-generator'),
    yosay = require('yosay'),
    chalk = require('chalk')



module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    var questions =[
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
    this.log(
      yosay(
        `Welcome to the stunning ${chalk.red('generator-kuki')} generator!`
      )
    );
    return this.prompt(questions).then(


      function(answers){
        for(var item in answers){
          this.log(
            yosay(
              `answers${ JSON.stringify(answers)}`
            )
          );
          this.log(
            yosay(
              `项目 ${chalk.red(item)} ， 选项${ answers[item]}`
            )
          );
          answers.hasOwnProperty(item) && (this[item] = answers[item]);
        }
      }.bind(this));
  }

  writing() {
    if(this.projectAssets  ==='Vue'){
      this.fs.copy(
        this.templatePath('vue/'),
        this.destinationPath('')
      );
    }
    if(this.projectType ==='React'){
      this.fs.copy(
        this.templatePath('react/'),
        this.destinationPath('')
      );
    }

    
  }

  install() {
    // this.installDependencies();
  }
};
