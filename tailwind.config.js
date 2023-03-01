module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
              opacity: '0',
          },
          '100%': {
              opacity: '1',
          }
        },
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-30px)'

            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-down': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-up': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        },
        'float-left-right': {
          '0%': {
            transform: 'translateX(-170px)'
          },
          '50%': {
            transform: 'translateX(10px)'
          },
          '100%': {
            transform: 'translateX(-170px)'
          }
        },
        'float-right-left': {
          '0%': {
            transform: 'translateX(170px)'
          },
          '50%': {
            transform: 'translateX(-10px)'
          },
          '100%': {
            transform: 'translateX(170px)'
          }
        },
      },
      animation: {
          'fade-in': 'fade-in 3s ease-out',
          'fade-in-down': 'fade-in-down 2s ease-out',
          'fade-out-down': 'fade-out-down 1s ease-out',
          'fade-in-up': 'fade-in-up 1s ease-out',
          'fade-out-up': 'fade-out-up 1s ease-out',
          'float-left-right': 'float-left-right 30s ease-in-out infinite',
          'float-right-left': 'float-right-left 30s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
