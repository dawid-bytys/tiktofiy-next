module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robotomonoregular: 'RobotoMono-Regular, monospace',
        robotomonomedium: 'RobotoMono-Medium, monospace',
      },
      colors: {
        foreground: 'var(--color-foreground)',
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        input: 'var(--color-input)',
        sub: 'var(--color-sub)',
        subactive: 'var(--color-sub-active)',
      },
      spacing: {
        144: '36rem',
        196: '49rem',
      },
    },
    screens: {
      xsm: '20rem',
      sm: '28rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem',
    },
  },
  plugins: [],
};
