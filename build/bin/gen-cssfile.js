var fs = require('fs');
var path = require('path');

var Components = require('../../components.json');
var basepath = path.resolve(__dirname, '../../src/themes/src');

Components = Object.keys(Components);

function fileExists(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

var indexContent = '@import "../common/base.scss";\n\n';

Components.forEach(function (key) {
    if (['icon'].indexOf(key) > -1) {
        return null;
    }

    var fileName = key + '.scss';
    indexContent += '@import "./' + fileName + '";\n';

    var filePath = path.resolve(basepath, 'components', fileName);
    if (!fileExists(filePath)) {
        fs.writeFileSync(filePath, '', 'utf8');
        console.log('创建遗漏的 ', fileName, ' 文件');
    }
});

fs.writeFileSync(path.resolve(basepath, 'components', 'index.scss'), indexContent);
