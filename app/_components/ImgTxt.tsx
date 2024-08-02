import Image from 'next/image';
import style from '@/app/_styles/imgTxt.module.scss';
import ArrowRight from './icons/ArrowRight';
import Link from 'next/link';

const ImgTxt = ({
  imgSrc,
  imgAlt,
  title,
  desc,
  readmoreLink,
  ndisIconSrc,
  ndisIconAlt,
}: {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  desc: string[];
  readmoreLink?: string;
  ndisIconSrc: string;
  ndisIconAlt?: string;
}) => {
  console.log(desc);
  return (
    <section className="mainGrid">
      <div className="content">
        <div className={`${style.imgTxt}`}>
          <Image
            src={imgSrc}
            height={1000}
            width={1000}
            alt={imgAlt ?? ''}
          />
          <div className={style.txt}>
            <h1 className={style.title}>{title}</h1>
            {/* <p>{desc}</p> */}
            {desc.map((descPart, index) => {
              return <p key={index}>{descPart}</p>;
            })}
            {!readmoreLink ? (
              <></>
            ) : (
              <Link
                href={readmoreLink}
                className={`${style.readMore} uppercase font-semibold`}>
                Read More <ArrowRight />{' '}
              </Link>
            )}
            <Image
              src={ndisIconSrc}
              alt={ndisIconAlt ?? ''}
              height={250}
              width={250}
              className={style.ndisLogo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgTxt;
