export class isValid {
    static requiredLengthString(str, minLength, maxLength) {
        if (typeof str !== 'string') {
            return false;
        }
        if (str.length < minLength) {
            return false;
        }
        if (str.length > maxLength) {
            return false;
        }
        return true;
    }

    static containsAllowedSymbols(str, allowedSymbols) {
        for (const symbol of str) {
            if (!allowedSymbols.includes(symbol)) {
                return false;
            }
        }
        return true;
    }

    static containsForbiddenSymbols(str, forbiddenSymbols) {
        for (const symbol of str) {
            if (forbiddenSymbols.includes(symbol)) {
                return false;
            }
        }
        return true;
    }

    static username(str) {
        const minLength = 4;
        const maxLength = 20;
        const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!isValid.containsAllowedSymbols(str, abc)) {
            return false;
        }
        return true;
    }

    static email(str) {
        const minLength = 6;
        const maxLength = 50;
        const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.-+_';


        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!isValid.containsAllowedSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static phone(str) {
        const minLength = 3;
        const maxLength = 20;
        const abc = '+-0123456789 ()';

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!isValid.containsAllowedSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static name(str) {
        const minLength = 2;
        const maxLength = 20;
        const abc = ' 0123456789?!-+:;\\`@#$%^&/*()=_{}[]<>,.~\'"\r\n\t';

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (isValid.containsForbiddenSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static surname(str) {
        const minLength = 2;
        const maxLength = 20;
        const abc = ' 0123456789?!-+:;\\`@#$%^&/*()=_{}[]<>,.~\'"\r\n\t';

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (isValid.containsForbiddenSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static password() {
        const minLength = 12;
        const maxLength = 100;

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        return true;
    }

    static IABN(str) {
        const minLength = 20;
        const maxLength = 24;
        const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!isValid.containsAllowedSymbols(str, abc)) {
            return false;
        }
        return true;
    }

    static URL(str) {
        const minLength = 1;
        const maxLength = 3000;
        const abc = 'abcdefghijklmnopqrstuvwxyz0123456789-';

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        if (!isValid.containsAllowedSymbols(str, abc)) {
            return false;
        }

        return true;
    }

    static URLslug(str) {
        const minLength = 1;
        const maxLength = 150;
        const abc = 'abcdefghijklmnopqrstuvwxyz0123456789';

        if (!isValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        if (!isValid.containsAllowedSymbols(str.abc)) {
            return false;
        }
        return true;
    }
}