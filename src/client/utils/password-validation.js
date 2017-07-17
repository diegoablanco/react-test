export function validatePassDoesNotMetCondition(string, min, max) {
    // should have more than min characters and less than max
    // cannot start with "?" or "!" and cannot contain spaces
    const re = new RegExp('^([^?|!|\\s])([^\\s]){' + (min - 1) + ',' + (max - 1) + '}$');

    return !re.test(string);
}

export function validatePassAboveMetCondition(string) {
    // at least one number, one lowercase and one uppercase letter
    // should have more than 11 characters
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{11,}/;

    return re.test(string);
}
