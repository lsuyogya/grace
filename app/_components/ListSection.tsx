import style from '@/app/_styles/listSection.module.scss';
import Image from 'next/image';
import CheckMark from './icons/CheckMark';
import Link from 'next/link';

const ListSection = ({
  imgSrc,
  imgAlt,
  title,
  btnLabel,
  btnLink,
  listArray,
}: {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  btnLabel: string;
  btnLink: string;
  listArray: Array<string>;
}) => {
  return (
    <div className={style.container}>
      <div className={`absolute -z-10 w-screen h-auto ${style.imgContainer}`}>
        <Image
          src={imgSrc}
          alt={imgAlt ?? ''}
          width={1000}
          height={1000}
        />
      </div>
      <div className={style.txt}>
        <div className={style.title}>{title}</div>
        <ul className={style.list}>
          {listArray.map((list, index) => (
            <li key={index}>
              <CheckMark />
              <span>{list}</span>
            </li>
          ))}
        </ul>
        <Link href={btnLink}>
          <button className={style.btn}>{btnLabel}</button>
        </Link>
      </div>
    </div>
  );
};

export default ListSection;
