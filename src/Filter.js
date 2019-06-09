import React from 'react'

const Filter = ({setFilter, filter}) => {

    const lineItem = (name, label) => {
        return(
            <li className="nav-item">
                <div onClick={() => setFilter(name)}
                     style={{cursor: "pointer"}}
                     className={ filter===name ? "nav-link active" : "nav-link"}>
                    {label}
                </div>
            </li>
        )
    }

    return (
        <ul className = "nav nav-pills" >
            {lineItem('all', "All")}
            {lineItem('active', "Active")}
            {lineItem('done', "Done")}
        </ul>
    )
}

export default Filter