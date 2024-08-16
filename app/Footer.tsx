'use client';
import style from '@/app/_styles/footer.module.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Codeilo from './_components/icons/Codeilo';

const Footer = ({
  socialIcons,
  bannerImg,
  bannerTxt,
}: {
  socialIcons: Array<{ link: string; iconPath: string }>;
  bannerImg: string;
  bannerTxt: string;
}) => {
  type menuItem = { path: string; label: string };
  // const socialIcons = [
  //   { link: '/', iconPath: '/icons/x_logo.svg.svg' },
  //   { link: '/', iconPath: '/icons/instagram_logo.svg.svg' },
  //   { link: '/', iconPath: '/icons/tiktok_logo.svg.svg' },
  //   { link: '/', iconPath: '/icons/facebook_logo.svg.svg' },
  //   { link: '/', iconPath: '/icons/threads_logo.svg.svg' },
  // ];
  const pathname = usePathname();
  const FooterMenu: Array<menuItem> = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about-us', label: 'About Us' },
    { path: '/contact-us', label: 'Contact Us' },
  ];
  return (
    <footer className={`${style.footer} fullWidth mainGrid`}>
      <div className="content">
        {/* <div
          className={`${style.topSection} flex justify-between place-content-center`}
        >
          <Image
            src={"/GSSLogo.svg"}
            width={120}
            height={64}
            alt=""
            className="h-auto"
          />
          <nav>
            <ul>
              {FooterMenu.map((menu: menuItem) => (
                <li key={menu.path}>
                  <Link
                    href={menu.path}
                    className={`${
                      pathname == menu.path ? style.active : ""
                    } uppercase text-black text-base`}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Image
            src={"/nids.png"}
            width={128}
            height={128 / 2}
            alt=""
            className="h-auto"
            style={{ aspectRatio: "2" }}
          />
        </div> */}
        <div className={style.topSectionAlt}>
          <Image
            src={bannerImg}
            alt=""
            width={200}
            height={100}
          />
          <p>{bannerTxt}</p>
        </div>
        {/* <div className={`${style.middleSection}`}>
          <h3 className="text-lg">Connect with us</h3>
          <ul className={`${style.socialArray}`}>
            {socialIcons.map((social, index) => {
              return (
                <li key={index}>
                  <Link
                    href={social.link}
                    target="_blank">
                    <Image
                      src={social.iconPath}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div> */}
        <hr className={style.dividerLine}></hr>
        <div
          className={`${style.bottomSection} flex justify-between flex-wrap`}
          style={{ color: '#3E3E3E' }}>
          <p className="place-items-center place-content-center">
            Copyright © Grace Support Service 2024. All rights reserved.{' '}
            <Link
              href={'/privacy-policy'}
              className="privacyPolicy">
              | Privacy Policy
            </Link>
          </p>
          <p className="flex place-items-center gap-2">
            Crafted by: <Codeilo />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
