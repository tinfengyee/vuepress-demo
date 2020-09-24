module.exports = {
  base: '/vuepress-demo/',
  title: 'Tinf - 天枫的blog',
  description: 'Just playing around',
  dest: 'dist',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Article', link: '/article/' },
      { text: 'Github', link: 'https://github.com/tinfengyee' },
    ]
  }
}