import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
});

function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAddContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" placeholder="Name" type="text" />
          <ErrorMessage name="name" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
