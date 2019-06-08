import React from 'react'

const Header = ({name}) => {
    return(
        <header>
            <div className={'navbar navbar-dark bg-dark shadow-sm'}>
                <div className={'container'}>
                    <h2 className={'navbar-brand'}>{name}</h2>
                </div>
            </div>
        </header>
    )
}

export default Header