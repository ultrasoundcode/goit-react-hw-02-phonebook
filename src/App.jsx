import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}
