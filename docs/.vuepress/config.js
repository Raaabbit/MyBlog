module.exports = {
  title: "Raaabbit's Blog",
  description: 'Document library',
  head: [
    ['link', { rel: 'icon', href: '/favicon .ico' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: '主页', link: '/' },
      { text: 'CSDN', link: 'https://blog.csdn.net/github_39457740' },
      { text: 'GITHUB', link: 'https://www.iyouhun.com' },
    ],
    sidebar: [
      '/',
      {
        title: 'Projects',
        children: [ /* ... */]
      },
      {
        title: 'HTML',
        children: [
          '/HTML/HTML文档标题/'
        ]
      },
      {
        title: 'CSS',
        children: [
          '/CSS/CSS基本语法/',
          '/CSS/CSS选择器/'
        ]
      },
      {
        title: 'JS',
        children: [
          '/JS/WebSockets/'
        ]
      },
      {
        title: 'DOM',
        children: [ /* ... */]
      },
      {
        title: 'Vue',
        children: [ /* ... */]
      },
      {
        title: 'NodeJS',
        children: [ /* ... */]
      },
      {
        title: '前端优化',
        children: [ /* ... */]
      },
      {
        title: '开发环境配置',
        children: [ /* ... */]
      },
      {
        title: '折腾',
        children: [
          '/折腾/macOS软件安利/'
        ]
      },
      {
        title: '茶馆',
        children: [ /* ... */]
      }
    ]
  }
}