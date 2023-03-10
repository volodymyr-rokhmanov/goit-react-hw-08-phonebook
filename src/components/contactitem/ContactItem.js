import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { getContacts } from 'redux/contacts/selectors';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact__item} key={contact.id}>
      <span className={css.contact__name}>Name: {contact.name}</span>
      <span className={css.contact__number}>Tel: {contact.number}</span>
      <div className={css.contact_button_wrapper}>
        <button
          className={css.contact__button}
          type="button"
          onClick={() => dispatch(deleteContacts(contact.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.propType = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};
