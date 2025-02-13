import React from 'react'

function ErrorButton() {
    const handleClick = () => {
        try {
            throw new Error("Error button clicked");
        } catch (error) {
            console.error("error caught in event handler", error)
        }
    };
    return <button onClick={handleClick}>Cause Error</button>
}

export default ErrorButton;