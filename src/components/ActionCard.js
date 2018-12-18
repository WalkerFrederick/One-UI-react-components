import React from 'react';
import './ActionCard.css'



class ActionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headline: this.props.headline, //Text at top of card
            body: this.props.body, //Text under the 'headline'
            buttonText: this.props.buttonText, //Text you want the button to display
            buttonFunction: this.props.buttonFunction, //Function you want the button to call
        }
    }

    render (){
        return (
            <div className='actioncard'>
                <h1 className='headline'>{this.state.headline}</h1>
                <span className='horizontalLine'/>
                <p className='body'>{this.state.body}</p>
                <button className='actionbutton'>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default ActionCard;