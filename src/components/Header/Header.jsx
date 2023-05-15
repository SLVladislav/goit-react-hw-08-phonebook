import { getisLoggedInStatus } from 'redux/auth/auth-selector';
import { Wrapper } from './Header.styled';
import Logo from './Logo/Logo';
import Navigations from './Navigations/Navigations';
import UserBar from './UserBar/UserBar';
import AuthNav from './AuthNav/AuthNav';
import Container from 'components/Container/Container';
import { useSelector } from 'react-redux';

function Header() {
  const isLoggedIn = useSelector(getisLoggedInStatus);

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigations />
        {isLoggedIn ? <UserBar /> : <AuthNav />}
      </Wrapper>
    </Container>
  );
}

export default Header;
