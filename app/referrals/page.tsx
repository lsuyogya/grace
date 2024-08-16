'use server';

import style from '@/app/_styles/referrals.module.scss';

const Page = () => {
  return (
    <div className="mainGrid">
      <form className={`content ${style.referalForm}`}>
        <div className={style.participantDetails}>
          <h3>Participant Details</h3>
          <input
            type="date"
            placeholder="Referral Date"
            name="referralDate"
          />
          <input
            type="text"
            placeholder="Referral Managed by"
            name="referralManagedBy"
          />
          <input
            type="text"
            placeholder="Participant First Name"
            name="participantFirstName"
          />
          <input
            type="text"
            placeholder="Participant Last Name"
            name="participantLastName"
          />
          <input
            type="text"
            placeholder="Guardian First Name"
            name="guardianFirstName"
          />
          <input
            type="text"
            placeholder="Guardian Last Name"
            name="guardianLastName"
          />
          <input
            type="tel"
            placeholder="Home Phone Number"
            maxLength={9}
            minLength={9}
            name="homePhoneNumber"
          />
          <input
            type="tel"
            placeholder="Mobile Phone Number"
            maxLength={9}
            minLength={9}
            name="mobilePhoneNumber"
          />
          <input
            type="tel"
            placeholder="Work Phone Number"
            maxLength={9}
            minLength={9}
            name="workPhoneNumber"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            placeholder="Address"
            rows={5}
            cols={40}
            name="address"
          />
          <input
            type="text"
            placeholder="Participant Country of Birth"
            name="participantCountryOfBirth"
          />
          <input
            type="text"
            placeholder="Preferred Language"
            name="preferredLanguage"
          />
          <div>
            <h2>Aboriginal or Torres Strait Islander?</h2>
            <Radio
              id="aboriginal"
              name="aboriginalOrTorresStraitIslander"
            />
          </div>
          <div>
            <h2>Interpreter Required?</h2>
            <Radio
              id="interpreter"
              name="interpreterRequired"
            />
          </div>
          <input
            type="text"
            placeholder="Other Support Required (specify):"
            name="otherSupport"
          />
          <textarea
            placeholder="Action Taken/Follow Up (Mention Here)"
            rows={5}
            cols={40}
            name="actionTakenFollowUp"
          />
        </div>

        <div className={style.referrerDetails}>
          <h3>Referrer Details</h3>
          <input
            type="text"
            placeholder="Referrer Name"
            name="referrerName"
          />
          <input
            type="text"
            placeholder="Referrer Position"
            name="referrerPosition"
          />
          <input
            type="text"
            placeholder="Referrer Organisation"
            name="referrerOrganisation"
          />
          <input
            type="tel"
            placeholder="Referrer Phone Number"
            name="referrerPhoneNumber"
          />
          <textarea
            placeholder="Referrer Reason"
            rows={5}
            cols={40}
            name="referrerReason"
          />
        </div>

        <div className="flex place-content-center place-items-center gap-2">
          <input
            type="checkbox"
            name="participantDeclaration"
            id="participant-declaration"
            className="w-max"
          />
          <label htmlFor="participant-declaration">
            I consent to my information being provided to Genuine Healthcare for
            the purposes of referral, service delivery, and inclusion in
            de-identified data reporting.
          </label>
        </div>

        <input
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Page;

const Radio = ({ id, name }: { id: string; name: string }) => {
  return (
    <>
      <div className="flex gap-2">
        <input
          type="radio"
          value="Yes"
          id={`${id}-yes`}
          name={name}
          className="w-max"
        />
        <label htmlFor={`${id}-yes`}>Yes</label>
      </div>
      <div className="flex gap-2">
        <input
          type="radio"
          value="No"
          id={`${id}-no`}
          name={name}
          className="w-max"
        />
        <label htmlFor={`${id}-no`}>No</label>
      </div>
    </>
  );
};
