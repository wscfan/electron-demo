const { BrowserWindow, app, ipcMain, screen } = require("electron");
const path = require("path");

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true,
    x: 1180,
    y: 100,
    // fullscreen: true,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
      // contextIsolation: false,
      // nodeIntegration: true,
      sandbox: false,
    },
  });

  // mainWindow.webContents.toggleDevTools();
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
  // setTimeout(() => {
  //   mainWindow.center();
  //   mainWindow.setBounds({ width: 500, height: 500, x: 0, y: 0 }, true);
  // }, 1000);
  // setTimeout(() => {
  //   const { width } = screen.getPrimaryDisplay().workAreaSize;
  //   console.log(width);
  //   mainWindow.setBounds({ x: width / 2 - 150 }, true);
  // }, 1000);

  ipcMain.addListener("clgMsg", () => {
    console.log(Math.random());
  });
});
