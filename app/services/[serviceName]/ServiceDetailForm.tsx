'use client';

import serviceDetailFormSubmit from '@/app/actions/serviceDetailFormSubmit';
import { SubmitButton } from '@/app/_components/SubmitButton';
import { useFormState } from 'react-dom';

const initialState = { message: '', status: '' };

const ServiceDetailForm = ({ serviceName }: { serviceName: string }) => {
  const formActionWServiceName = serviceDetailFormSubmit.bind(
    null,
    serviceName
  );

  const [state, formAction] = useFormState(
    formActionWServiceName,
    initialState
  );

  return (
    <form action={formAction}>
      <div className="formGroup">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          placeholder="Name"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="contactNo">Contact Number</label>
        <input
          id="contactNo"
          name="contactNo"
          placeholder="Contact No"
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={5}
        />
      </div>
      <div className="formGroup">
        <SubmitButton btnLabel="Enquire Now" />
      </div>
      <div className="formGroup">
        <p className={`formMsg ${state?.status}`}>{state?.message}</p>
      </div>
    </form>
  );
};

export default ServiceDetailForm;
