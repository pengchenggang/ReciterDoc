module.exports = {
  base: '/ReciterDoc/',
  dest: './docs',
  title: 'Reciter_资料库',
  description: 'Reciter_资料库 代码合集',
  plugins: ['@vuepress/back-to-top'],

  markdown: {
    lineNumbers: true
  },
  head: [
    // favicon.ico
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/assets/img/logo.png` }]
  ],
  themeConfig: {
    sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    // displayAllHeaders: true, // 默认值：false
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '资料库', link: '/documents/' },
      // { text: 'External', link: 'https://google.com' },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    // sidebar: {
    //   '/test/': genSidebarConfig('前端开发规范'),
    // }
    // sidebar: 'auto'
    sidebar: {
      '/documents/': getDocuments('文档资料')
      // '/': ['']
    }
  }
}

function getDocuments (title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'ES6Loop',
      'ES6HundredQuestions',
      'Markdown'
    ]
  }]
}

// function genSidebarConfig (title) {
//   return [{
//     title,
//     collapsable: false,
//     children: [
//       '',
//       'html-standard',
//       'css-standard',
//       'js-standard',
//       'git-standard'
//     ]
//   }]
// }