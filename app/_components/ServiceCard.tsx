import Link from 'next/link';
import Image from 'next/image';
import style from '@/app/_styles/serviceCard.module.scss';

const ServiceCard = ({
  title,
  description,
  link,
  btnLabel,
  imgSrc,
  imgAlt = '',
}: {
  title: string;
  description: string;
  link: string;
  btnLabel: string;
  imgSrc: string;
  imgAlt?: string;
}) => {
  return (
    <div className={style.serviceCard}>
      <div className={style.imgContainer}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          height={400}
          width={400}
        />
      </div>
      <div className={style.txtWrapper}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.additionalDetails}>
          <div>
            <p className={style.desc}>{description}</p>
            <Link href={link}>
              <button>{btnLabel}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
