const path = require('path');
const fs = require('fs');

var dirSrc = path.join(__dirname, '../src');
var entriesConfig = [
    {
        entryName: 'index/index',
        entry: path.join(dirSrc, 'index/index.js'),
        filename: 'index.html',
        template: path.join(dirSrc, 'index.html')
    }
];

var excludeDirs = ['lib', 'index'];
var dirPages = fs.readdirSync(dirSrc).filter(function (dirName) {
    return excludeDirs.indexOf(dirName) === -1 && fs.statSync(dirSrc + '/' + dirName).isDirectory()
});

//获取一级目录：
function pageWalk(pageName) {
    entriesConfig.push({
        entryName: pageName+ '/index',
        entry: path.join(dirSrc, pageName+'/index.js'),
        filename: pageName+ '/index.html',
        template: path.join(dirSrc, pageName+'/index.html')
    });
}

dirPages.forEach(pageWalk);

module.exports = entriesConfig;










