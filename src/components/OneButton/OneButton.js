import React from 'react';
import '../OneUI.css'
import './OneButton.css'

class OneButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            color: this.props.color,
            action: this.props.action,
        }

    }

    render() {
        return (
            <button onClick={this.state.action} className={'OneButton ' + (this.props.color)}>{this.state.name}</button>
        )
    }
}

export default OneButton;