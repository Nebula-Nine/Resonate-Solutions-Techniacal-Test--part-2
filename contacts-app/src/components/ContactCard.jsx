import React from "react";
import './ContactCard.css'

const ContactCard = ({ contact, isExpanded, onClick }) =>{
    return(
        <div className="contact-card" onClick={onClick}>
            <h2>{contact.name}</h2>
            {isExpanded && (
                <div className="contact-details">
                    <p><strong>Email:</strong> {contact.email}</p>
                    <p><strong>Phone:</strong> {contact.phone}</p>
                    <p><strong>Company:</strong> {contact.company.name}</p>
                    <p><strong>Address:</strong> {contact.address.suite}, {contact.address.street}, {contact.address.city}, {contact.address.zipcode}</p>
                </div>
            )}
        </div>
    );
};

export default ContactCard;