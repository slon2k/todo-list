import React from 'react'

const Filter = ({setFilter}) => {
    return (
        <div>
            <button onClick={() => setFilter('all')} type={"button"} className={"btn btn-primary"}>All</button>
            <button onClick={() => setFilter('active')} type={"button"} className={"btn btn-default"}>Active</button>
            <button onClick={() => setFilter('done')} type={"button"} className={"btn btn-default"}>Done</button>
        </div>
    )
}

export default Filter