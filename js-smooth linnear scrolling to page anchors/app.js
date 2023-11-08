var html, body;

window.onload = function() {
  //getting all anchor elements
  var links = document.links;

  //getting html
  html = document.documentElement;

  //getting body
  body = document.body;

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      //getting current scroll position
      var scrollTop = Math.round(body.scrollTop || html.scrollTop);
      if (this.hash !== "") {
        //preventing default anchor click behavior
        event.preventDefault();

        //getting element with id found in hash
        var hashElement = document.getElementById(this.hash.substring(1));

        var hashElementTop = 0;
        var obj = hashElement;
        while (obj.offsetParent) {
          hashElementTop += obj.offsetTop;
          obj = obj.offsetParent;
        }
        //getting element's position
        hashElementTop = Math.round(hashElementTop);

        scroll(scrollTop, hashElementTop, this.hash);
      }
    };
  }
};

function scroll(from, to, hash) {
  var timeInterval = 1; //in ms
  var prevScrollTop;
  var increment = to > from ? 10 : -10;

  var scrollByPixel = setInterval(function() {
    //getting current scroll position
    var scrollTop = Math.round(body.scrollTop || html.scrollTop);

    if (
      prevScrollTop == scrollTop ||
      (to > from && scrollTop >= to) ||
      (to < from && scrollTop <= to)
    ) {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      window.location.hash = hash;
    } else {
      body.scrollTop += increment;
      html.scrollTop += increment;

      prevScrollTop = scrollTop;
    }
  }, timeInterval);
}
