import fs from 'fs';
import _ from 'lodash';
import colors from 'colors';
import {getDirectories} from '../scripts/node-utils';

colors.enabled = true;

const generalTranslations = JSON.parse(fs.readFileSync('./scripts/data/translations.json', 'utf8'));
const customers = getDirectories('./public/COID/');

console.log(colors.blue('---------------------------------'));
console.log(colors.blue('| AVAILABLE COMPANIES:'));
console.log(colors.green.bold('| ' + customers.join(', ')));
console.log(colors.blue('---------------------------------'));

function generateTranslation(COID) {
    const customerTranslations = JSON.parse(fs.readFileSync('./public/COID/' + COID + '/translations/_overrides.json', 'utf8'));
    const mergedTranslations = _.merge(generalTranslations, customerTranslations);

    return fs.writeFile('./public/COID/' + COID + '/translations/translations.json', JSON.stringify(mergedTranslations), 'utf8', (err) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log('Successfully generated translations for: ' + COID.bold.green);
        return true;
    });
}

_.each(customers, (customer) => {
    generateTranslation(customer);
});


