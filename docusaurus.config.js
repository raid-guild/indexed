module.exports = {
  title: 'indexed.eth',
  tagline: 'A collectively built hub for comparison between "Layer 2" solutions',
  url: 'https://indexed.eth',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/raidguild__icon.png',
  organizationName: 'raid-guild', // GitHub org name.
  projectName: 'indexed', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'indexed.eth',
      style: 'dark',
      items: [
        {
          href: '/docs/contribute-doc',
          label: 'Docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'Owocki Icon',
        src: '/img/kevin.png',
      },

      copyright: `indexed.eth is a collectively built hub for indexing scaling solutions for Ethereum. Everyone is welcome to <a href="/docs/contribute-doc/" target="#">collaborate</a>.
      </br>
      Bootstrapped by <a href="https://twitter.com/owocki" target="#">Owocki</a> via <a href="https://raidguild.org" target="#">raidguild.org</a>
      </br>
      <img class="rg-logo" src="/img/raidguild__avatar.png" alt="Raid Guild Logo" />
      
      `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          disableDarkMode: true
        },
      },
    ],
  ],
};
