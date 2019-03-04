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
          '/CSS/CSS选择器/',
          '/CSS/实用的垂直、水平、垂直水平居中方案/'
        ]
      },
      {
        title: 'JS',
        children: [
          '/JS/变量声明var与let与const.md',
          '/JS/箭头函数.md',
          '/JS/JS的执行顺序.md',
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
        children: [ 
          '/前端优化/从HTTP请求入手.md',
          '/前端优化/回流和重绘.md',
          '/前端优化/好用的documentFragment.md',
          '/前端优化/为什么在head中引入CSS.md'
        ]
      },
      {
        title: '数据结构与算法',
        children: [ 
          '/数据结构与算法/数据结构与算法？/',
          '/数据结构与算法/算法的度量标准/'
        ]
      },
      {
        title: '折腾',
        children: [
          '/折腾/Linux发行版Manjaro.md',
          '/折腾/macOS软件安利/',
          '/折腾/docker 初体验.md'
        ]
      },
      {
        title: '茶馆',
        children: [ /* ... */]
      }
    ]
  }
}