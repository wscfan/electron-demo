window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    // window.api.btnClick();
    const width = Number(document.querySelector("[name=width]").value);
    const height = Number(document.querySelector("[name=height]").value);
    window.api.changeSize(width, height);
  });
  window.api.addTitle((title) => {
    document.getElementById("title").innerHTML += title + "==>";
  });
});
