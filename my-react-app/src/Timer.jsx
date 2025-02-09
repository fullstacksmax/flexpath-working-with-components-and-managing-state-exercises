/**Exercise 8: Using useEffect Hook

Description: 

Create a `Timer` component that uses `useEffect` to update 
the time every second.
Display this component in App.jsx. */

//import react from 'react';
import { useState, useEffect } from 'react';

function timer({}){
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        
        return () => clearInterval(timerId);
    }, []);

    return <h2>Current time: {time.toLocaleTimeString()}</h2>;
}
export default timer;