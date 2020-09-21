export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

//INCREMENT action created
export const incrementCounter = () => ({
   type: INCREMENT_COUNTER,
   payload: 1
});

//DECREMENT action created
export const decrementCounter = () => ({
    type: DECREMENT_COUNTER,
    payload: 1,
});