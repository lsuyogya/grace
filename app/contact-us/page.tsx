import Banner from '../_components/Banner';
import ContactSection from '../_components/ContactSection';

async function getData() {
  const res = await fetch(`${process.env.baseUrl}/contact`, {
    cache: 'reload',
  });
  if (!res.ok) {
    throw new Error('Fetch Failed');
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <Banner
        imgUrl={data.banner_image}
        overlayTitle={data.banner_title}
      />
      <ContactSection
        title={data.contact_title}
        purple={false}
        phone1={data.phone_1}
        phone2={data.phone_2}
        email={data.email}
        address1={data.address_1}
        address2={data.address_2}
        mapSrc1={data.map_url_1}
        mapSrc2={data.map_url_2}
      />
    </>
  );
};

export default page;
