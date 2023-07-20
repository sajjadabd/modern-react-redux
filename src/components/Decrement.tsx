
//import react, { ReactNode } from 'react';

import { useDispatch } from 'react-redux';
import {  decremented } from '../../store/todo';

//import { StateType } from '../interface/StateType';

function Decrement ()  {

    //const value = useSelector((state : StateType) => state.todos.value);
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(decremented())}>
        -
        </button>
    );
}

export { Decrement } ;