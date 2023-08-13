window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    window.api.upload((file) => {
      document.querySelector("input").value = file;
    });
  });
});

// window.api.counter((value) => {
//   const el = document.querySelector("#counter")
//   el.innerHTML = Number(el.textContent) + value;
// })
