function closeOpenNav(x) {
  document.getElementById("navList").classList.toggle("show");
  x.classList.toggle("moveRight");
  if (x.classList.contains("moveRight")) {
    x.innerHTML = "X";
  } else {
    x.innerHTML = "\u2261";
  }
}
