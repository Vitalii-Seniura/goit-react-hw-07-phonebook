import { GlobalStyle } from './GlobalStyle';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import PropTypes from 'prop-types';
import Filter from './Filter/filter';
import { addContact, deleteContact } from 'redux/itemsSlice';
import { setFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();

  const filterCont = useSelector(state => state.filter);

  const itemContact = useSelector(state => state.items);

  const addContactList = data => {
    const searchName = data.name.toLowerCase();
    itemContact.find(contact => contact.name.toLowerCase() === searchName)
      ? alert('contact is already in contacts')
      : dispatch(addContact(data));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleFindChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  const filterContact = itemContact.filter(item =>
    item.name.toLowerCase().includes(filterCont.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(itemContact));
  }, [itemContact]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactList} />
      <h2>Contacts</h2>
      <Filter value={filterCont} onChange={handleFindChange} />
      <ContactList contacts={filterContact} onLeaveFeedback={handleDelete} />
      <GlobalStyle />
    </div>
  );
};

App.propTypes = {
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
