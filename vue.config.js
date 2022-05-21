const path = require('path')
// 自动导入插件 vue add style-resources-loader 添加一个VueCLI 插件
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 那些文件自动引入，使用绝对路径
      // 需要使用path.join来拼接完整路径
      patterns: [
        path.join(__dirname, '/src/assets/style/variables.less'),
        path.join(__dirname, '/src/assets/style/mixins.less')
      ]
    }
  }
}
