/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        wave1: "url('../src/assets/images/background_wave1.svg')",
        wave2: "url('../src/assets/images/background_wave2.svg')",
      },
      colors: {
        brightgrey: '#ededed',
        oceanblue: '#0147FF',
        eerieblack: '#1D1D1B',
        signalblack: '#282828',
        whiteSmoke: '#f7f7f7',
      },
      fontFamily: {
        bebas_neue: ['BebasNeue', 'sans-serif'],
        khula: ['Khula', 'sans-serif'],
        open_sans: ['OpenSans', 'sans-serif'],
        roboto_condensed: ['RobotoCondensed', 'sans-serif'],
        roboto_flex: ['RobotoFlex', 'sans-serif'],
      },
      fontSize: {
        xl: [
          '2.5rem',
          {
            lineHeight: '1.2',
          },
        ],
        xxl: [
          '4.75rem',
          {
            lineHeight: '1.1',
          },
        ],
      },
      margin: {
        sm: '1.5rem',
      },
      maxWidth: {
        xl: '1200px',
        xxl: '1300px',
      },
      padding: {
        sm: '1.5rem',
      },
      screens: {
        sm: { max: '600px' },
        xl: { min: '1200px' },
      },
    },
  },
  plugins: [],
};
