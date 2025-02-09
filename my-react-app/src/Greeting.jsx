/**Exercise 1: Creating a Functional Component

Description: 

Create a simple functional component named `Greeting` that 
accepts a 'name' prop and displays "Hello, {name}!".
Display this component in App.jsx. */

import React from 'react';




function Greeting({name}) {
    return (

        <h1>Hello, {name}</h1>

    )
}

export default Greeting