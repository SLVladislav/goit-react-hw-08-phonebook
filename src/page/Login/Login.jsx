import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/auth-operations';
import { Title, Label, TitleInput, Input, Button } from './loginForm.styled';
import Container from 'components/Container/Container';
import { Form, ErrorMessage, Formik } from 'formik';
import { logIn } from 'redux/auth/auth-operations';

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
    console.log({ email, password });

    dispatch(logIn({ email, password }));
  };

  return (
    <Container>
      <Title>Login</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
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
      </Formik>
    </Container>
  );
}
