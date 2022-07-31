module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
      },
      colors: {
        foreground: 'var(--color-foreground)',
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        input: 'var(--color-input)',
        sub: 'var(--color-sub)',
        subactive: 'var(--color-sub-active)',
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
