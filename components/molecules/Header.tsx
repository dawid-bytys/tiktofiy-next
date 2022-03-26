import Logo from '../../assets/svg/logo.svg';
import Navigation from '../organisms/Navigation';

const Header = () => {
  return (
    <header className="flex flex-col py-5 md:py-7 items-center justify-between gap-3">
      <div className="flex flex-row">
        <div className="flex items-center justify-center w-7 sm:w-14 md:w-16">
          <Logo className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center pl-5 sm:pl-7">
          <h1 className="text-lg sm:text-4xl md:text-5xl font-medium">Tiktofiy!</h1>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
