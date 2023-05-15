import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);

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
    dispatch(register({ name, email, password }));
  };

  return (
    <Container>
      <Title>Registration</Title>

      {/* <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={onSubmitForm}
        validationSchema={userRegisterSchema}
      > */}

      <Form onSubmit={handleSubmit}>
        <Label>
          <TitleInput>What is your name?</TitleInput>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
          />
          <ErrorMessage name="name" component="div" />
        </Label>
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
          <TitleInput>Create a password.</TitleInput>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <ErrorMessage name="password" component="div" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}

export default RegisterPage;
