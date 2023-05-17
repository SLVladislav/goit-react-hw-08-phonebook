import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import { Item } from './ContactList.styled';
import { deleteContacts } from 'redux/contactSlice/operations';

const ContactList = ({ contacts, visibleContacts }) => {
  return contacts ? (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Contact
              name={name}
              number={number}
              deleteContact={deleteContacts(id)}
              id={id}
            />
          </Item>
        );
      })}
    </ul>
  ) : (
    <></>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.number.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
