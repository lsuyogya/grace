'use client';
import contactFormSubmit from '@/app/actions/contactFormSubmit';
import style from '@/app/_styles/contactSection.module.scss';
import { SubmitButton } from './SubmitButton';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
  state: '',
};

export const ContactForm = () => {
  const [state, formAction] = useFormState(contactFormSubmit, initialState);
  return (
    <form
      action={formAction}
      className={style.contactForm}>
      <div className="formGroup">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@example.com"
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="contactNo">Contact Number</label>
        <input
          id="contactNo"
          name="contactNo"
          type="text"
          pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
          placeholder="04XXXXXXXX"
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message to us."
          rows={6}
        />
      </div>
      <div className="formGroup flex">
        <SubmitButton
          btnLabel="Send Now"
          className="btnPrimary uppercase ml-auto"
        />
      </div>
      <div className="formGroup">
        <p className={`formMsg ${state?.state}`}>{state?.message}</p>
      </div>
    </form>
  );
};
