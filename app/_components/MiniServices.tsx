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
type serviceObj = {
  title: string;
  slug: string;
  description: string;
  image: string;
  btnLabel?: string;
};
const MiniServices = ({
  serviceTitle,
  serviceList,
}: {
  serviceTitle: string;
  serviceList: serviceObj[];
}) => {
  return (
    <section className="mainGrid">
      <div className="content">
        <div className={style.container}>
          <div className="flex flex-wrap justify-between">
            <h1>{serviceTitle}</h1>
            <Link href="/services">
              <button className="btnPrimaryInverted">View All</button>
            </Link>
          </div>
          <div className={style.cardContainer}>
            {serviceList.map((service) => (
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

export default MiniServices;
