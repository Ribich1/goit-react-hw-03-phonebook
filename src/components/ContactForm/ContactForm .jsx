import React from 'react';
import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().min(2).max(18).required(),
//   number: yup.number().min(9).max(13).required(),
// });
const initialValues = {
  id: '',
  name: '',
  number: '',
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('values', values);
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      //   validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {/* <ErrorMessage name="name" component="div" /> */}
        </label>
        <label htmlFor="number" className={css.label}>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          {/* <ErrorMessage name="number" component="div" /> */}
        </label>

        <button type="submit" className={css.button__submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
