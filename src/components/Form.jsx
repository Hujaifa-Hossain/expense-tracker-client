import React from 'react';
import { useForm } from "react-hook-form";
import List from './List';


const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='mx-auto w-72 max-w-sm'>
      <h2 className="font-bold text-center text-xl mb-2">Transaction</h2>

      <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
        <input className='form-control' {...register('name')} type="text" placeholder='Salary, House rent, Bill' />

        <select className='form-control' {...register('type')}>
          <option value="Investment" defaultValue>Investment</option>
          <option value="Expense" defaultValue>Expense</option>
          <option value="Saving" defaultValue>Saving</option>
        </select>

        <input className='form-control' {...register('amount')} type="text" placeholder='Amount' />

        <button className='block w-full bg-indigo-500 text-white p-1' type='submit'>Make Transaction</button>
      </form>

      {/* History  */}
      <List />
    </div>
  );
};

export default Form;