import logo from './logo.svg';
import './App.css';
import ListTodo from './ListTodo';
import FormTodo from './FormTodo';
import { useState } from 'react';
import { Context } from './TodoContext';

function App() {
  const [listTodo,setListTodo] = useState([
    {
      id:1,
      title:'کار یک',
      done:false
    },
    {
      id:2,
      title:'کار دو',
      done:false
    },
    {
      id:3,
      title:'کار سه',
      done:true
    },
  ]);
  return (
    <>
      <div className='container w-100 h-100 p-3'>
        <div className='row justify-content-center align-items-start'>
          <div className='col-12 col-md-8 col-lg-6 p-3 rounded-3'>
            <Context.Provider value={{listTodo,setListTodo}}>
              <FormTodo/>
              <ListTodo/>
            </Context.Provider>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
