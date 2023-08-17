import { useState } from 'react';

import { ISiteSettings, ISlug } from '../../_lib/types';
import Image from '../../components/Image';
import Link from 'next/link';

export type IMenuItem = {
  name: string;
  slug: ISlug;
  menuOrder: number;
};

type IMenuProps = {
  items: IMenuItem[];
  _key?: string;
};

const Header = (props: IMenuProps & { settings: ISiteSettings }) => {
  const { items, settings } = props;
  const [navOpen, setNavOpen] = useState(false);

  const renderDesktopNav = () => (
    <nav
  key={props._key}
  className={`fixed top-0 z-40 hidden w-full md:block duration-800 transition delay-300 ease-in-out`}>
  <div className="flex justify-between py-2">
    <Link href="/" className="z-40 flex items-center">
      <Image {...settings.logo} alt={settings.title} className="mx-10 rounded-full max-h-12 w-12 object-contain hover:scale-105" />
    </Link>
    <div className="z-40 hidden md:block" id="navbar-default">
      <ul className="mx-10 my-2 flex">
        {items.map(item => {
          return (
            <li key={item.slug.current}>
            <Link href={'/' + item.slug.current} aria-current="page">
              <span className="block font-extralight px-4 py-2 hover:opacity-50 transition-opacity">
              {item.name.toUpperCase()}
              </span>
            </Link>
          </li>
          );
        })}
      </ul>
    </div>
  </div>
</nav>
  );

  const renderMobileNav = () => (
    <div className="nav z-40 md:hidden">
      <div className="nav-container">
        <div className="navbar absolute z-50">
          <Link href="/" className="z-40 flex items-center">
            <Image {...settings.logo} alt={settings.title} className=" max-h-12 w-12 rounded-full object-contain" />
          </Link>{' '}
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? 'hamBox hamBoxOpen' : 'hamBox'}>
              <span className={navOpen ? `lineTop spin` : `lineTop`}></span>
              <span className={navOpen ? `lineBottom spin` : `lineBottom`}></span>
            </div>
          </div>
        </div>

        <div
          className="nav-overlay absolute z-40 h-full w-full"
          style={{
            top: navOpen ? '0' : '-100%',
            transitionDelay: navOpen ? '0s' : '0s',
          }}>
          <ul className="nav-links">
            {items.map((item, index) => (
              <li className="nav-item" key={item.slug.current}>
                <Link
                  href={'/' + item.slug.current}
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? '0' : '120px',
                    transitionDelay: navOpen ? `${0.8 + index * 0.1}s` : '0s',
                  }}>
                  {item.name}
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {renderDesktopNav()}
      {renderMobileNav()}
    </>
  );
};

export default Header;
