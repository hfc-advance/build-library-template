const fs = require('fs');
const bluebird = require('bluebird').promisifyAll(fs);


//? 自定义模板编译
exports.compile = (answers, fileStr) => {
  return String.prototype.replace.call(fileStr, /\n*\s*\/\*.*@init<%((.|\s)*?)%>.*\*\//g, function (match, p1) {
    return (String.prototype.replace.call(p1, /\${(\w*)}/g, function (innMatch, innP1) {
      return answers[innP1]
    })) + '\r' +match
  })
}

//? 同步文件
exports.syncFile = (answers, file) => {
  bluebird.readFileAsync(file, 'utf8')
    .then(str => {
      return exports.compile(answers, str)
    })
    .then(str => fs.writeFileAsync((file), str, 'utf8'))
    .then(() => answers)
}

/**
 * 增加 hljs 的 classname
 */
exports.wrapCustomClass = function (render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

/**
 * Format HTML string
 */
exports.convertHtml = function (str) {
  return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}