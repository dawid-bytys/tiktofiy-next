import Link from 'next/link';
import { FiSettings, FiHome } from 'react-icons/fi';
import { RiPaletteLine } from 'react-icons/ri';

import { useThemeWindow } from '../../hooks/useThemeWindow';

const links = [
  { icon: FiHome, href: '/' },
  { icon: FiSettings, href: '/settings' },
];

const Navigation = () => {
  const { toggleThemeWindow } = useThemeWindow();

  return (
    <nav className="flex items-center justify-center">
      <ul className="flex flex-row justify-between gap-2 sm:gap-3">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href}>
              <a className="block p-2 sm:p-3">
                <link.icon className="w-3 h-3 sm:w-5 sm:h-5" />
              </a>
            </Link>
          </li>
        ))}
        <li>
          <button className="p-2 sm:p-3" onClick={() => toggleThemeWindow(true)}>
            <RiPaletteLine className="w-3 h-3 sm:w-5 sm:h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
