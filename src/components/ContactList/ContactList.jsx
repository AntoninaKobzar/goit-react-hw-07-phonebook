import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem';
import { getContacts, getFilterValue } from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const getfilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <ul className={css.list}>
        {getfilteredContacts().map(({ id, name, number }) => {
          return (
            <ContactItem key={id} name={name} number={number} contactId={id} />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
