var fs = require('fs');
var path = require('path');

var jsonContent = '{\n';
var basepath = path.resolve(__dirname, '../../src/components');

fs.readdir(basepath, function (err, files) {
    if (err) {
        console.error(err);
        return null;
    }

    if (files && files.length) {
        files.forEach(function (fileName) {
            var lineContent = '"' + fileName + '": "' + './src/components/' + fileName + '/' + fileName + '"';
            jsonContent += '    ' + lineContent + ',\n';
        });
    }

    jsonContent = jsonContent.slice(0, jsonContent.length - 2) + '\n}';

    fs.writeFileSync(path.resolve(__dirname, '../..', 'components.json'), jsonContent);
});
