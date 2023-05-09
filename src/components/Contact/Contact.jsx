import PropTypes from 'prop-types';

function Contact({ contact: { name } }) {
  return (
    <>
      <p>{name}</p>
    </>
  );
}
Contact.propTypes = {
  contact: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
};

export default Contact;
