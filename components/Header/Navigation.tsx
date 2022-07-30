import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FiSettings, FiHome } from 'react-icons/fi';
import { MdAudiotrack } from 'react-icons/md';
import { RiPaletteLine } from 'react-icons/ri';
import { useThemeWindowContext } from 'hooks/useThemeWindowContext';

const LINKS = [
  {
    icon: FiHome,
    ariaLabel: 'Go to the home page',
    href: '/',
  },
  {
    icon: FiSettings,
    ariaLabel: 'Go to the settings page',
    href: '/settings',
  },
  {
    icon: MdAudiotrack,
    ariaLabel: 'Go the songs page',
    href: '/songs',
  },
];

export const Navigation = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex flex-row">
        {LINKS.map(link => (
          <li key={link.href}>
            <Link href={link.href}>
              <a
                aria-label={link.ariaLabel}
                referrerPolicy="no-referrer"
                rel="noreferrer noopener"
                className="flex items-center justify-center p-3"
              >
                <span className="sr-only">{link.ariaLabel}</span>
                <link.icon
                  className={`w-6 h-6 transition-colors duration-200 ease-in-out ${
                    router.pathname === link.href ? 'text-subactive' : 'text-sub'
                  }`}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
