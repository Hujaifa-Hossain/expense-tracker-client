import React from 'react';
import {BiTrash} from 'react-icons/bi';

const ListItem = ({ item }) => {
  return (
    <div className="flex justify-center bg-gray-50 py-2 my-1 rounded-r">
      <button className='px-2 text-red-400'><BiTrash/></button>
      <span className='block w-full'>name</span>
    </div>
  );
};

export default ListItem;