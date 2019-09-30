import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import contact from './contact.reducer';
import contactList from './contact-list.reducer';

const reducers = {
    form,
    contact,
    contactList
};

const rootReducer = combineReducers({ ...reducers });

export default rootReducer;