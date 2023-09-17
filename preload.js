const { contextBridge, ipcMain, ipcRenderer, shell } = require("electron");
const fs = require("fs");

contextBridge.exposeInMainWorld("api", {
  btnClick() {
    // shell.openExternal("https://www.baidu.com");
    fs.writeFileSync("output/a.txt", "abc");
    ipcRenderer.send("clgMsg");
  },
  changeSize(width, height) {
    console.log(width, height);
    ipcRenderer.send("changeSize", width, height);
  },
  addTitle(cb) {
    ipcRenderer.on("changeTitle", ($event, value) => {
      cb(value);
    });
  },
});

// ipcRenderer.on("changeTitle", ($event, value) => {
//   document.getElementById("title").innerHTML += value + "<br>";
// });

// window.api = {
//   btnClick() {
//     fs.writeFileSync("a.txt", "abc");
//     ipcRenderer.send("clgMsg");
//   },
// };

window.addEventListener("contextmenu", () => {
  ipcRenderer.send("mainPopMenu");
});
