import Logo from '../../assets/svg/logo.svg';
import Navigation from '../organisms/Navigation';

const Header = () => {
  return (
    <header className="flex flex-col py-5 md:py-7 xl:py-11 items-center justify-between gap-3">
      <div className="flex flex-row justify-between gap-5 sm:gap-7 xl:gap-10">
        <div className="flex items-center justify-center w-7 sm:w-14 md:w-16 xl:w-20">
          <Logo className="w-full h-full fill-primary" />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-lg sm:text-4xl md:text-5xl xl:text-6xl font-medium">Tiktofiy!</h1>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
