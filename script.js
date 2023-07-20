const btn = document.querySelector("#menu");
const open = document.querySelector(".menu-open");
const close_btn = document.querySelector("#close");
//hide
btn.addEventListener("click", () => {
  open.style.display = "block";
});

close_btn.addEventListener("click", ()=>{
    open.style.display = "none";
});

