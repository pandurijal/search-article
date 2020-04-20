const ROOT = 'https://hn.algolia.com/api/v1';

export const getArticleList = async (page, query) => {
  const get = await fetch(`${ROOT}/search?page=${page}&query=${query}`);
  const res = await get.json();
  return res;
};

export const getArticleAuthor = async (name) => {
  const get = await fetch(`${ROOT}/users/${name}`);
  const res = await get.json();
  return res;
};
