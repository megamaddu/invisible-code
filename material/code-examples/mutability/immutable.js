const a = { sum: 0 };

const b = { sum: a.sum + 1 };

diff(a, b); // { sum: { from: 0, to: 1 } }
