import { List, Item, Link } from './Naviagations.styled';
import { useSelector } from 'react-redux';
import { getisLoggedInStatus } from 'redux/auth/auth-selector';

function Navigations() {
  const isLoggedIn = useSelector(getisLoggedInStatus);

  return (
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      {isLoggedIn && (
        <Item>
          <Link to="/phonebook">Contacts</Link>
        </Item>
      )}
    </List>
  );
}

export default Navigations;
