transform(things); // undefined 🚩

function transform(items) {
  items.forEach(item => {
    item.privates = 17;
  });
}
