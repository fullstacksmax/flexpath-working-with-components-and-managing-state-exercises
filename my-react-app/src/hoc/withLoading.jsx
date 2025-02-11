

import React, { useState, useEffect} from 'react'

function withLoading(WrappedComponent, dataFetcher) {
    return function WithLoadingComponent(props) {
        const [data, setData] = useState(null);

        useEffect(() => {
            dataFetcher().then((response) => setData(response));
        }, []);
        
        if (!data) {
            return <div>Loading...</div>;
        }
    
    
        return <WrappedComponent data={data} {...props} />
    };
}

export default withLoading;