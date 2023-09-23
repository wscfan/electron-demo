const { ipcMain, dialog } = require("electron");
const fs = require("fs");

ipcMain.handle("selectFileMain", async (event) => {
  const { filePaths } = await dialog.showOpenDialog({
    title: "选择图片文件",
    properties: ["openFile", "multiSelections"],
    filters: [
      {
        name: "image",
        extensions: ["jpg", "png"],
      },
    ],
  });
  return filePaths;
});

ipcMain.on("saveInput", async (event, text) => {
  if (text) {
    const { filePath } = await dialog.showSaveDialog({
      title: "请选择保存路径",
      filters: [
        {
          name: "文本文档",
          extensions: ["txt"],
        },
      ],
    });
    fs.writeFileSync(filePath, text);
  }
});
