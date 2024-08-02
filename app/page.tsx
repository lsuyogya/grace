'use server';

import Banner from './_components/Banner';
import ImgTxt from './_components/ImgTxt';
import ListSection from './_components/ListSection';
import OurServices from './_components/OurServices';
import ClientTestimonials from './_components/ClientTestimonials';
import ContactSection from './_components/ContactSection';

async function getData() {
  const res = await fetch(`${process.env.baseUrl}/homepage`);
  // const res = await fetch(`${process.env.baseUrl}/mockHomepage`);
// async function getData() {
//   // const res = await fetch(`${process.env.baseUrl}/homepage`);
//   const res = await fetch(`${process.env.baseUrl}/mockHomepage`);

//   if (!res.ok) {
//     throw new Error('Fetching Failed');
//   }
//   const weewoo = res.json();
//   return weewoo;
// }

export default async function Home() {
  const data = await getData();
  const localhostReplacement = process.env.localhostIp;
  console.log(data);
  const replacelocalHost = (url: string) => {
    return url.replace('localhost', localhostReplacement as string);
  };
  // const data = await getData();
  // console.log(data);
  return (
    <>
      <Banner
        imgAlt="Banner"
        imgUrl={replacelocalHost(data.banner_image)}
        overlayTitle={data.banner_title}
        overlayTxt={data.banner_description}
        getSupport={true}
      />
      <ImgTxt
        imgSrc={replacelocalHost(data.about_image)}
        title={data.about_title}
        desc1stPara="We are a trusted National Disability Insurance Scheme (NDIS) registered service provider working with Support Workers and families to empower and inspire people living with various health and disability needs across different states in Australia."
        desc2ndPara="Our client-based services are centred on knowing and protecting your rights. We partner with like-minded organizations that want to empower people and help those that need extra care get access to the required services. With us, you will feel safe every day, always supported, comfortable, and cared for by well-trained staff and partners who meet all the integrity requirements."
        readmoreLink="/"
        ndisIconSrc="/nids.png"
      />
      <ListSection
        imgSrc={replacelocalHost(data.why_grace_image)}
        title={data.why_grace_title}
        btnLabel="Get Support"
        btnLink="/"
        listArray={data.why_grace_desc}
      />
      <OurServices serviceTitle={data.services_title} />
      <ClientTestimonials title={data.testimonial_title} />
      <ContactSection
        title={data.contact_title}
        address={data.address}
        phone={data.phone}
        email={data.email}
      />
    </>
  );
}
