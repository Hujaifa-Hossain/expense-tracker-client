import React from 'react';
import { BiTrash } from 'react-icons/bi';

const ListItem = ({ item }) => {
  return (
    <div className="flex justify-center bg-gray-50 py-2 my-2 rounded-r" style={{ borderRight: `8px solid ${item.color ?? "#e5e5e5"}` }}>
      <button className='px-3' ><BiTrash data-id={item._id ?? ''} color={item.color ?? "#e5e5e5"} size="15px" name="trash" /></button>
      <span className='block w-full flex-auto'>{item.name ?? 'Transaction'}</span>
    </div>
  );
};

export default ListItem;