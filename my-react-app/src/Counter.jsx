/**Exercise 4: Using useState Hook

Description: 

Create a `Counter` component that displays a 'count' and 
has buttons to increment and decrement the 'count'.
Display this component in App.jsx. */


import React, { useState } from 'react'



function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>the count is {count}
        <div>
            
        <button onClick={increment()}>Increment</button>
        <button onClick={decrement()}>Decrement</button>

        </div>
        </div>
        );
        function increment(){
            const incUp = () => {
                setCount(count + 1)
            };
        
            return incUp
        
        }
        function decrement(){
            const incDown = () => {
                setCount(count - 1)
            };
        
            return incDown
        
        }

}





export default Counter;