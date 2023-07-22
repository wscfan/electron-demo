const { BrowserWindow, app } = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true,
    x: 1180,
    y: 100,
    frame: false,
    transparent: true
  });
  mainWindow.setAspectRatio(1);
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
};

app.whenReady().then(() => {
  createWindow();
  // mainWindow.webContents.toggleDevTools();

  app.on("window-all-closed", () => {
    if (process.platform != "darwin") app.quit();
    console.log(333);
  });

  app.on("activate", () => {
    createWindow();
  });
});
