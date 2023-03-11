import React, { memo, useState } from 'react'

function Child({ getData }) {
    // data pass to child to parrent

    const [data, setData] = useState({ fn: "", em: "" })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleclick = () => {
        getData(data)
        setData("")

    }
    return (
        <>
            <h1>Child Component</h1>
            <hr />
            <input type="text" placeholder='name' name='fn' value={data.fn} onChange={handleChange} />
            <input type="email" placeholder='email' name='em' value={data.em} onChange={handleChange} />
            <input type="button" value="Data transfer to parrent" onClick={handleclick} />

        </>
    )
}

export default memo(Child)
