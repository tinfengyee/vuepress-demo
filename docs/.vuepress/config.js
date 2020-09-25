module.exports = ctx => ({
  base: '/vuepress-demo/',
  title: 'Tinf - 天枫前端',
  description: 'Just playing around',
  dest: 'dist',
  smoothScroll: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: 'Last Updated', // string | boolean
    navbar: true,
    nav: [
      { text: 'Article', link: '/article/' },
      { text: 'Interview', link: '/interview/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Contact',
        items: [
          { text: 'bilibili', link: 'https://space.bilibili.com/12445328' }
        ]
      },
      { text: 'Github', link: 'https://github.com/tinfengyee' },
    ],
    sidebarDepth: 1,
    sidebar: {
      '/interview/': [
        '',
        {
          title: 'javascript',
          children: [
            'javascript/javascript'
          ]
        },
        {
          title: 'vue',
          children: [
            'vue/vue'
          ]
        },
        {
          title: 'h5c3',
          children: [
            'h5c3/h5c3'
          ]
        }
      ],
      '/article/': [
        '',
        {
          title: 'javascript',
          children: [
            'javascript/javascript',
            'javascript/webapi',
          ]
        },
        {
          title: 'vue',
          children: [
            'vue/vue'
          ]
        }
      ],
      '/guide/': [
        ''
      ]
    }
  }
})

