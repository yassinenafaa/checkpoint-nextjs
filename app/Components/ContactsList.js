"use server";
import React from "react";
import ContactCard from "./ContactCard";

async function getContacts() {
    const contactsFetch = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const contacts = await contactsFetch.json();
    return contacts;
}

const ContactsList = () => async () => {
    const contact = await getContacts();
    return (
        <div>
            {contact.map((el) => (
                <ContactCard contact={el} key={el.id} />
            ))}
        </div>
    );
};

export default ContactsList;
