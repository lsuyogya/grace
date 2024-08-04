"use server";

import style from "@/app/_styles/contactSection.module.scss";
import Image from "next/image";
import { SubmitButton } from "./SubmitButton";

const ContactSection = ({
  phone,
  email,
  address,
  purple = true,
  title,
}: {
  phone: string;
  email: string;
  address: string;
  purple?: boolean;
  title: string;
}) => {
  return (
    <section className={`${style.container} mainGrid`}>
      <div className="content">
        <div className={style.content}>
          <div className={`${style.left} grid`}>
            <h1>{title}</h1>
            <div className="grid gap-2 mt-6">
              <div className="flex gap-4">
                <Image src="/icons/phone.svg" width={48} height={48} alt="" />
                <span className="content-center">{phone}</span>
              </div>
              <div className="flex gap-4">
                <Image src="/icons/email.svg" width={48} height={48} alt="" />
                <span className="content-center">{email}</span>
              </div>
              <div className="flex gap-4">
                <Image src="/icons/map.svg" width={48} height={48} alt="" />
                <span className="content-center">{address}</span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38736.76585061252!2d1.2452947346129912!3d52.6410482390156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0aad55133f513%3A0x684ca5e00e12452f!2sNorwich%2C%20UK!5e0!3m2!1sen!2snp!4v1722316875911!5m2!1sen!2snp"
              width="600"
              height="220"
              style={{ border: "0", marginBlockStart: "2rem" }}
              allowFullScreen
              loading="lazy"
              className="self-end w-full"
            />
          </div>
          <div
            className={`${style.right} ${
              purple ? style.bgPrimary : style.bgNone
            }`}
          >
            <h1>Contact Form</h1>
            <ContactForm />
          </div>
        </div>
      </div>
      <div
        className={`contentEnd-FullWidth ${
          purple ? style.bgPrimary : style.bgNone
        } ${style.contactRightFiller}`}
      />
    </section>
  );
};

export default ContactSection;

export const ContactForm = () => {
  async function formAction(formData: FormData) {
    "use server";
    const rawFormData = {
      full_name: formData.get("name"),
      email_address: formData.get("email"),
      contact_no: formData.get("contactNo"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(`${process.env.baseUrl}/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFormData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <form action={formAction} className={style.contactForm}>
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
          placeholder="9870000000"
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
      <div className="formGroup">
        <SubmitButton
          btnLabel="Send Now"
          className="btnPrimary uppercase float-right"
        />
      </div>
    </form>
  );
};
