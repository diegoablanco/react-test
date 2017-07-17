import toLower from 'lodash/toLower';
import LocalStorage from '../utils/local-storage';
export const envVariable = toLower(LocalStorage.get('ENV')) || global.SERVER;
export const useProxy = LocalStorage.get('PROXY') || false;
