export default class LocalStorage {
    static isAvailable = (typeof global !== 'undefined') && global.localStorage;

    static set(key, value) {
        if (LocalStorage.isAvailable) {
            global.localStorage.setItem(key, value);
        }

        return this;
    }

    static get(key) {
        return LocalStorage.isAvailable && global.localStorage.getItem(key);
    }

    static remove(key) {
        if (LocalStorage.isAvailable) {
            global.localStorage.removeItem(key);
        }

        return this;
    }

    static clear() {
        if (LocalStorage.isAvailable) {
            global.localStorage.clear();
        }

        return this;
    }
}
