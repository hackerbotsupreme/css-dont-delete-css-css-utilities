function showSnackbar(text) {
  var x = document.getElementById("snackbar");
  x.classList.add("show");
  x.innerHTML = text;
  setTimeout(function () {
    x.classList.remove("show");
  }, 5000);
}
