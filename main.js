const { BrowserWindow, app, ipcMain, dialog } = require("electron");
const { createMenu } = require("./menu");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true,
    x: 1180,
    y: 100,
    // frame: false,
    // transparent: true,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
      // nodeIntegration: true
    },
  });
  mainWindow.setAspectRatio(1);
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
  mainWindow.webContents.toggleDevTools();

  createMenu(mainWindow);
};

app.whenReady().then(() => {
  createWindow();

  app.on("window-all-closed", () => {
    if (process.platform != "darwin") app.quit();
    console.log(333);
  });

  app.on("activate", () => {
    createWindow();
  });
});

ipcMain.on("saveFile", (event) => {
  BrowserWindow.fromWebContents(event.sender).send("msg", "已经收到通知");
});

ipcMain.handle("selectFile", async (event) => {
  const { filePaths } = await dialog.showOpenDialog({});
  return filePaths[0];
});
