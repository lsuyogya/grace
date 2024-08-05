import style from '@/app/_styles/ourServices.module.scss';
import ServiceCard from './ServiceCard';

const sampleJson = [
  {
    imgSrc: '/service.png',
    title: 'Personal care support',
    description:
      'At GSS our personal care supports relate to assistance with daily personal activities including assistance with or supervision of, personal tasks of daily life',
    link: '/',
    btnLabel: 'Learn more',
  },
  {
    imgSrc: '/service.png',
    title: 'Personal care support',
    description:
      'At GSS our personal care supports relate to assistance with daily personal activities including assistance with or supervision of, personal tasks of daily life',
    link: '/',
    btnLabel: 'Learn more',
  },
  {
    imgSrc: '/service.png',
    title: 'Personal care support',
    description:
      'At GSS our personal care supports relate to assistance with daily personal activities including assistance with or supervision of, personal tasks of daily life',
    link: '/',
    btnLabel: 'Learn more',
  },
  {
    imgSrc: '/service.png',
    title: 'Personal care support',
    description:
      'At GSS our personal care supports relate to assistance with daily personal activities including assistance with or supervision of, personal tasks of daily life',
    link: '/',
    btnLabel: 'Learn more',
  },
  {
    imgSrc: '/service.png',
    title: 'Personal care support',
    description:
      'At GSS our personal care supports relate to assistance with daily personal activities including assistance with or supervision of, personal tasks of daily life',
    link: '/',
    btnLabel: 'Learn more',
  },
  {
    imgSrc: '/service.png',
    title: 'Personal care support',
    description:
      'At GSS our personal care supports relate to assistance with daily personal activities including assistance with or supervision of, personal tasks of daily life',
    link: '/',
    btnLabel: 'Learn more',
  },
  {
    imgSrc: '/service.png',
    title: 'Personal care support',
    description:
      'At GSS our personal care supports relate to assistance with daily personal activities including assistance with or supervision of, personal tasks of daily life',
    link: '/',
    btnLabel: 'Learn more',
  },
  {
    imgSrc: '/service.png',
    title: 'Personal care support',
    description:
      'At GSS our personal care supports relate to assistance with daily personal activities including assistance with or supervision of, personal tasks of daily life',
    link: '/',
    btnLabel: 'Learn more',
  },
];
type serviceObj = {
  title: string;
  slug: string;
  description: string;
  image: string;
  btnLabel?: string;
};
const OurServices = ({
  serviceTitle,
  serviceArray,
}: {
  serviceTitle: string;
  serviceArray: Array<serviceObj>;
}) => {
  return (
    <section className="mainGrid">
      <div className="content">
        <div className={style.container}>
          <h1>{serviceTitle}</h1>
          <div className={style.cardContainer}>
            {serviceArray.map((service) => (
              <ServiceCard
                imgSrc={service.image}
                title={service.title.replace('&#038;', '&')}
                description={service.description}
                link={`/services/${service.slug}`}
                btnLabel={service.btnLabel ?? 'Learn More'}
                key={service.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
