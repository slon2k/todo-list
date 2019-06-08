import React from 'react'

export default class Input extends React.Component {

    state = {
        description: ''
    }

    render() {
        const {addItem} = this.props;
        const {description} = this.state
        return (
            <div>
                <input type="text"
                       name={'description'}
                       value={description}
                       onChange = {(event) => {this.setState({description: event.target.value})}}/>
                <button type={"button"}
                        onClick={()=>{addItem(description); this.setState({description: ''})}}
                        className={"btn btn-default"}>
                    Add
                </button>
            </div>)
        }
}
