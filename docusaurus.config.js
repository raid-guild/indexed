module.exports = {
	title: 'indexed.wtf',
	tagline:
		'A collectively built hub for comparison between "Layer 2" solutions',
	url: 'https://indexed.wtf',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/raidguild__icon.png',
	organizationName: 'raid-guild', // GitHub org name.
	projectName: 'indexed', // Usually your repo name.
	themeConfig: {
		image: 'static/img/raidguild__icon.png',
		colorMode: {
			defaultMode: 'light',
			disableSwitch: false,
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
		},
		footer: {
			style: 'light',
			// logo: {
			//   alt: 'Owocki Icon',
			//   src: '/img/kevin.png',
			// },

			copyright: `indexed.wtf is a collectively built hub for indexing scaling solutions for Ethereum. Everyone is welcome to collaborate, currently via this <a href="https://docs.google.com/forms/d/e/1FAIpQLScbMNeGoQEOrvuuvrk6xaZvdE2PzKiALAMcZ14v48ARS4fIHg/viewform" target="#">form</a>.
      </br>
      Bootstrapped by <a class="ow-link" href="https://twitter.com/owocki" target="#">Owocki</a> via <a class="rg-link" href="https://raidguild.org" target="#">raidguild.org</a>
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
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
					disableDarkMode: true,
				},
			},
		],
	],
}
