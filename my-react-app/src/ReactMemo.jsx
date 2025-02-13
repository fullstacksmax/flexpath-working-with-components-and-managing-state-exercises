import React from 'react'



function MyMemo( {props} ){
    return <div>memo function{props}</div>
}

export default React.memo(MyMemo);