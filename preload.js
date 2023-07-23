const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  save: () => {
    ipcRenderer.send("saveFile");
  },
});
