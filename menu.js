const createMenu = (win) => {
  const { shell, Menu, BrowserWindow } = require("electron");

  const isMac = process.platform === "darwin";

  const config = [
    ...(isMac
      ? [
          {
            label: "",
            submenu: [
              {
                label: "打开百度",
                click() {
                  shell.openExternal("https://www.baidu.com");
                },
              },
            ],
          },
        ]
      : []),
    {
      label: "操作",
      submenu: [
        {
          label: "打开新窗口",
          accelerator: "CommandOrControl+Y",
          click() {
            new BrowserWindow({
              width: 200,
              height: 200,
            });
          },
        },
        {
          label: "点击",
          click() {
            win.webContents.send("changeTitle", "标题");
          },
        },
        {
          type: "separator",
        },
        { role: isMac ? "close" : "quit", label: isMac ? "关闭" : "退出" },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(config));
};

module.exports = {
  createMenu,
};
