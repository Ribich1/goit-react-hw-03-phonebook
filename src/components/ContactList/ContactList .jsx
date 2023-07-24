import React from 'react';
import css from './ContactList.module.css'

const ContactList = ({ contactsArr,onDeleteContact }) => (
  <ul className="ContactsList">
    {contactsArr.map(({ id, name, number }) => (
      <li key={id} className={css.ContactsList__item}>
        {name}: {number}
        <button onClick={()=>onDeleteContact(id)} className={css.BtnDelete}>Delete</button>
      </li>
     
    ))}
  </ul>
);

export default ContactList;
