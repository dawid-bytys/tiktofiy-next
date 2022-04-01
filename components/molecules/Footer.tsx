import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-8 text-sm">
      <Link href="https://github.com/salvia-dev/tiktofiy-next" aria-label="Go to Github repository">
        <a className="flex flex-row justify-between gap-4 p-5">
          <div className="flex items-center justify-center">
            <BsGithub className="w-6 h-6 fill-sub" />
          </div>
          <div className="flex items-center justify-center text-subactive text-center">
            salvia-dev/tiktofiy-next
          </div>
        </a>
      </Link>
    </footer>
  );
};
