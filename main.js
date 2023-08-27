const { BrowserWindow, app, ipcMain, screen } = require("electron");
const { createWindow } = require("./window");

app.whenReady().then(() => {
  createWindow();
  require("./menu");
});
ipcMain.on("clgMsg", () => {
  console.log(Math.random());
});
ipcMain.on("changeSize", (event, width, height) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  const { width: screenWidth } = screen.getPrimaryDisplay().workAreaSize;
  win.setBounds(
    {
      x: Math.floor((screenWidth - width) / 2),
      width,
      height,
    },
    true
  );
});

app.on("window-all-closed", () => {
  if (process.platform === "darwin") app.quit();
});

app.on("activate", () => {
  if (
    BrowserWindow.getAllWindows().length === 0 &&
    process.platform === "darwin"
  ) {
    createWindow();
  }
});
