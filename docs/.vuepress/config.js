module.exports = {
  title: "Raaabbit's Blog",
  description: 'Document library',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/nprogress', '@vuepress/back-to-top'],
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: '主页', link: '/' },
      { text: 'GITHUB', link: 'https://github.com/Raaabbit' },
      { text: '掘金', link:'https://juejin.im/user/5ad73de5f265da502c218493'}
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
          '/HTML/文档头部与元数据.md',
          '/HTML/你所不知道的HTML5——语音合成/',
          '/HTML/你所不知道的HTML5——Audio API/'
        ]
      },
      {
        title: 'CSS',
        children: [
          '/CSS/CSS基本语法/',
          '/CSS/CSS选择器/',
          '/CSS/CSS盒子模型/',
          '/CSS/浮动与清除浮动/',
          '/CSS/实用的垂直、水平、垂直水平居中方案/'
        ]
      },
      {
        title: 'JS',
        children: [
          '/JS/变量声明var与let与const.md',
          '/JS/箭头函数.md',
          '/JS/参数收集与数组展开.md',
          '/JS/JS的执行顺序.md',
          '/JS/ES6计算属性名-代码优化利器.md',
          '/JS/初见函数式编程.md',
          '/JS/JS的柯里化与偏应用.md'
        ]
      },
      {
        title: 'DOM',
        children: [
          '/DOM/DOM章节预览.md',
          '/DOM/节点操作/节点操作——获取节点.md',
          '/DOM/节点操作/节点操作——增删查改.md'
        ]
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
          '/Docker/理解Docker/',
          '/Docker/运行Docker/'
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
        title: '后端与数据库',
        children: [
        ]
      },
    ]
  }
}