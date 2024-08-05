import style from '@/app/_styles/clientTestimonials.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import HalfStar from './icons/HalfStar';
import FullStar from './icons/FullStar';
import EmptyStar from './icons/EmptyStar';

type testimonialObj = {
  name: string;
  date: string;
  stars: number;
  image: string;
  reviews: string;
};

const ClientTestimonials = ({
  title,
  btnTxt,
  btnLink,
  testimonialList,
}: {
  title: string;
  btnTxt: string;
  btnLink: string;
  testimonialList: testimonialObj[];
}) => {
  return (
    <section className={`${style.container} mainGrid`}>
      <div className="content">
        <div
          className={`${style.top} flex gap-4 flex-wrap justify-between mb-6`}>
          <h1>{title}</h1>
          <Link href={btnLink}>
            <button className="btnPrimary uppercase">{btnTxt}</button>
          </Link>
        </div>
        <div className={style.testimonialGrid}>
          {testimonialList.map((testimonial, index) => {
            return (
              <TestimonialCard
                key={index}
                userName={testimonial.name}
                date={testimonial.date}
                rating={testimonial.stars}
                review={testimonial.reviews}
                imgSrc={testimonial.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;

const TestimonialCard = ({
  imgSrc = '/AvatarDummy2.png',
  imgAlt = '',
  userName,
  date,
  rating,
  review,
}: {
  imgSrc?: string;
  imgAlt?: string;
  userName: string;
  date: string;
  rating: number;
  review: string;
}) => {
  const displayDate = new Date();
  //rounding to get 0.5s
  const roundedRating = Math.round(rating * 2) / 2;

  // Calculate number of full, half, and empty icons
  const fullIcons = Math.floor(roundedRating);
  const halfIcons = roundedRating % 1 !== 0 ? 1 : 0;
  const emptyIcons = 5 - fullIcons - halfIcons;
  return (
    <div className={style.testimonialCard}>
      <div
        className={`${style.cardHeader} flex gap-4 align-middle justify-between`}>
        <div className={`${style.headerContent} flex gap-4 align-middle`}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={50}
            height={50}
            className={`rounded-full aspect-square`}
          />
          <div className={`${style.headerTxt} grid`}>
            <span>{userName}</span>
            <small>{date ?? ''}</small>
          </div>
        </div>
        <Image
          src={'/Google__G__logo.svg'}
          alt=""
          width={40}
          height={40}
        />
      </div>
      <div className={style.rating}>
        {Array(fullIcons)
          .fill(null)
          .map((_, index) => (
            <FullStar key={`full-${index}`} />
          ))}
        {Array(halfIcons)
          .fill(null)
          .map((_, index) => (
            <HalfStar key={`half-${index}`} />
          ))}
        {Array(emptyIcons)
          .fill(null)
          .map((_, index) => (
            <EmptyStar key={`empty-${index}`} />
          ))}
      </div>
      <div className={`${style.cardBody}`}>
        <p>{review}</p>
      </div>
    </div>
  );
};
