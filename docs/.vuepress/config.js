module.exports = {
  title: "Raaabbit's Blog",
  description: 'Document library',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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
        children: [
          '/Projects/'
        ]
      },
      {
        title: 'HTML',
        children: [
          '/HTML/HTML第一步-理解HTML.md',
          '/HTML/HTML基本语法.md',
          '/HTML/HTML文档标题/',
          '/HTML/文档头部与元数据.md'
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
          '/JS/参数收集与数组展开.md',
          '/JS/JS的执行顺序.md'
        ]
      },
      {
        title: 'DOM',
        children: [ /* ... */]
      },
      {
        title: 'NodeJS',
        children: [
          '/NodeJS/Webpack/初步理解Webpack原理.md',
          '/NodeJS/超简单的静态网页服务器.md'
        ]
      },
      {
        title: '网络基础',
        children: [
          '/网络基础/WebSockets/',
          '/网络基础/Web安全/XSS.md'
        ]
      },
      {
        title: 'Vue',
        children: [ /* ... */]
      },
      {
        title: 'Docker',
        children: [
          '/Docker/Docker入门.md'
        ]
      },
      {
        title: '前端性能优化',
        children: [ 
          '/前端性能优化/从HTTP请求入手.md',
          '/前端性能优化/回流和重绘.md',
          '/前端性能优化/好用的documentFragment.md',
          '/前端性能优化/为什么在head中引入CSS.md',
          '/前端性能优化/JS异步加载.md'
        ]
      },
      {
        title: '数据结构与算法',
        children: [ 
          '/数据结构与算法/数据结构与算法？/',
          '/数据结构与算法/算法的度量标准/',
          '/数据结构与算法/栈与队列/',
          '/数据结构与算法/二叉树/'
        ]
      },
      {
        title: '折腾',
        children: [
          '/折腾/Linux发行版Manjaro.md',
          '/折腾/macbook 无法加入网络/macbook 无法加入网络.md',
          '/折腾/macOS软件安利/',
          '/折腾/docker 初体验.md'
        ]
      },
      {
        title: '茶馆',
        children: [ 
          '/茶馆/摄影（三月十七日）/'
        ]
      }
    ]
  }
}