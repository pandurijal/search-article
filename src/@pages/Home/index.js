import React, { useState } from 'react';
import { Search, Table } from './../../@components';
import { getArticleList, getArticleAuthor } from './../../@services';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  let countPage = [];
  for (let i = 1; i <= 10; i++) {
    countPage = [...countPage, i];
  }

  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onChangePage = (num) => {
    setCurrentPage(num);
    fetchData(num);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    fetchData(currentPage);
  };

  const fetchData = async (page) => {
    setLoading(true);
    try {
      let resArticles = await getArticleList(page, search);
      let articleData = [...resArticles.hits];
      await resArticles.hits.map(async (val, i) => {
        const resAuthor = await getArticleAuthor(val.author);
        articleData[i].submission_count = resAuthor.submission_count;
      });
      setArticles(articleData);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Search
        value={search}
        onChange={onChangeSearch}
        onSubmit={onSubmitSearch}
      />
      {!loading ? (
        articles.length > 0 && (
          <Table
            columns={['Title', 'Author']}
            rowData={articles}
            onChangePage={onChangePage}
            currentPage={currentPage}
            countPage={countPage}
          />
        )
      ) : (
        <p>..fetching data</p>
      )}
    </>
  );
};

export default Home;
