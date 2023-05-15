import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/Filter/filterSlice';
import { fetchContacts } from 'redux/contactSlice/operations';
import { getContacts, getFilter } from 'redux/contactSlice/selector';
import { useEffect } from 'react';
import { Conteiner, H1, Subtitle, Title } from './Phonebook.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/Contacts/ContactList/ContactList';
import Filter from 'components/Filter/Filter';


export default function Phonebook() {
  const filterState = useSelector(getFilter);
  const { items, isLoading, error } = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  const getVisibleContacts = () =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filterState.toLowerCase())
    );

  return (
    <Conteiner>
      <H1>
        Phone<Title>book</Title>
      </H1>
      <ContactForm contacts={items} />
      <Subtitle>Contacts</Subtitle>
      <Filter filter={filterState} handleChangeFilter={handlChangeFilter} />
      {isLoading && <p>Loading contacts...</p>}
      {items.length > 0 && (
        <ContactList
          contacts={items.length}
          visibleContacts={getVisibleContacts()}
        />
      )}
      {error && <p>{error}</p>}
    </Conteiner>
  );
}
