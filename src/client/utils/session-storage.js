class SessionStorage {
    static isAvailable = (typeof window !== 'undefined') && window.sessionStorage;

    static set(key, value) {
        if (SessionStorage.isAvailable) {
            window.sessionStorage.setItem(key, value);
        }

        return this;
    }

    static get(key) {
        return SessionStorage.isAvailable && window.sessionStorage.getItem(key);
    }

    static remove(key) {
        if (SessionStorage.isAvailable) {
            window.sessionStorage.removeItem(key);
        }

        return this;
    }

    static clear() {
        if (SessionStorage.isAvailable) {
            window.sessionStorage.clear();
        }

        return this;
    }
}
export default SessionStorage