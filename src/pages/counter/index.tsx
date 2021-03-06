import React from 'react';
import { increment, decrement, incrementByAmount, asyncIncrement } from '@/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/hook';

const ReduxToolkit = () => {
    const value = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();
    console.log('render');
    
    return (
        <div>
           <button onClick={() => dispatch(decrement())}>减</button>
            <span>{value}</span>
           <button onClick={() => dispatch(increment())}>加</button>
           <button onClick={() => dispatch(incrementByAmount(5))}>固定加</button>
           <button onClick={() => dispatch(asyncIncrement())}>异步加</button>
        </div>
    )
}

export default ReduxToolkit
