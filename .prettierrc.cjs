/** @type {import("@types/prettier").Options} */
module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['.*', '*.json', '*.md', '*.toml', '*.yml', "*.mdx"],
      options: {
        useTabs: false,
      },
    },
  ],
};
