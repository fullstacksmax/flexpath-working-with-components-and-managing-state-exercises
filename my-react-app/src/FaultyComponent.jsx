import react from 'react';

function FaultyComponent() {
    throw new Error("I am broken, please help me.");
    return <div>this component will not render</div>;
}

export default FaultyComponent