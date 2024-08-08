import Banner from "../_components/Banner";
import ContactSection from "../_components/ContactSection";

async function getData() {
  const res = await fetch(`${process.env.baseUrl}/about`, {
    cache: "reload",
  });
  if (!res.ok) {
    throw new Error("Fetch Failed");
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <Banner imgUrl={data.banner_image} overlayTitle={data.banner_title} />
      <ContactSection
        title={data.contact_title}
        phone={data.phone}
        email={data.email}
        address={data.address}
        purple={false}
      />
    </>
  );
};

export default page;
