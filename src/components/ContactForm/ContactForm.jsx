import { Formik, Field, Form } from 'formik';

function ContactForm() {
  return (
    <Formik>
      <Form>
        <label>
          Name
          <Field
            name="name"
            placeholder="Name"
            type="text"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <button>Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
