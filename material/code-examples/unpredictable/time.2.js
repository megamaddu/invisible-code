const now = Date.now();
makeCake("chocolate", now); // { name: "chocolate", createdAt: 1 }
makeCake("chocolate", now); // { name: "chocolate", createdAt: 1 }
makeCake("chocolate", now); // { name: "chocolate", createdAt: 1 }

function makeCake(kind, createdAt) {
  return {
    kind,
    createdAt
  };
}
