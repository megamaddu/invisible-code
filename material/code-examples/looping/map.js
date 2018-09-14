function transform(items) {
  return items.map(item => {
    return {
      ...item,
      privates: 17
    };
  });
}
