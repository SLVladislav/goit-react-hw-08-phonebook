import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getAuthMail, getAuthName } from 'redux/auth/auth-selector';
import {
  Wrapper,
  GroupWrapper,
  UserIcon,
  TextWrapper,
  Text,
  Button,
  UserName,
  Email,
} from './UserBar.styled';

function UserBar() {
  const userName = useSelector(getAuthName);
  const userEmail = useSelector(getAuthMail);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <GroupWrapper>
        <UserIcon />
        <TextWrapper>
          <Text>
            Welcome, <UserName>{userName}</UserName>
          </Text>
          <Email>{userEmail}</Email>
        </TextWrapper>
      </GroupWrapper>
      <Button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Wrapper>
  );
}

export default UserBar;
