import React, { useState } from 'react';
import { Search, Table } from './../../@components';
import { getArticleList } from './../../@services';

const Home = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onSubmitSearch = async (e) => {
    e.preventDefault();
    const res = await getArticleList(search);
    console.log({ res });
  };

  return (
    <>
      <Search
        value={search}
        onChange={onChangeSearch}
        onSubmit={onSubmitSearch}
      />
      <Table />
    </>
  );
};

export default Home;
