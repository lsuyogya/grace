'use server';
import Banner from '../_components/Banner';
import ContactSection from '../_components/ContactSection';
import OurServices from '../_components/OurServices';

const getData = async () => {
  const res = await fetch(`${process.env.baseUrl}/services`);
  if (!res.ok) {
    throw new Error('Fetch failed');
  }
  return res.json();
};

const Services = async () => {
  const data = await getData();
  // console.log(data);

  return (
    <>
      <Banner
        imgUrl={data.banner_image}
        overlayTitle={data.banner_title}
        overlayTxt={data.banner_description}
      />
      <OurServices
        serviceTitle={data.services_title}
        serviceArray={data.services_lists}
      />
      <ContactSection
        title={data.contact_title}
        phone={data.phone}
        email={data.email}
        address={data.address}
        mapSrc={data.map_url}
      />
    </>
  );
};

export default Services;
