import { nanoid } from 'nanoid';
import css from './contactForm.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('');

  const handleChangeName = evt => {
    setName(evt.target.value);
    setId(nanoid());
  };

  const handleChangeNumber = evt => {
    setPhone(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, phone, id });
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
    setId('');
  };

  return (
    <div className={css.phonebook}>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor={id} className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            value={name}
            onChange={handleChangeName}
            name="name"
            id={id}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="" className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            value={phone}
            onChange={handleChangeNumber}
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  phone: PropTypes.number,
  id: PropTypes.string,
};
