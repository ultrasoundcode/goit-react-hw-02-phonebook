import PropTypes from 'prop-types';

function Contact({ contact: { name, number } }) {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
    </>
  );
}
Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
};

export default Contact;
// Contact
