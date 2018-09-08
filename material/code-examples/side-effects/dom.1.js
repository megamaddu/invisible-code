// timelineDom is a global variable
let timelineDom = document.querySelector(".pagination");

// Manipulate the innerHTML, instead of returning the html string
function emptyTimelineMessage() {
  timelineDom.innerHTML = "";
  // now this function is doing extra job
  timelineDom.innerHTML = "<p>You have no history in your timeline</p>";
}

function receivedTimelineCb(res) {
  if (res.count === 0) {
    emptyTimelineMessage();
  }
}
