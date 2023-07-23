const { BrowserWindow, app, ipcMain } = require("electron");
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
    }
  });
  mainWindow.setAspectRatio(1);
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
  mainWindow.webContents.toggleDevTools();
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

ipcMain.on("saveFile", () => {
  console.log("saveFile")
})
