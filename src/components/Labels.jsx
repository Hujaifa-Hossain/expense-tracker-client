import React from 'react';
import Label from './Label';
import { default as api } from '../store/apiSlice'

const Labels = () => {
  const data = [
    {
      type: 'Saving',
      color: '#000',
      percent: 45,
    },
    {
      type: 'Investment',
      color: '#b80000',
      percent: 35,
    },
    {
      type: 'Saving',
      color: '#ffd000',
      percent: 20,
    },
  ]

  console.log(api.useGetCategoriesQuery())
  return (
    <div>
      {data.map((value, i) => <Label key={i} value={value} />)}
    </div>
  );
};

export default Labels;