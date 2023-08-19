const { BrowserWindow, app, ipcMain } = require("electron");
const path = require("path");

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true,
    x: 1180,
    y: 100,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
      // contextIsolation: false,
      // nodeIntegration: true,
    },
  });

  // mainWindow.webContents.toggleDevTools();
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));

  ipcMain.addListener("clgMsg", () => {
    console.log(Math.random());
  });
});
