'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './_styles/header.module.scss';
import useWindowWidth from './hooks/useWindowWidth';
import { useRef } from 'react';
import useScrollPosition from './hooks/useScrollPosition';

const Header = ({
  socialIcons,
}: {
  socialIcons: Array<{ link: string; iconPath: string }>;
}) => {
  type menuItem = { path: string; label: string };
  const pathname = usePathname();
  const windowWidth = useWindowWidth() ?? 0;
  const { x: scrollX, y: scrollY, yVh: scrollYVh } = useScrollPosition();
  const headerMenu: Array<menuItem> = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about-us', label: 'About Us' },
    { path: '/contact-us', label: 'Contact Us' },
  ];
  const mobileMenu = useRef<HTMLDivElement>(null);
  const mobileMenuBtn = useRef<HTMLButtonElement>(null);

  return (
    <header
      className={`bg-white fullWidth mainGrid ${
        scrollYVh > 40 ? 'header-shadow' : ''
      }`}>
      {/* <Link href="#main">
        <button id="skipToMainContent"> Skip to main content </button>
      </Link> */}
      <div className="content flex justify-between">
        <Link href="/">
          <Image
            alt="Grace Support Services"
            src={'/gsslogo.png'}
            width="150"
            height="64"
            className="h-auto"
          />
        </Link>
        {windowWidth >= 1000 ? (
          <nav className={style.nav}>
            <ul>
              {headerMenu.map((menu: menuItem) => (
                <li key={menu.path}>
                  <Link
                    href={menu.path}
                    className={`${
                      pathname == menu.path ? style.active : ''
                    } uppercase text-black text-base`}>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <>
            <button
              ref={mobileMenuBtn}
              onClick={() => {
                mobileMenu.current?.toggleAttribute('data-open');
                mobileMenuBtn.current?.toggleAttribute('data-open');
              }}
              className={style.hamburgerButton}>
              <div className={style.hamburgerLine1}></div>
              <div className={style.hamburgerLine2}></div>
              <div className={style.hamburgerLine3}></div>
            </button>
            <div
              ref={mobileMenu}
              className={style.mobileNav}>
              <nav className={'hamburgerMenu'}>
                <ul>
                  {headerMenu.map((menu: menuItem) => (
                    <li key={menu.path}>
                      <Link
                        href={menu.path}
                        className={`${
                          pathname == menu.path ? style.active : ''
                        } uppercase text-black text-base`}>
                        {menu.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={style.social}>
                <h3>Connect with us</h3>
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
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
