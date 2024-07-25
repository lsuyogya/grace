import Image from 'next/image';
import style from '@/app/_styles/imgTxt.module.scss';
import ArrowRight from './icons/ArrowRight';
import Link from 'next/link';

const ImgTxt = ({
  imgSrc,
  imgAlt,
  title,
  desc1stPara,
  desc2ndPara,
  readmoreLink,
  ndisIconSrc,
  ndisIconAlt,
}: {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  desc1stPara: string;
  desc2ndPara?: string;
  readmoreLink: string;
  ndisIconSrc: string;
  ndisIconAlt?: string;
}) => {
  return (
    <div className={style.imgTxt}>
      <Image
        src={imgSrc}
        height={1000}
        width={1000}
        alt={imgAlt ?? ''}
      />
      <div className={style.txt}>
        <h1 className={style.title}>{title}</h1>
        <p>{desc1stPara}</p>
        {!desc2ndPara ? <></> : <p>{desc2ndPara}</p>}
        <Link
          href={readmoreLink}
          className={`${style.readMore} uppercase font-semibold`}>
          Read More <ArrowRight />{' '}
        </Link>
        <Image
          src={ndisIconSrc}
          alt={ndisIconAlt ?? ''}
          height={250}
          width={250}
          className={style.ndisLogo}
        />
      </div>
    </div>
  );
};

export default ImgTxt;
