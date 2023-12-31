/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      15: '0.15',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    fontFamily: {
      primaryBlack: ['Poppins Black', 'sans-serif'],
      primaryRegular: ['Poppins Regular', 'sans-serif'],
      primaryRegularItalic: ['Poppins Italic', 'sans-serif'],
      primaryBold: ['Poppins Bold', 'sans-serif'],
      primaryBoldItalic: ['Poppins Bold Italic', 'sans-serif'],
      primaryExtraLight: ['Poppins ExtraLight', 'sans-serif'],
      primaryExtraLightItalic: ['Poppins ExtraLight Italic', 'sans-serif'],
      primaryExtraBold: ['Poppins ExtraBold', 'sans-serif'],
      primaryExtraBoldItalic: ['Poppins ExtraBold Italic', 'sans-serif'],
      primaryLight: ['Poppins Light', 'sans-serif'],
      primaryLightItalic: ['Poppins Light Italic', 'sans-serif'],
      primaryMedium: ['Poppins Medium', 'sans-serif'],
      primaryMediumItalic: ['Poppins Medium Italic', 'sans-serif'],
      primarySemiBold: ['Poppins SemiBold', 'sans-serif'],
      primarySemiBoldItalic: ['Poppins SemiBold Italic', 'sans-serif'],
      primaryThin: ['Poppins Thin', 'sans-serif'],
      primaryThinItalic: ['Poppins Thin Italic', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: '#00BA85',
        100: '#00BA85',
        200: '#07AD80',
        300: '#0DA17B',
        400: '#149475',
        500: '#1B8770',
        600: '#217B6B',
        700: '#286E66',
        800: '#2F6160',
        900: '#35555B',
      },
      secondary: {
        DEFAULT: '#FFFFFF',
        100: '#FFFFFF',
        200: '#F4F5F6',
        300: '#EBEDEF',
        400: '#D8DCE0',
        500: '#9DA7B1',
        600: '#8A95A2',
        700: '#768392',
        800: '#637283',
        850: '#4F6073',
        900: '#3C4856',
      },
      tertiary: {
        DEFAULT: '#C7AE6F',
        100: '#E8C388',
        200: '#C7AE6F',
        300: '#B8A36C',
        400: '#A89769',
        500: '#998C67',
        600: '#898164',
        700: '#7A7561',
        800: '#6A6A5E',
        900: '#5B5F5C',
      },
      success: {
        DEFAULT: '#00BA85',
        100: '#00BA85',
        200: '#07AD80',
        300: '#0DA17B',
        400: '#149475',
        500: '#1B8770',
        600: '#217B6B',
        700: '#286E66',
        800: '#2F6160',
        900: '#35555B',
      },
      warning: {
        DEFAULT: '#E2B266',
        100: '#E2B266',
        200: '#D0A664',
        300: '#BD9A62',
        400: '#AB8F61',
        500: '#98835F',
        600: '#86775D',
        700: '#736B5B',
        800: '#61605A',
        900: '#4E5458',
      },
      error: {
        DEFAULT: '#ED3453',
        100: '#D93653',
        200: '#C63854',
        300: '#B23B54',
        400: '#9E3D54',
        500: '#8B3F55',
        600: '#774155',
        700: '#634455',
        800: '#504656',
        900: '#3C4856',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography')],
};
