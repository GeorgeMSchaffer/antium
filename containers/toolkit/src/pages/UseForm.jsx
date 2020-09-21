import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Cognomen" name="Cognomen" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Nomen" name="Nomen" ref={register({pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Praenomen" name="Praenomen" ref={register} />

      <input type="submit" />
    </form>
  );
}