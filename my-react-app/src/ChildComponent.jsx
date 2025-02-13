import React from 'react'

function ChildComponent({ onClick }) {
    console.log("child component rendered");
    return <button onClick={onClick}>click me</button>;
}

export default React.memo(ChildComponent);