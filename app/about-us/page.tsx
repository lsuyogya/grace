'use server';
import Banner from '../_components/Banner';
import ClientTestimonials from '../_components/ClientTestimonials';
import ImgTxt from '../_components/ImgTxt';
import ListSection from '../_components/ListSection';
import MiniServices from '../_components/MiniServices';

async function getData() {
  const res = await fetch(`${process.env.baseUrl}/about`, {
    cache: 'reload',
  });
  if (!res.ok) {
    throw new Error('Fetch Failed');
  }
  return res.json();
}
export default async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <Banner
        imgUrl={data.banner_image}
        overlayTitle={data.banner_title}
      />
      <ImgTxt
        imgSrc={data.about_image}
        title={data.about_title}
        desc={data.about_description}
        ndisIconSrc="/nids.png"
      />
      <ListSection
        imgSrc={data.why_grace_image}
        title={data.why_grace_title}
        btnLabel="Get Support"
        btnLink="/"
        listArray={data.why_grace_desc}
      />
      <ClientTestimonials
        title={data.testimonial_title}
        btnLink={data.testimonial_btn_url}
        btnTxt={data.testimonial_btn_text}
        testimonialList={data.testimonial_lists}
      />
      <MiniServices
        serviceTitle={data.services_title}
        serviceList={data.services_lists}
      />
    </>
  );
}

// export default Page;
