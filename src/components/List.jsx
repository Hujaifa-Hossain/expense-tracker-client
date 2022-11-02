import React from 'react';
import ListItem from './ListItem';

const List = () => {
  const history = [
    {},{},{},
  ]
  return (
    <div className='my-4'>
      <h3 className='font-bold'>History</h3>
      {history && history.map((item, i)=> <ListItem key={i} item={item}/>)}
    </div>
  );
};

export default List;