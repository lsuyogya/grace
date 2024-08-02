import Banner from '../_components/Banner';
import ContactSection from '../_components/ContactSection';

const page = () => {
  return (
    <>
      <Banner
        imgUrl="/banner3.jfif"
        overlayTitle="Contact Us"
      />
      <ContactSection
        title="Get in Touch"
        phone="(505) 555-0125"
        email="gracesupport@service.com"
        address="3891 Ranchview Dr. Richardson, California 62639"
        purple={false}
      />
    </>
  );
};

export default page;
