'use server';

import style from '@/app/_styles/contactSection.module.scss';
import Image from 'next/image';
import { ContactForm } from './ContactForm';
import Link from 'next/link';

const ContactSection = ({
  phone,
  email,
  address,
  purple = true,
  title,
  mapSrc,
}: {
  phone: string;
  email: string;
  address: string;
  purple?: boolean;
  title: string;
  mapSrc: string;
}) => {
  return (
    <section className={`${style.container} mainGrid`}>
      <div className="content">
        <div className={style.content}>
          <div className={`${style.left} grid`}>
            <h1>{title}</h1>
            <div className="grid gap-2 mt-6">
              <div className="flex gap-4">
                <Image
                  src="/icons/phone.svg"
                  width={48}
                  height={48}
                  alt=""
                />
                <span className="content-center">
                  <Link
                    href={`tel:${phone}`}
                    target="_blank">
                    {phone}
                  </Link>
                </span>{' '}
              </div>
              <div className="flex gap-4">
                <Image
                  src="/icons/email.svg"
                  width={48}
                  height={48}
                  alt=""
                />
                <span className="content-center">
                  <Link
                    target="_blank"
                    href={`mailto:${email}`}>
                    {email}
                  </Link>
                </span>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/icons/map.svg"
                  width={48}
                  height={48}
                  alt=""
                />
                <span className="content-center">{address}</span>
              </div>
            </div>
            <iframe
              src={mapSrc}
              width="600"
              height="220"
              style={{ border: '0', marginBlockStart: '2rem' }}
              allowFullScreen
              loading="lazy"
              className="self-end w-full"
            />
          </div>
          <div
            className={`${style.right} ${
              purple ? style.bgPrimary : style.bgNone
            }`}>
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
