function changeProgress(percent, bgColor) {
  var progress = document.getElementById("progress");
  progress.style.backgroundPosition = percent + "%";
  progress.style.backgroundColor = bgColor;
}
