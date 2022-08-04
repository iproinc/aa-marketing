module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'san-marino': {
          '50': '#f6f8fa',
          '100': '#edf0f6',
          '200': '#d3dae8',
          '300': '#b8c3da',
          '400': '#8396be',
          '500': '#4E69A2',
          '600': '#465f92',
          '700': '#3b4f7a',
          '800': '#2f3f61',
          '900': '#26334f'
        },
        'mariner': {
          '50': '#f6f8fd',
          '100': '#edf1fb',
          '200': '#d2ddf5',
          '300': '#b6c8ef',
          '400': '#809fe2',
          '500': '#4976D6',
          '600': '#426ac1',
          '700': '#3759a1',
          '800': '#2c4780',
          '900': '#243a69'
        }
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '9': 'repeat(9, minmax(0, 1fr))',
      }
    },
    fontFamily: {
      'sans': ['Inter', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
