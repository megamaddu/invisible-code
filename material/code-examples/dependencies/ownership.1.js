const api = "fake://api.com/";

const cache = new Map();

const get = id => fetch(api + id).then(res => res.json());

const getWithCache = id => {
  const cachedVal = cache.get(id);
  return cachedVal
    ? Promise.resolve(cachedVal)
    : get(id).then(val => {
        cache.set(id, val);
        return val;
      });
};
