import fs from 'fs';
import _ from 'lodash';
import colors from 'colors';
import {getDirectories} from '../scripts/node-utils';

colors.enabled = true;

const generalConfiguration = JSON.parse(fs.readFileSync('./scripts/data/config.json', 'utf8'));
const customers = getDirectories('./public/COID/');

console.log(colors.blue('---------------------------------'));
console.log(colors.blue('| AVAILABLE COMPANIES:'));
console.log(colors.green.bold('| ' + customers.join(', ')));
console.log(colors.blue('---------------------------------'));

function generateConfiguration(COID) {
    const customerConfiguration = JSON.parse(fs.readFileSync('./public/COID/' + COID + '/config/_overrides.json', 'utf8'));
    const mergedConfiguration = _.merge(generalConfiguration, customerConfiguration);
    return fs.writeFile('./public/COID/' + COID + '/config/config.json', JSON.stringify(mergedConfiguration), 'utf8', (err) => {
        if (err) {
            console.log(err.bold.red);
            return false;
        }
        console.log('Successfully generated configuration for: ' + COID.bold.green);
        return true;
    });
}

_.each(customers, (customer) => {
    generateConfiguration(customer);
});

