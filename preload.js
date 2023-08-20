const { contextBridge, ipcMain, ipcRenderer, shell } = require("electron");
const fs = require("fs");

contextBridge.exposeInMainWorld("api", {
  btnClick() {
    // shell.openExternal("https://www.baidu.com");
    fs.writeFileSync("output/a.txt", "abc");
    ipcRenderer.send("clgMsg");
  },
});

// window.api = {
//   btnClick() {
//     fs.writeFileSync("a.txt", "abc");
//     ipcRenderer.send("clgMsg");
//   },
// };
