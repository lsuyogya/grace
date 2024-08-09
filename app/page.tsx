'use server';

import Banner from './_components/Banner';
import ImgTxt from './_components/ImgTxt';
import ListSection from './_components/ListSection';
import OurServices from './_components/OurServices';
import ClientTestimonials from './_components/ClientTestimonials';
import ContactSection from './_components/ContactSection';

// async function getData() {
//   const res = await fetch(`${process.env.baseUrl}/homepage`);
// const res = await fetch(`${process.env.baseUrl}/mockHomepage`);
async function getData() {
  const res = await fetch(`${process.env.baseUrl}/homepage`);
  // const res = await fetch(`${process.env.baseUrl}/mockHomepage`);

  if (!res.ok) {
    throw new Error('Fetching Failed');
  }
  const data = res.json();
  return data;
}

export default async function Home() {
  const data = await getData();
  // const localhostReplacement = process.env.localhostIp;
  // console.log(data);
  // const replacelocalHost = (url: string) => {
  //   return url.replace('localhost', localhostReplacement as string);
  // };
  // const data = await getData();
  // console.log(data);
  return (
    <>
      <Banner
        imgAlt="Banner"
        // imgUrl={replacelocalHost(data.banner_image)}
        imgUrl={data.banner_image}
        overlayTitle={data.banner_title}
        overlayTxt={data.banner_description}
        getSupport={true}
      />
      <ImgTxt
        // imgSrc={replacelocalHost(data.about_image)}
        imgSrc={data.about_image}
        title={data.about_title}
        desc={data.about_description}
        readmoreLink="/about-us"
        ndisIconSrc="/nids.png"
      />
      <ListSection
        // imgSrc={replacelocalHost(data.why_grace_image)}
        imgSrc={data.why_grace_image}
        title={data.why_grace_title}
        btnLabel="Get Support"
        btnLink="/"
        listArray={data.why_grace_desc}
      />
      <OurServices
        serviceTitle={data.services_title}
        serviceArray={data.services_lists}
      />
      <ClientTestimonials
        title={data.testimonial_title}
        btnLink={data.testimonial_btn_url}
        btnTxt={data.testimonial_btn_text}
        testimonialList={data.testimonial_lists}
      />
      <ContactSection
        title={data.contact_title}
        address={data.address}
        phone={data.phone}
        email={data.email}
        mapSrc={data.map_url}
      />
    </>
  );
}
