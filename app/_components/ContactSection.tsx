'use server';

import style from '@/app/_styles/contactSection.module.scss';
import Image from 'next/image';
import { ContactForm } from './ContactForm';
import Link from 'next/link';

const ContactSection = ({
  phone1,
  phone2,
  email,
  address1,
  address2,
  purple = true,
  title,
  mapSrc1,
  mapSrc2,
}: {
  phone1: string;
  phone2: string;
  email: string;
  address1: string;
  address2: string;
  purple?: boolean;
  title: string;
  mapSrc1?: string;
  mapSrc2?: string;
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
                  src="/icons/phone.svg"
                  width={48}
                  height={48}
                  alt=""
                />
                <span className="grid content-center">
                  <Link
                    href={`tel:${phone1.replace(/\s*\(.*?\)/, '').trim()}`}
                    target="_blank">
                    {phone1}
                  </Link>
                  <Link
                    href={`tel:${phone2.replace(/\s*\(.*?\)/, '').trim()}`}
                    target="_blank">
                    {phone2}
                  </Link>
                </span>{' '}
              </div>
              <div className="flex gap-4">
                <Image
                  src="/icons/map.svg"
                  width={48}
                  height={48}
                  alt=""
                />
                <span className="flex flex-col place-content-center">
                  <span className="content-center h-max">{address1}</span>
                  <span className="content-center h-max">{address2}</span>
                </span>
              </div>
            </div>
            {mapSrc1 ? (
              <iframe
                src={mapSrc1}
                width="600"
                height="220"
                style={{ border: '0', marginBlockStart: '2rem' }}
                allowFullScreen
                loading="lazy"
                className="self-end w-full"
              />
            ) : (
              <></>
            )}
            {mapSrc2 ? (
              <iframe
                src={mapSrc2}
                width="600"
                height="220"
                style={{ border: '0', marginBlockStart: '2rem' }}
                allowFullScreen
                loading="lazy"
                className="self-end w-full"
              />
            ) : (
              <></>
            )}
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
