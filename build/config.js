const utils = require('./utils.js');
const striptags = require('./strip-tags.js');
const MarkdownItContainer = require('markdown-it-container');
const highlightCore = require('highlight.js')
//? markdown config
exports.vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    return source
  },
  highlight: (code) => { highlightCore.highlightAuto(code).value },
  use: [
    [MarkdownItContainer, 'demo', {
      // 用于校验包含demo的代码块
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

        if (tokens[idx].nesting === 1) {
          var desc = tokens[idx + 2].content;
          // 编译成html
          const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
          // 移除描述，防止被添加到代码块
          tokens[idx + 2].children = [];

          return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }]
  ]
}