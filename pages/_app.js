import React from 'react'
import App from 'next/app';
import { useDispatch,useSelector } from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';


export const MyApp = ({}) => {
    const {counter} = useSelector((state) =>{
        const {counter} = state;
        return {counter}

    });
    const dispatch = useDispatch();

    return (

        <div>
            <button onClick={() => {dispatch(incrementCounter())}}>Increment</button>
            <h1>{counter.value}</h1>
            <button onClick={() => {dispatch(decrementCounter())}}>Decrement</button>
        </div>
    )
}
