module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EFFBF0',
          500: '#00C614'
        },
        neutral: {
          100: '#F9F9FA',
          200: '#F2F2F3',
          300: '#E5E5E6',
          400: '#D2D2D5',
          500: '#B2B2B6',
          600: '#88898E',
          700: '#6B6C72',
          900: '#3E3F48'
        },
        success: {
          100: '#F1FDF6',
          200: '#E8F7EE',
          300: '#82DDA5',
          500: '#44C776'
        },
        error: {
          100: '#FBEFF0',
          500: '#F52828'
        },
        warning: {
          100: '#FDF4ED',
          500: '#F58A28',
          600: '#F58829',
          700: '#E3920F'
        },
        white: '#fff'
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Arial',
          'Helvetica Neue',
          'sans-serif'
        ]
      },
      screens: {
        xs: '390px',
        sm: '640px',
        md: '800px'
      },
      boxShadow: {
        nav: '0px -4px 2px rgba(0, 0, 0, 0.09)',
        'nav-item': '0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)',
        card: ' 0px 5px 4px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
