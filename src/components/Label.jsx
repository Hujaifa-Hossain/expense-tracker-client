import React from 'react';

const Label = ({ value }) => {
  console.log(value);
  const { type, color, percent } = value
  return (
    <div className='flex justify-between my-2'>
      <div className='flex gap-2 align-middle'>
        <div className='w-1 h-2 rounded py-3' style={{background: `${color}`}}></div>
        <h3 className='text-md'>{type}</h3>
      </div>

      <h4 className='font-bold'>{percent}%</h4>
    </div>
  );
};

export default Label;