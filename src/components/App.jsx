import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm ';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList ';
import Filter from './Filter/Filter ';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = e => {
    // const elNormalized = e.name.toLowerCase();
    if (this.state.contacts.find(contact => contact.name === e.name)) {
      alert(`${e.name} is already in contacts.`);
      return;
    }
    const contactEl = {
      id: nanoid(),
      name: e.name,
      number: e.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contactEl, ...contacts],
    }));
    console.log('this.state.name', this.state.name);
    console.log('this.state.number', this.state.number);
    console.log('this.state.contacts', this.state.contacts);
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVissibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contactsFromLs = localStorage.getItem('contacts');
    const parseContctsFromLs = JSON.parse(contactsFromLs);
    console.log('contactsFromLsParse', parseContctsFromLs);

    if (parseContctsFromLs) {
      this.setState({ contacts: parseContctsFromLs });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('State', this.state);
    console.log('prevState', prevState);
    if (prevState !== this.state) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className={css.div}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter filterEl={this.state.filter} onChangeEl={this.changeFilter} />
        <ContactList
          contactsArr={this.getVissibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
