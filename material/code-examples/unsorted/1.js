// attachPaginationDetails is dependent on attachPaginationHeader
// if attachPaginationHeader changes className or got removed,
// attachPaginationDetails will get affected.
function attachPaginationHeader() {
  const header = document.createElement("div");
  header.classList.add("paginationHeader");
  document
    .querySelector(".container")
    .insertAdjacentElement("afterbegin", header);
}

function attachPaginationDetails() {
  const paginationHeader = document.querySelector(
    ".container .paginationHeader"
  );
  if (paginationHeader) {
    paginationHeader.innerHTML = "<p>page 1</p>";
  }
}
