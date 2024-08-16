'use server';
import Header from './Header';
import Footer from './Footer';

const getSocial = async () => {
  const res = await fetch(`${process.env.baseUrl}/social_links`);
  if (!res.ok) throw new Error('Fetch failed');
  return res.json();
};
const getFooter = async () => {
  const res = await fetch(`${process.env.baseUrl}/footer`);
  if (!res.ok) throw new Error('Fetch failed');
  return res.json();
};

const LayoutServerComp = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const social = await getSocial();
  const footerData = await getFooter();
  const socialIcons = [
    // { link: `${social.x ?? "/"}`, iconPath: "/icons/x_logo.svg.svg" },
    // {
    //   link: `${social.instagram ?? "/"}`,
    //   iconPath: "/icons/instagram_logo.svg.svg",
    // },
    // { link: `${social.tiktok ?? "/"}`, iconPath: "/icons/tiktok_logo.svg.svg" },
    {
      link: `${social.facebook ?? '/'}`,
      iconPath: '/icons/facebook_logo.svg.svg',
    },
    // {
    //   link: `${social.threads ?? "/"}`,
    //   iconPath: "/icons/threads_logo.svg.svg",
    // },
  ];
  // console.log(social);
  return (
    <>
      <Header socialIcons={socialIcons} />
      <main
        className="fullWidth"
        id="main">
        {children}
      </main>
      <Footer
        socialIcons={socialIcons}
        bannerImg={footerData.footer_image}
        bannerTxt={footerData.footer_desc}
      />
    </>
  );
};

export default LayoutServerComp;
