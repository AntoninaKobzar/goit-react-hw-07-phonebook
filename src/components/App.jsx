import { useEffect } from 'react';
import { getIsLoading, getError } from 'redux/contacts/contactsSelectors';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import css from './App.module.css';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>{'Loading...'}</b>}
      <ContactList />
    </div>
  );
}

export default App;
