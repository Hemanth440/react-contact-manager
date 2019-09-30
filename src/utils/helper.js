import { FORM_ERROR_MESSAGES } from '../constants';

export function validateAddContactField(key, value, errors) {
    let isFormValid = true;
    let hasError = false;

    if (!value && !value.length) {
        errors[key] = FORM_ERROR_MESSAGES[key].required;
    } else {
        switch (key) {
            case 'name':
                errors.name = '';
                break;
            case 'email':
                errors.email = (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) ? FORM_ERROR_MESSAGES[key].invalid : '';
                break;
            case 'phone':
                errors.phone = isNaN(value) || (value.length !== 10) ? FORM_ERROR_MESSAGES[key].invalid : '';
                break;
        }
    }

    Object.keys(errors).every(field => {
        if (errors[field] && !!errors[field].length) {
            isFormValid = false;
            hasError = true;
        }

        return isFormValid;
    });

    return { errors, isFormValid, hasError };
}

export function isValidEmail(input) {
    return input.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

export function isValidPhone(input) {
    return !isNaN(input) && (input.length === 10);
}

export function getContactsByIds(contacts = [], ids, query) {
    if (!query && (!ids || !ids.length)) {
        return contacts;
    }
    return !!contacts ? contacts.filter(contact => ids.indexOf(contact.id) !== -1) : [];
}

export function getContactsIdsByQuery(contacts = [], query = '') {
    if (!query) {
        return [];
    }

    const regex = new RegExp(query || '', 'gi');
    const filteredDataIds = [];
    if (!!contacts) {
        contacts.forEach((contact => {
            if (regex.test(contact.name) || regex.test(contact.email) || regex.test(contact.phone)) {
                filteredDataIds.push(contact.id);
            }
        }));
    } else {
        return [];
    }

    return filteredDataIds;
}

export const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = FORM_ERROR_MESSAGES.name.required;
    }

    if (!values.email) {
        errors.email = FORM_ERROR_MESSAGES.email.required;
    } else if (!isValidEmail(values.email)) {
        errors.email = FORM_ERROR_MESSAGES.email.invalid;
    }

    if (!values.phone) {
        errors.phone = FORM_ERROR_MESSAGES.phone.required;
    } else if (!isValidPhone(values.phone)) {
        errors.phone = FORM_ERROR_MESSAGES.phone.invalid;
    }

    return errors;
}