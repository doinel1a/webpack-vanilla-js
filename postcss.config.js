process.env.NODE_ENV === 'production'
    ? (module.exports = {
          plugins: [
              require('cssnano'),
              require('postcss-preset-env'),
              require('tailwindcss'),
          ],
      })
    : (module.exports = {
          plugins: [require('postcss-preset-env'), require('tailwindcss')],
      });
