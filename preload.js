const { contextBridge, ipcMain, ipcRenderer } = require("electron");
const fs = require("fs");

// contextBridge.exposeInMainWorld("api", {
//   btnClick() {
//     ipcRenderer.send("clgMsg");
//   },
// });

window.api = {
  btnClick() {
    // fs.writeFileSync("a.txt", "abc");
    ipcRenderer.send("clgMsg");
  },
};
