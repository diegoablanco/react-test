import fs from 'fs';
import _ from 'lodash';
import glob from 'glob';
import colors from 'colors';
import child_process from 'child_process';
import {getDirectories} from '../scripts/node-utils';
colors.enabled = true;

const exec = child_process.exec;
const customers = getDirectories('./public/COID/');
const ignoreFiles = [

];

function createFile(content, COID) {
    fs.writeFile('public/COID/' + COID + '/css/main.scss', content, function(err) {
        if(err) {
            return console.log(err);
        }
        exec('./node_modules/.bin/node-sass public/COID/' + COID + '/css/main.scss public/COID/' + COID + '/css/main.css --output-style compressed', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });

    });
}

function generateFile(listOfFiles) {

    fs.readFile('scripts/tpl/style-main.tpl', 'utf8', function (err,data) {
        const template = _.template(data);
        _.each(customers, (customer) => {
            createFile(template({
                files: listOfFiles
            }), customer);
        });
    });
}

glob('src/components/**/*.scss', {}, function (er, files) {
    if (er) {
        return er;
    }
    const listOfFiles = _.reduce(files, (results, file) => {
        if (ignoreFiles.indexOf(file) === -1) {
            results.push(file);
        }
        return results;
    }, []);
    console.log(listOfFiles);
    generateFile(listOfFiles);
});