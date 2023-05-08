import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import ContactForm from 'components/ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
    );
  }
}
