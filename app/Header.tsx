'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './_styles/header.module.scss';

const Header = () => {
  type menuItem = { path: string; label: string };
  const pathname = usePathname();
  const headerMenu: Array<menuItem> = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about-us', label: 'About Us' },
    { path: '/contact-us', label: 'Contact Us' },
  ];
  return (
    <header className="bg-white fullWidth mainGrid">
      <div className="content flex justify-between">
        <Image
          alt="Grace Support Services"
          src={'/gsslogo.png'}
          width="150"
          height="64"
          className="h-auto"
        />

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
      </div>
    </header>
  );
};

export default Header;
