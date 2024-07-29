import Banner from './_components/Banner';
import ImgTxt from './_components/ImgTxt';
import ListSection from './_components/ListSection';
import OurServices from './_components/OurServices';
import ClientTestimonials from './_components/ClientTestimonials';

export default function Home() {
  return (
    <>
      <Banner
        imgAlt="Banner"
        imgUrl="/banner1.jfif"
        overlayTitle="Empowering Lives EveryDay"
        overlayTxt="We are a trusted National Disability Insurance Scheme (NDIS) registered service provider working with"
        getSupport={true}
      />
      <ImgTxt
        imgSrc="/team.jpg"
        title="Welcome to Grace"
        desc1stPara="We are a trusted National Disability Insurance Scheme (NDIS) registered service provider working with Support Workers and families to empower and inspire people living with various health and disability needs across different states in Australia."
        desc2ndPara="Our client-based services are centred on knowing and protecting your rights. We partner with like-minded organizations that want to empower people and help those that need extra care get access to the required services. With us, you will feel safe every day, always supported, comfortable, and cared for by well-trained staff and partners who meet all the integrity requirements."
        readmoreLink="/"
        ndisIconSrc="/nids.png"
      />
      <ListSection
        imgSrc="/b2.jfif"
        title="Why Choose Grace Support Service"
        btnLabel="Get Support"
        btnLink="/"
        listArray={[
          'Grace Support Services comprises well-trained professionals.',
          'The team is highly skilled in providing clientele-focused solutions.',
          'The disability services team understands the importance of enhancing wellbeing.',
          "They respect and support clients' choices.",
          'The team upholds the highest standards of integrity and professionalism.',
        ]}
      />
      <OurServices />
      <ClientTestimonials />
    </>
  );
}
