module.exports = {
  base: '/ReciterDoc/',
  dest: './docs',
  title: 'Reciter_资料库',
  description: 'Reciter_资料库 代码合集',
  plugins: ['@vuepress/back-to-top',
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['@vuepress/medium-zoom', {
      selector: 'div.content__default img',
      options: {
        background: 'rgba(25, 18, 25, 0.9)', // rgba(25, 18, 25, 0.9),
      }
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 30
    }]
  ],
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@base': 'ReciterDoc/'
  //     }
  //   }
  // },
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
      { text: '英语库', link: '/English/' },
      { text: 'GitHub', link: 'https://github.com/pengchenggang/ReciterDoc' },
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
      '/documents/': getDocuments('文档资料'),
      '/English/': getEnglish('EnglishWord')
      // '/': ['']
    }
  }
}
function getEnglish (title) {
  return [{
    title,
    collapsable: false,
    children: [
      ''
    ]
  }]
}
function getDocuments (title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'ES6Loop',
      'ES6HundredQuestions',
      'JavaHundredQuestions',
      'MysqlHundredQuestions',
      'VueHundredQuestions',
      'FormZen',
      'CommonComponents',
      'GitHubExplore',
      'IVIEWComponents',
      'Markdown',
      'Cnblogs',
      'Cnblogs2',
      'Cnblogs3',
      'Cnblogs4'
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