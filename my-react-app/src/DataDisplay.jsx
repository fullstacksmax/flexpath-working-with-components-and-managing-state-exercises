import React from 'react';

function DataDisplay({ data }) {
    return <div>Data: {JSON.stringify(data)}</div>;
}

export default DataDisplay