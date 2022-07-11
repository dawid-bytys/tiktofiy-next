import LogoImage from 'assets/svg/logo.svg';

export const Logo = () => {
  return (
    <div className="flex flex-row">
      <div className="flex items-center justify-center w-7 xsm:w-14 md:w-16">
        <LogoImage className="w-full h-full fill-primary" />
      </div>
      <div className="flex items-center justify-center ml-8">
        <h1 className="text-lg xsm:text-4xl md:text-5xl font-robotomonomedium">Tiktofiy!</h1>
      </div>
    </div>
  );
};
