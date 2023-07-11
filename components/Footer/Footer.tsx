import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="text-sm pb-8 pt-16 md:pt-24 text-subactive">
      <div className="w-fit mx-auto flex items-center">
        <BsGithub className="w-6 h-6 fill-sub" />
        <Link
          href="https://github.com/dawid-bytys/tiktofiy-next"
          aria-label="Go to the GitHub repository"
        >
          <a
            className="ml-4 text-center"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">GitHub repository</span>
            dawid-bytys/tiktofiy-next
          </a>
        </Link>
      </div>
    </footer>
  );
};
