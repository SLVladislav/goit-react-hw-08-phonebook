import PropTypes from 'prop-types';
import { FaUserAlt, FaTrash } from 'react-icons/fa';
import { Icon, Number, Wrapper, Button } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactSlice/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Icon>
          <FaUserAlt />
        </Icon>
        <p>{`${name}`}</p>
      </Wrapper>
      <Wrapper>
        <Number>{`${number}`}</Number>
        <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
          <FaTrash />
        </Button>
      </Wrapper>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
