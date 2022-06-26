import React, { useState } from 'react';

import { Divider, Input } from 'antd';

const Search = ({ filterFood }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const updateValue = (query) => {
    setSearchQuery(query)
    filterFood(query);
  };

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input
        type="search"
        name="search"
        id="search"
        value={searchQuery}
        onChange={(e)=> {updateValue(e.target.value)}}
      />
    </>
  );
};

export default Search;
