import style from '@/app/_styles/ourServices.module.scss';
import ServiceCard from './ServiceCard';
import Link from 'next/link';

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
];

const MiniServices = () => {
  return (
    <section className="mainGrid">
      <div className="content">
        <div className={style.container}>
          <div className="flex flex-wrap justify-between">
            <h1>Our Services</h1>
            <Link href="/services">
              <button className="btnPrimaryInverted">View All</button>
            </Link>
          </div>
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
    </section>
  );
};

export default MiniServices;
