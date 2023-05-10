import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import FilterContact from 'components/FilterContact/FilterContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { contacts, filter } = this.state;
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={this.addContact} />
        <FilterContact value={filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactsList contacts={visibleContacts} />
      </div>
    );
  }
}
