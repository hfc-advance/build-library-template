const prompt = require('inquirer').createPromptModule();
const utils = require('./utils.js');
const path = require('path');
const CWD = process.cwd();

//! 配置文件
const BRIDGE_DOC_PATH = path.resolve(CWD, 'docs/config/bridge.doc.js');
//! 源码文件
const CODE_PATH = path.resolve(CWD, 'src/main.js');
//! markdown目录
const MD_LIB = path.resolve(CWD, 'docs/md');
//! markdown模板文件
const MD_TPL_PATH = path.resolve(CWD, 'build/template/bridge.md');
//! 路由文件
const ROUTER_PATH = path.resolve(CWD, 'docs/router.js');

async function lanuch () {
  let result = await prompt([
    {
      type: 'input',
      name: 'bridgeName',
      message: '请输入bridge名字(英文):',
      validate: function (str) {
        return /^[a-zA-Z]*$/.test(str)
      }
    },
    {
      type: 'input',
      name: 'bridgeEffect',
      message: '请输入该bridge作用:',
      validate: function (str) {
        return str && str.length > 0
      }
    },
    {
      type: 'input',
      name: 'bridgeH5Man',
      message: '请输入该bridge负责人(H5):',
      validate: function (str) {
        return str && str.length > 0
      }
    },
    {
      type: 'input',
      name: 'bridgeNativeAndroidMan',
      message: '请输入该bridge负责人(Android):'
    },
    {
      type: 'input',
      name: 'bridgeNativeIOSMan',
      message: '请输入该bridge负责人(IOS):'
    },
    {
      type: 'input',
      name: 'bridgeVersionAndroid',
      message: '请输入该bridge起始版本(Android)(不支持请输入false):',
      validate: function (str) {
        return str === 'false' || /^\d*(\.|\d)*\d$/.test(str)
      }
    },
    {
      type: 'input',
      name: 'bridgeVersionIOS',
      message: '请输入该bridge起始版本(IOS)(不支持请输入false):',
      validate: function (str) {
        return str === 'false' || /^\d*(\.|\d)*\d$/.test(str)
      }
    }
  ])
  let TplBridgeNameUpper = result.bridgeName.replace(/^([a-z])/, (result, match) => (match && match.toUpperCase() || ''));
  result = Object.assign(result, { TplAnnotationStart: '/*', TplAnnotationEnd: '*/', TplBridgeNameUpper })
  let syncDOC = utils.syncFile(result, BRIDGE_DOC_PATH)
  let syncCODE = utils.syncFile(result, CODE_PATH)
  let syncROUTER = utils.syncFile(result, ROUTER_PATH)
  let transformMd = utils.transformFile(result, `${MD_LIB}/${result.bridgeName}.md`, MD_TPL_PATH)
  let answers = await syncDOC
  let answerss = await syncCODE
  let answersss = await syncROUTER
  let mdStr = await transformMd
}

lanuch()
