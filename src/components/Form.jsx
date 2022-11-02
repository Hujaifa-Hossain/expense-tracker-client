import React from 'react';

const Form = () => {
  return (
    <div className='mx-auto w-72 max-w-sm'>
      <h2 className="font-bold text-center text-xl mb-2">Transaction</h2>
      <form className='flex flex-col gap-2'>
        <input className='form-control' type="text" placeholder='Salary, House rent, Bill' />
        <select className='form-control' name="" id="">
          <option value="Investment" defaultValue>Investment</option>
          <option value="Expense" defaultValue>Expense</option>
          <option value="Saving" defaultValue>Saving</option>
        </select>
        <input className='form-control' type="text" placeholder='Amount'/>
        <div className='bg-indigo-500 text-white p-'>
          <button>Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default Form;