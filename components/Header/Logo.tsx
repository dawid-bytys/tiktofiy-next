import LogoImage from 'assets/svg/logo.svg';

export const Logo = () => {
  return (
    <div className="flex flex-row justify-center">
      <LogoImage className="fill-primary h-auto w-12 sm:w-14 md:w-16" />
      <h1 className="text-lg text-4xl md:text-5xl font-medium my-auto ml-8">Tiktofiy!</h1>
    </div>
  );
};
