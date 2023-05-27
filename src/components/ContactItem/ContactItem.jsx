import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import css from './ContactItem.module.css';

const ContactItem = ({ name, number, contactId }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contactId));
  };
  return (
    <li className={css.item}>
      <span className={css.item}>{name}: </span>
      <a href={`tel:${number}`} className={css.number}>
        {number}
      </a>
      <button
        type="button"
        className={css.button}
        onClick={() => onDeleteContact()}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
export default ContactItem;
