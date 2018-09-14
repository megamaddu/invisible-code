makeCake("chocolate"); // { name: "chocolate", createdAt: 1 }
makeCake("chocolate"); // { name: "chocolate", createdAt: 2 }
makeCake("chocolate"); // { name: "chocolate", createdAt: 3 }

function makeCake(kind) {
  return {
    kind,
    createdAt: Date.now()
  };
}
