/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        'main-layout': '320px minmax(1600px, 1fr)'
      },
      gridTemplateRows: {
        'main-rows': '1fr minmax(80px, 100px)'
      }
    },
    maxWidth: {
      '1920': '1920px'
    }
  },
  variants: {},
  plugins: []
}
