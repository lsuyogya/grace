import Banner from '../_components/Banner';
import ContactSection from '../_components/ContactSection';
import OurServices from '../_components/OurServices';

const Services = () => {
  return (
    <>
      <Banner
        imgUrl="/banner2.jfif"
        overlayTitle="Our Services"
        overlayTxt="We support all types of transitions educational, developmental, social, vocational, physical, and emotional."
      />
      <OurServices />
      <ContactSection
        phone="(505) 555-0125"
        email="gracesupport@service.com"
        address="3891 Ranchview Dr. Richardson,
California 62639"
      />
    </>
  );
};

export default Services;
