const { ipcRenderer, contextBridge } = require("electron");

// contextBridge.exposeInMainWorld("api", {
//   save: () => {
//     ipcRenderer.send("saveFile");
//   },
// });

// window.addEventListener("DOMContentLoaded", () => {
//   for (const app of ['chrome', 'electron', 'node']) {
//     const el = document.querySelector(`#${app}`);
//     el.innerHTML = `${app}: ${process.versions[app]}`
//   }
// })
ipcRenderer.on("test", () => {
  const el = document.querySelector("#counter")
  el.innerHTML = Number(el.textContent) + 1;
})