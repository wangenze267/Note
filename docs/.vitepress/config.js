const { getChildren } = require("./utils/autoSidebar");
const getDirectory = (ele) => getChildren("./docs", ele);
const nav = [
  { text: "面试基础", link: "/basics/", activeMatch: "/basics/" },
  { text: "前端进阶", link: "/fe_advance/", activeMatch: "/fe_advance/" },
  { text: "前端工程化", link: "/fe_engineer/", activeMatch: "/fe_engineer/" },
  // { text: "技术内功", link: "/fe_code/" , activeMatch: '/fe_code/'},
  { text: "代码人生", link: "/code_life/", activeMatch: "/code_life/" },
  { text: "商业创新", link: "/business_innovation/", activeMatch: "/business_innovation/" },
  {
    text: "关注我",
    items: [
      { text: "GitHub", link: "https://github.com/wangenze267" },
      {
        text: "掘金",
        link: "https://juejin.cn/user/105972016875911/posts",
      },
    ],
  },
];
const sidebar = {};
nav.forEach(({ text, link }) => {
  if (!link) return; // const link = item.text;
  link = link.split("/")[1];
  console.log(link);
  sidebar[`/${link}`] = [{ text, items: getDirectory(link) }]; // sidebar.push({text,items:getDirectory(link.replaceAll('/',""))})
});

module.exports = {
  title: "Study Note",
  description: "Ned的学习手册",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/note.png" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    logo: './note.png',
    siteTitle: 'Study Note',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    sidebar,
    nav,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Ned",
    },
  },
};
