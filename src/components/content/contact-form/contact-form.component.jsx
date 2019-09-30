import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { validate } from '../../../utils/helper';
import { addContact, updateContactListItem } from '../../../store/actions';

const createRenderer = render => ({ input, meta, label }) =>
    <div
        className={
            [
                'form-group row',
                meta.error && meta.touched ? 'has-error' : '',
                meta.active ? 'active' : ''
            ].join(' ').trim()
        }
    >
        <label className="col-sm-4 text-right col-form-label">{label}</label>
        <div className="col-sm-6">
            {render(input, label)}
        </div>
        {
            meta.error &&
            meta.touched &&
            <span className="error">{meta.error}</span>
        }
    </div>

const RenderInput = createRenderer((input, label) =>
    <input className="form-control"  {...input} placeholder={label} />
);

const FormComponent = ({ invalid, pristine, handleSubmit, initialValues, addContact, history }) => <div>
    <h2 className="text-center">Create Contact</h2>
    <form onSubmit={handleSubmit(addContact.bind(this, history))}>
        <Field name="name" label="Full name" component={RenderInput} />
        <Field name="email" label="Email address" component={RenderInput} />
        <Field name="phone" label="Telephone number" component={RenderInput} />
        <div className="form-group row">
            <div className="offset-sm-4 col-sm-3">
                <button type="submit" className="btn btn-primary mr-1" disabled={invalid || (pristine && !Object.keys(initialValues).length)}>Submit</button>
                <Link to="/contact-list" className="btn btn-secondary">Cancel</Link>
            </div>
        </div>
    </form>
</div>

const mapStateToProps = ({ contact }) => {
    return {
        initialValues: contact
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addContact(history, contact) {
            if (contact.id) {
                dispatch(updateContactListItem(contact));
            } else {
                contact.poster = Math.floor((Math.random() * 15) + 1) + '.jpg';
                contact.id = new Date().getTime();
                dispatch(addContact(contact));
            }
            history.push('/contact-list');
        }
    }
}

let ContactFormComponent = reduxForm({
    form: 'FormComponent',
    validate,
    enableReinitialize: true
})(FormComponent);

ContactFormComponent = connect(mapStateToProps, mapDispatchToProps)(ContactFormComponent);

export default withRouter(ContactFormComponent);