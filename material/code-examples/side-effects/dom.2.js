function emptyTimelineMessage() {
  return "<p>You have no history in your timeline</p>";
}

function getDomElement(selector) {
  return document.querySelector(selector);
}

function setDomContent(domElement, content) {
  domElement.innerHTML = content;
}

function receivedTimelineCb(res) {
  if (res.count === 0) {
    const timelineDom = getDomElement(".pagination");
    setDomContent(timelineDom, "");
    setDomContent(timelineDom, emptyTimelineMessage());
  }
}
