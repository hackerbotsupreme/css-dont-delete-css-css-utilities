function showDialog(elementId) {
  var element = document.getElementById(elementId);
  element.classList.add("show");
}

window.onclick = function (event) {
  var element = event.target;
  if (
    element.classList.contains("dialogBox") ||
    element.classList.contains("closeDialog")
  ) {
    while (element.tagName != "BODY" && element != null) {
      if (element.classList.contains("dialogBox")) {
        element.classList.remove("show");
      }
      element = element.parentElement;
    }
  }
};
