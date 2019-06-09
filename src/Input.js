import React from 'react'

import './Input.css'

export default class Input extends React.Component {

    state = {
        description: ''
    }

    render() {
        const {addItem} = this.props;
        const {description} = this.state;
        const handleClick = () => {
            if(description !== ''){
                addItem(description);
                this.setState({description: ''})
            }
        }
        return (
            <div>
                <input type="text"
                       name={'description'}
                       value={description}
                       onChange = {(event) => {this.setState({description: event.target.value})}}/>
                <button type={"button"}
                        onClick={handleClick}
                        className={"btn btn-default"}>
                    Add
                </button>
            </div>)
        }
}
