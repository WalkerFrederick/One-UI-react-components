import React from 'react';
import OneButton from './OneButton/OneButton'
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
                <OneButton name={'RED BUTTON'} color={'GradientRed'}/>
                <p></p>
                <OneButton name={'BLUE BUTTON'} color={'GradientBlue'}/>
                <p></p>
                <OneButton name={'PINK BUTTON'} color={'GradientPink'}/>
                <p></p>
                <OneButton name={'GREEN BUTTON'} color={'GradientGreen'}/>
                <p></p>
                <OneButton name={'PURPLE BUTTON'} color={'GradientPurple'}/>
                <p></p>
                <OneButton name={'ORANGE BUTTON'} color={'GradientOrange'}/>
            </div>
        )
    }
}

export default ActionCard;