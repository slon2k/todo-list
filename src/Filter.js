import React from 'react'

const Filter = () => {
    return (
        <div>
            <button type={"button"} className={"btn btn-primary"}>All</button>
            <button type={"button"} className={"btn btn-default"}>Active</button>
            <button type={"button"} className={"btn btn-default"}>Done</button>
        </div>
    )
}

export default Filter