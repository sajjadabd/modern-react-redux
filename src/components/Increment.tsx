
//import react, { ReactNode } from 'react';

import { useDispatch } from 'react-redux';
import { incremented } from '../../store/todo';

//import { StateType } from '../interface/StateType';

function Increment ()  {

    //const value = useSelector((state : StateType) => state.todos.value);
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(incremented())}>
        +
        </button>
    );
}

export { Increment } ;