
import _ from 'lodash';
import fs from 'fs';
import colors from 'colors';

/**
    @START MODIFY THIS PART ONLY
 */

const withContainer = true;
const withSelector = true;
const fileName = 'private-route';

/**
    @END MODIFY THIS PART ONLY
 */



colors.enabled = true;
const componentName = fileName.replace(/ /g, '-');

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function createFile(name, content) {
    fs.writeFile('src/components/' + componentName + '/' + name, content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(colors.green.bold('Created file: src/components/' + componentName + '/' + name));
    });
}

fs.mkdir('src/components/' + componentName , function(){
    fs.readFile('scripts/tpl/component.tpl', 'utf8', function (err,data) {
        const template = _.template(data);
        createFile(componentName + '-component.js', template({
            fileName: componentName,
            name: toTitleCase(fileName).replace(/ /g, '')
        }));
    });
    fs.readFile('scripts/tpl/styles.tpl', 'utf8', function (err,data) {
        const template = _.template(data);
        createFile(componentName + '-component.scss', template({
            fileName: componentName,
            name: toTitleCase(fileName).replace(/ /g, '')
        }));
    });
    if (withContainer) {
        fs.readFile('scripts/tpl/container.tpl', 'utf8', function (err,data) {
            const template = _.template(data);
            createFile(componentName + '-container.js', template({
                fileName: componentName,
                name: toTitleCase(fileName).replace(/ /g, '')
            }));
        });
        if (withSelector) {
            fs.readFile('scripts/tpl/selector.tpl', 'utf8', function (err,data) {
                const template = _.template(data);
                createFile(componentName + '-selector.js', template({
                    fileName: componentName,
                    name: toTitleCase(fileName).replace(/ /g, '')
                }));
            });
            fs.readFile('scripts/tpl/container-connect.tpl', 'utf8', function (err,data) {
                const template = _.template(data);
                createFile(componentName + '-connect.js', template({
                    fileName: componentName,
                    name: toTitleCase(fileName).replace(/ /g, '')
                }));
            });
            fs.readFile('scripts/tpl/connected-container-index.tpl', 'utf8', function (err,data) {
                const template = _.template(data);
                createFile('index.js', template({
                    fileName: componentName,
                    name: toTitleCase(fileName).replace(/ /g, '')
                }));
            });
        } else {
            fs.readFile('scripts/tpl/index-container.tpl', 'utf8', function (err,data) {
                const template = _.template(data);
                createFile('index.js', template({
                    fileName: componentName,
                    name: toTitleCase(fileName).replace(/ /g, '')
                }));
            });
        }

    } else {
        fs.readFile('scripts/tpl/index.tpl', 'utf8', function (err,data) {
            const template = _.template(data);
            createFile('index.js', template({
                fileName: componentName,
                name: toTitleCase(fileName).replace(/ /g, '')
            }));
        });
    }
});
