import { Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { StyledForm, FormGroup } from './ContactForm.styled';

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
      <StyledForm>
        <FormGroup>
          Name
          <Field name="name" placeholder="Name" type="text" />
          <ErrorMessage name="name" />
        </FormGroup>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
}

export default ContactForm;
