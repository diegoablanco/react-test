import _ from 'lodash';
import fs from 'fs';
import colors from 'colors';
const argv = require('yargs').argv;
colors.enabled = true;

function createFile(content) {
    fs.writeFile('public/index.html', content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(colors.green.bold('Created file: index.html'));
    });
}

fs.readFile('scripts/tpl/page-index.tpl', 'utf8', function (err,data) {
    const template = _.template(data);
    createFile(template({
        title: 'GX',
        enableSentry: false,
        sentryToken: 'https://e74c6ff4bc0d4137bf4088a465abb6aa@sentry.io/135214',
        forEnv: argv.FOR
    }));
});