const sidebar = {
    "/": [
        { text: "介绍", link: "/" },
        { text: "快速上手", link: "/get-start" },
        {
            text: "Basic 通用",
            collapsible: true,
            collapsed: false,
            items: [{ text: "Button 按钮", link: "/components/button/" }],
        },
        {
            text: "Form 表单项",
            collapsible: true,
            collapsed: false,
            items: [
                { text: "Input 输入框", link: "/components/input/" },
                { text: "Rate 评分", link: "/components/rate/" },
            ],
        },
        { text: "导航" },
        {
            text: "反馈组件 FeedBack",
            collapsible: true,
            collapsed: false,
            items: [{ text: "Alert 提示", link: "/components/alert/" },{ text: "Message 消息提示", link: "/components/message/" }],
        },
        { text: "数据录入" },
        { text: "数据展示" },
        { text: "布局" },
    ],
};
const socialLinks = [
    {
        icon: "github",
        link: "https://github.com/message163/zs-design-ui",
    },
];
const editLink = {
    pattern: "https://github.com/message163/zs-design-ui/tree/main/docs/:path",
    text: "Suggest changes to this page",
};
const config = {
    base: "/molix-ui",
    title: "molix-ui",
    description: "组件库搭建的教学模型",
    lastUpdated: true,
    themeConfig: {
        sidebar,
        socialLinks,
        editLink,
    },
    markdown: {
        config: (md) => {
            // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
            //   const { demoBlockPlugin } = require("vitepress-theme-demoblock");
            //   md.use(demoBlockPlugin);
        },
    },
};

export default config;
