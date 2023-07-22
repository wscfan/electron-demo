const { BrowserWindow, app } = require("electron");
const path = require("path");

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true,
    x: 1180,
    y: 100,
  });

  mainWindow.webContents.toggleDevTools();
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
});
