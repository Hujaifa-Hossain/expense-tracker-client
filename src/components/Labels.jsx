import React from 'react';
import Label from './Label';

const Labels = () => {
  const data = [
    {
      type: 'Saving',
      color: '#000',
      percent: 45,
    },
    {
      type: 'Investment',
      color: '#000',
      percent: 35,
    },
    {
      type: 'Saving',
      color: '#000',
      percent: 20,
    },
  ]
  return (
    <div>
      {data.map((value, i) => <Label key={i} value={value} />)}
    </div>
  );
};

export default Labels;