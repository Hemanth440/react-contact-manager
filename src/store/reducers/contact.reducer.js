import { NEW_CONTACT_ACTION, UPDATE_CONTACT_ACTION } from "../../constants";

const initialState = {};

export default function contact(state = initialState, action) {
    switch (action.type) {
        case NEW_CONTACT_ACTION:
            return initialState;
        case UPDATE_CONTACT_ACTION: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
}