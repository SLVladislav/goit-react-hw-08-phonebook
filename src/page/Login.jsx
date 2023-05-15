import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  Title,
  Label,
  TitleInput,
  Input,
  Button,
} from '../components/styles/common/loginForm.styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <TitleInput>Your e-mail adress?</TitleInput>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <ErrorMessage name="email" component="div" />
        </Label>
        <Label>
          <TitleInput>Your password?</TitleInput>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <ErrorMessage name="password" component="div" />
        </Label>
        <Button type="submit"> Log In </Button>
      </Form>
    </Container>
  );
}
