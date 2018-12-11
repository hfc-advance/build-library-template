const utils = require('./utils.js');
const striptags = require('./strip-tags.js');
const MarkdownItContainer = require('markdown-it-container');
const hljs = require('highlight.js')

/* exports.vueMarkdown = require('markdown-it')({
  html: true,
  highlight: function (str, lang) {
    console.log(
      '11111111111111111111111111111111111111111111111111111111111111111111111',
      `${lang}2222222222222222222222222222222222222222222222222222222222222222`,
      `${hljs.getLanguage(lang)}3333333333333333333333333333333333333333333333`
    )
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
      } catch (__) {}
    }

    return '<pre v-pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  },
  preventExtract: true

})
  .use(MarkdownItContainer, 'demo', {
    validate: params => params.trim().match(/^demo\s*(.*)$/),
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))

        return `<demo-box>
                  <div slot="demo">${html}</div>
                  <div slot="highlight">`
      }

      // closing tag
      return '</div></demo-box>'
    }
  }) */

//? markdown config
exports.vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    return source
  },
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
      } catch (__) {}
    }

    return '<pre v-pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  },
  use: [
    [MarkdownItContainer, 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
          const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))

          return `<demo-box>
                    <div slot="demo">${html}</div>
                    <div slot="highlight">`
        }

        // closing tag
        return '</div></demo-box>'
      }
    }],
    //? 调试
    [MarkdownItContainer, 'debugger', {
      validate: params => params.trim().match(/^debugger\s*(.*)$/),
      render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
          return `<debugger-box>
                    <div slot="content">${tokens[idx + 1].content}</div>
                    <div slot="debugger">`
        }

        // closing tag
        return '</div></debugger-box>'
      }
    }]
  ],
  preventExtract: true
}