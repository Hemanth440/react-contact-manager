import { ADD_CONTACT_ACTION, DELETE_CONTACT_ACTION, UPDATE_CONTACT_LIST_ITEM } from "../../constants";

const initialState = {
    data: []
};

export default function contactList(state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT_ACTION: {
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        }
        case UPDATE_CONTACT_LIST_ITEM: {
            const updatedContact = action.payload;
            const oldContactIndex = state.data.findIndex((contact) => contact.id === updatedContact.id);

            return {
                ...state,
                data: [...state.data.slice(0, oldContactIndex), updatedContact, ...state.data.slice(oldContactIndex + 1)]
            }
        }
        case DELETE_CONTACT_ACTION: {
            const contactIndex = state.data.findIndex((contact) => contact.id === action.payload);
            return {
                ...state,
                data: [...state.data.slice(0, contactIndex), ...state.data.slice(contactIndex + 1)]
            }
        }
        default: {
            return state;
        }
    }
}