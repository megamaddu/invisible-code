function transform(things) {
  return things.map(thing => {
    return {
      ...thing,
      privates: thing.privates
    };
  });
}
