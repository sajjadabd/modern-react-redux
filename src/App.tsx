

import { useSelector } from 'react-redux';

//import { incremented , decremented } from '../store/todo';

import './App.css'


import { Decrement } from './components/Decrement';
import { Increment } from './components/Increment';

import { StateType } from './interface/StateType';

function App() {

  const value = useSelector((state : StateType) => state.todos.value);
  //const dispatch = useDispatch()

  return (
    <div className='row'>
      <Decrement />
      <div>
      count is {value}
      </div>
      <Increment />
    </div>
  )
}

export default App
