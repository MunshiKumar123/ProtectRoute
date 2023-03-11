import React, { useState } from 'react'
import Child from './Child'

function Parrrent() {
    const [data, setData] = useState({})
    const getData = (x) => {
        setData({ x })
    }

    return (
        <>
            <div className='container mt-5'>
                <h1>Parrrent Component</h1>
                <div className='stu1'><p>{data?.x?.fn} <br />{data?.x?.em}  </p></div>
                <Child getData={getData} />
            </div>
        </>
    )
}

export default Parrrent
