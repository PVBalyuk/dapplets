/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        '10px': '10px',
        '11px': '11px',
        '30px': '30px',
        '360px': '360px',
      },
      padding: {
        '2px': '2px',
        '3px': '3px',
        '77px': '77px',
        '86px': '86px',
        '87px': '87px',
      },
      borderWidth: {
        '1px': '1px',
        '2px': '2px'
      },
      backgroundImage: {
        'gradient-left-bar': 'linear-gradient(180deg, rgba(185, 251, 255, 0.2) 0%, rgba(227, 220, 255, 0.2) 100%)',
        'background-image': 'url(src/assets/BG.svg)'
      },
      colors: {
        'left-bar-from': 'rgba(185, 251, 255, 0.2) 0%',
        'left-bar-to': 'rgba(227, 220, 255, 0.2) 100%',
        '2A2A2A': 'rgb(42 42 42)',
        '50140': 'rgb(197 1 64)',
        '565555': 'rgb(86,85,85)',
        '0085FF': 'rgb(0,133,255)',
        '999999': 'rgb(153,153,153)',
        'BBBBBB': 'rgb(187,187,187)',
        '62BD6B': 'rgb(98,189,107)',
      },
      maxWidth: {
        '290px': '290px',
        '320px': '320px',
        '360px': '360px',
      },
      gap: {
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
      },
      height: {
        '14px': '14px',
        '19px': '19px',
        '40px': '40px',
        '54px': '54px',
        '56px': '56px',
      },
      margin: {
        '11px': '11px',
        '70px': '70px',
        '76px': '76px',
      },
      textDecorationColor: {
        '0085FF':'rgb(0,133,255)'
      },
      fontSize: {
        tag: ['10px']
      },
      boxShadow: {
        'input-shadow': '10px 10px 40px rgba(156, 185, 222, 0.36)',
      },
      borderRadius: {
        '10px': '10px'
      },
      width: {
        '83px': '83px'
      },
      flexGrow: {
        '2': '2'
      }
    },
  },
  plugins: [],
}
