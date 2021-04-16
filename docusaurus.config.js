module.exports = {
  title: 'indexed.wtf',
  tagline: 'A collectively built hub for comparison between "Layer 2" solutions',
  url: 'https://indexed.wtf',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/raidguild__icon.png',
  organizationName: 'raid-guild', // GitHub org name.
  projectName: 'indexed', // Usually your repo name.
  themeConfig: {
    image: "static/img/raidguild__icon.png",
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'indexed.wtf',
      items: [
        {
          href: '/docs/contribute-doc',
          label: 'Docs 🔗',
          position: 'right',
        },
      ],
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          disableDarkMode: true
        },
      },
    ],
  ],
};
