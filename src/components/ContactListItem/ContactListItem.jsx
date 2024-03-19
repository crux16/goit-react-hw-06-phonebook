import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();

  // handleDelete method
  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
  };

  return (
    <li className={css.contactListItem}>
      <p>{filteredContact.name}:</p>
      <p><a href={'tel:'+filteredContact.number} className={css.contactListLink}>{filteredContact.number}</a></p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
