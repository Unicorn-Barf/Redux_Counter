export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


// we create "Action Creators"
// Action Creators need to be pure functions that return an object
// with a "type" property

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};