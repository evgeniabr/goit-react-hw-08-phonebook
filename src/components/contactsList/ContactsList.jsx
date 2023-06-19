import React from 'react';
import css from './ContactsList.module.css';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/slice/operations';
import { useDispatch, useSelector } from 'react-redux';

export function ContactsList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <>
      <ul>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              <span>{contact.name}</span>:<span>{contact.number}</span>
              <button
                className={css.button}
                onClick={() => {
                  dispatch(deleteContact(contact.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
