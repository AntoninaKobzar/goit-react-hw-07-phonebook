import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <ul className={css.list}>
        {filteredContacts().map(({ id, name, number }) => {
          return (
            <ContactItem key={id} name={name} number={number} contactId={id} />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
