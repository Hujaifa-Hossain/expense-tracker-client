import React from 'react';
import Label from './Label';
import { default as api } from '../store/apiSlice'

const Labels = () => {
  
  const { data, isFetching, isSuccess, isError } = api.useGetCategoriesQuery()
  console.log(data)
  return (
    <div>
      {data?.map((value, i) => <Label key={i} value={value} />)}
    </div>
  );
};

export default Labels;