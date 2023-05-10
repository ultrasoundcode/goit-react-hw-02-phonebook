import { Formik, Field, Form, ErrorMessage } from 'formik';
function FilterContact({ filter, onChange }) {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
    >
      <Form>
        <label>
          Find Contacts by name
          <Field
            name="name"
            placeholder="Contact Name"
            type="text"
            value={filter}
            onChange={onChange}
          />
          <ErrorMessage name="name" />
        </label>
      </Form>
    </Formik>
  );
}

export default FilterContact;
