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

const OurServices = () => {
  return (
    <div className="mainGrid">
      <div className="content">
        <div className={style.container}>
          <h1>Our Services</h1>
          <div className={style.cardContainer}>
            {sampleJson.map((service) => (
              <ServiceCard
                imgSrc={service.imgSrc}
                title={service.title}
                description={service.description}
                link={service.link}
                btnLabel={service.btnLabel}
                key={service.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
