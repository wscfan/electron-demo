window.addEventListener("DOMContentLoaded", () => {
  // const btn = document.querySelector("#btn");
  // btn.addEventListener("click", () => {
  //   // window.api.btnClick();
  //   const width = Number(document.querySelector("[name=width]").value);
  //   const height = Number(document.querySelector("[name=height]").value);
  //   window.api.changeSize(width, height);
  // });
  // const uploadBtn = document.querySelector("#uploadBtn");
  // uploadBtn.addEventListener("click", () => {
  //   window.api.uploadFile();
  // });

  window.api.addTitle((title) => {
    document.getElementById("title").innerHTML += title + "==>";
  });

  // const uploadInput = document.querySelector("#uploadFile");
  // uploadInput.addEventListener("click", async () => {
  //   const filePaths = await window.api.selectFilePreload();
  //   const container = document.querySelector("#container");
  //   for (let file of filePaths) {
  //     let pEl = document.createElement("p");
  //     pEl.innerHTML = file;
  //     container.appendChild(pEl);
  //   }
  // });

  const textInput = document.getElementById("textInput");
  const saveBtn = document.getElementById("saveBtn");
  saveBtn.addEventListener("click", () => {
    window.api.saveInput(textInput.value);
  });
});
