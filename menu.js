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
        click() {
          new BrowserWindow({
            width: 200,
            height: 200,
          });
        },
      },
    ],
  },
];

Menu.setApplicationMenu(Menu.buildFromTemplate(config));
