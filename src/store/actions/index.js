import { NEW_CONTACT_ACTION, UPDATE_CONTACT_ACTION, ADD_CONTACT_ACTION, DELETE_CONTACT_ACTION, UPDATE_CONTACT_LIST_ITEM } from "../../constants";

export function newContact(payload) {
    return { type: NEW_CONTACT_ACTION, payload };
}

export function updateContact(payload) {
    return { type: UPDATE_CONTACT_ACTION, payload };
}

export function addContact(payload) {
    return { type: ADD_CONTACT_ACTION, payload };
}

export function deleteContact(payload) {
    return { type: DELETE_CONTACT_ACTION, payload };
}

export function updateContactListItem(payload) {
    return { type: UPDATE_CONTACT_LIST_ITEM, payload };
}