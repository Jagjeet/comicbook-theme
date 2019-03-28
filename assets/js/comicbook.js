function myFunction() {
  var x = document.getElementById("top-nav");
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}

// Code taken from:
// https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Code taken from:
// https://stackoverflow.com/questions/44964248/reveal-css-animation-on-scroll
var last_known_scroll_position = null;
window.addEventListener("scroll", function(e){
  var comicPanelList = document.querySelectorAll(".comic-description");
  var comicOverlayList = document.querySelectorAll(".comic-overlay");
  var comicPanelArray = Array.prototype.slice.call(comicPanelList);
  var comicOverlayArray = Array.prototype.slice.call(comicOverlayList);

  if (last_known_scroll_position !== null) {
    if (Math.abs(last_known_scroll_position - window.scrollY) >= 1) {
      var i = 0;
      for (i=0; i < comicPanelArray.length; i+=1) {
        if (isInViewport(comicPanelArray[i])) {
          comicPanelArray[i].classList.add("comic-description-animate"); // add class "animate"
          comicOverlayArray[i].classList.add("comic-overlay-animate"); // add class "animate"
        }
      }
    }
  }
  last_known_scroll_position = window.scrollY;
});