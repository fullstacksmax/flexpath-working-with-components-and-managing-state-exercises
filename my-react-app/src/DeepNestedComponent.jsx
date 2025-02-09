import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

function DeepNestedComponent() {
    const theme = useContext(ThemeContext);
    return <div>current theme {theme}</div>
}

export default DeepNestedComponent;