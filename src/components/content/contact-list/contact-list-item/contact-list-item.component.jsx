import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteContact, updateContact } from '../../../../store/actions';

const ContactListItemComponent = ({ contact, deleteContact, updateContact }) => <li className="media col-md-5 flex-row offset-md-1 card card-body bg-light">
    <div className="thumbnail col-md-4">
        <img className="media-object" src={`assets/images/${contact.poster}`} />
    </div>
    <div className="content col-md-8">
        <div className="media-heading">
            <h3>{contact.name}</h3>
        </div>
        <div className="media-body">
            <div>
                <span><strong>Phone Number:  </strong></span><span>{contact.phone}</span>
            </div>
            <div>
                <span><strong>Email:  </strong></span><span>{contact.email}</span>
            </div>
        </div>
        <br />
        <div className="media-footer">
            <Link to="/contact-form" className="btn btn-primary mr-1" onClick={updateContact.bind(this, contact)}>Edit</Link>
            <button className="btn btn-danger" onClick={deleteContact.bind(this, contact.id)}>Delete</button>
        </div>
    </div>
</li>

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact(contactId) {
            dispatch(deleteContact(contactId));
        },

        updateContact(contact) {
            dispatch(updateContact(contact));
        }
    }
}

export default connect(null, mapDispatchToProps)(ContactListItemComponent);