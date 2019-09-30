import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ContactListItemComponent from './contact-list-item/contact-list-item.component';

const ContactListComponent = ({ contactList }) => {
    const list = contactList.map(contact => <ContactListItemComponent contact={contact} key={contact.id} />);

    return (
        <div>
            <h2 className="page-header text-center">List of contacts</h2>
            <div className="text-center">
                <Link to="/contact-form" className="btn btn-primary">Add Contact</Link>
            </div>
            {
                list.length ?
                    <ul className="media-list row contacts-container">
                        {list}
                    </ul>
                    : <div>No Contacts Added</div>
            }
        </div>
    )
}

const mapStateToProps = ({ contactList: { data } }) => {
    return {
        contactList: data
    }
}

export default connect(mapStateToProps)(ContactListComponent);
