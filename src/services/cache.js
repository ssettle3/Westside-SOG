const cache = {
  searchResults: [],
  browseResults: {},
};

export const setCache = (key, value) => (cache[key] = value);
export const getCache = (key) => cache[key];
