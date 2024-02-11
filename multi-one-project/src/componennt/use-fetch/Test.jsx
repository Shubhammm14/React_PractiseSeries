import React from 'react';
import { useFetch } from './Index';

const Test = () => {
  const { data, error, loading } = useFetch({ url: 'https://dummyjson.com/products' });

  return (
    <div>
      <h1>use FetchHook</h1>
      {loading && <div>Loading...</div>}
      {data && data.products && data.products.length ? (
        data.products.map((dataItem) => (
          <p key={dataItem.key}>{dataItem.title}</p>
        ))
      ) : null}
    </div>
  );
};

export default Test;
