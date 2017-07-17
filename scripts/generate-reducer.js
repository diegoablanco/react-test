import glob from 'glob';
import fs from 'fs';
import _ from 'lodash';
import colors from 'colors';
colors.enabled = true;
const ignoreFiles = [
    'src/reducers/create-reducer.js'
];

const reducerFolder = 'src/reducers/';
const componentsFolder = 'src/components/';

function toTitleCase(str) {
    str = str.replace('-', ' ');
    str = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    str = str.replace(' ', '');
    str = str.substr(0, 1).toLowerCase() + str.substr(1);
    return str;
}

function generateName(file) {
    const n = file.lastIndexOf('/');
    let name = file.substring(n + 1);
    name = name.replace('-reducer.js', '');
    return toTitleCase(name);
}

function createFile(content) {
    fs.writeFile('src/reducers/index.js', content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(colors.green.bold('Reducer Index File generated'));
    });
}

function generateFile(listOfFiles) {
    const reducers = _.map(listOfFiles, (file) => {
        const fileName = generateName(file);
        console.log(colors.blue.bold('Reducer: ' + fileName));
        return {
            path: file,
            name: fileName
        };
    });
    fs.readFile('scripts/tpl/reducers.tpl', 'utf8', function (err,data) {
        const template = _.template(data);
        createFile(template({
            reducers: _.sortBy(reducers, (reducer) => {
                return reducer.name;
            })
        }));
    });
}

glob('src/**/*-reducer.js', {}, function (er, files) {
    if (er) {
        return er;
    }
    let listOfFiles = _.reduce(files, (results, file) => {
        if (ignoreFiles.indexOf(file) === -1) {
            if (file.includes(reducerFolder)) {
                file = file.replace(reducerFolder, './');
            }
            if (file.includes(componentsFolder)) {
                file = file.replace(componentsFolder, '../components/');
            }
            results.push(file);
        }
        return results;
    }, []);
    generateFile(listOfFiles)
});
