import Image from 'next/image';
import '@/app/_styles/banner.module.scss';

const Banner = ({
  imgUrl,
  imgAlt,
  overlayTitle,
  overlayTxt,
}: {
  imgUrl: string;
  imgAlt: string;
  overlayTitle: string;
  overlayTxt?: string;
}) => {
  return (
    <div className="banner">
      <Image
        src={imgUrl}
        alt={imgAlt}
        height={'1000'}
        width={'1000'}
        className="w-screen h-auto"
      />
      <div className="overlay">
        <h1 className="overlayTitle">{overlayTitle}</h1>
        {!overlayTxt ? <></> : <p className="overlayTxt">{overlayTxt}</p>}
      </div>
    </div>
  );
};

export default Banner;
