import React, { useState } from 'react';
import { Search, Table } from './../../@components';
import { getArticleList } from './../../@services';

const Home = () => {
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([]);

  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onSubmitSearch = async (e) => {
    e.preventDefault();
    const res = await getArticleList(search);
    setArticles(res.hits);
  };

  return (
    <>
      <Search
        value={search}
        onChange={onChangeSearch}
        onSubmit={onSubmitSearch}
      />
      <Table columns={['Title', 'Author']} rowData={articles} />
    </>
  );
};

export default Home;
