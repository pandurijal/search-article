const ROOT = 'https://hn.algolia.com/api/v1/';

export const getArticleList = async (query) => {
  const get = await fetch(`${ROOT}/search?query=${query}`);
  const res = await get.json();
  return res;
};
