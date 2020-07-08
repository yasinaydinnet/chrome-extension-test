// https://developer.chrome.com/extensions/content_scripts

// alert("hehe")

var observer = new MutationObserver(mutations => {
  for(let mutation of mutations) {
    console.log("mutation")
    dodo();
    // for(let addedNode of mutation.addedNodes) {
          //  if (addedNode.nodeName === "IMG") {
          //      console.log("Inserted image", addedNode);
          //   }
        // }
   }
});
observer.observe(document, { childList: true, subtree: true });


var watched = [
  //paused
  80025314,//narcos
  80014749,//morty
  80192098,//moneyheist
  //full
  70153385,//trailer park
  70228042,//dictator
];

var dodo = () => {
  var b = document.querySelectorAll("div.ptrack-content")

  Array.prototype.forEach.call(b, function(el, i) {
    var vidid=JSON.parse(decodeURIComponent(el.dataset.uiTrackingContext)).video_id;

    if (watched.includes(vidid)) {
      // console.log(el)
      var parent = el.closest(".slider-item"); 
      // console.log(parent)
      parent.style.display = "none";
    }
  });

}