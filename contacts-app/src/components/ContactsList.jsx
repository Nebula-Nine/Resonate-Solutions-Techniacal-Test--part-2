import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';
import './ContactsList.css';


const ContactsList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const sortedContacts = response.data.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                console.log("API Response:", response.data);
                setContacts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching contacts", error);
                setLoading(false);
            });
    }, []);

    // Check the card that needs to be expanded/collapsed
    const toggleExpand = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    if (loading) {
        return (
            <p className='loading'>Loading contacts...</p>
        );
    }
    else {
        return (
            <div className='contacts-container'>
                <h2>Contacts | {contacts.length}</h2>
                {contacts.map((contact) => (
                    <ContactCard 
                        key={contact.id}
                        contact={contact}
                        isExpanded={expandedId === contact.id}
                        onClick={() => toggleExpand(contact.id)}
                    />
                ))}
            </div>
        );
    };
};

export default ContactsList;