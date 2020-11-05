module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      'esm': '360px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    boxShadow: {
      xlwhite: '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
      xlorange: '0 20px 25px -5px rgba(221, 107, 32, 0.1), 0 10px 10px -5px rgba(221, 107, 32, 0.04)'
    },
    extend: {
      colors: {
        start: '#6F2232',
        middle: '#950740',
        last: '#C3073F',
        lightblack: '#30302f',
        midblack: '#292928',
        deepblack: '#1f1f1e',
        trans: 'rgba(0,0,0,0.7)',
      },
      
      fontFamily: {
        asap: ['Asap'],
        dancingscript: ['Dancing+Script'],
        yellowtail: ['Yellowtail'],
        comfortaa: ['Comfortaa'],
        josephinsans: ['Josefin+Sans'],
      },
    },
  },
  variants: {
    letterSpacing: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    gradientColorStops: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
