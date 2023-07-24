const { ipcRenderer, contextBridge } = require("electron");

// window.addEventListener("DOMContentLoaded", () => {
//   for (const app of ['chrome', 'electron', 'node']) {
//     const el = document.querySelector(`#${app}`);
//     el.innerHTML = `${app}: ${process.versions[app]}`
//   }
// })

contextBridge.exposeInMainWorld("api", {
  counter: (callback) => {
    ipcRenderer.on("test", (event, value) => {
      callback(value);
    });
  },
});
