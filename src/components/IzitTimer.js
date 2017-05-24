import React, { Component } from 'react';
import {injectIntl} from 'react-intl';
import {IzitState} from './IzitStates';



const Digit = ({digit, isOverTime}) => {
    return (
        <div className="digits-wrapper">
            <span className="min-dig {isOverTime ? 'digits-overtime' : '' }">{digit}</span>
        </div>
    )};



class IzitTimer extends Component {

    constructor(props) {
        super(props);
        this.format = props.intl.formatMessage;
    }

    isOverTime() {
        return this.props.izitState === IzitState.NOT_DONE_OVER_TIME;
    }

    render () {

        return  <div className="timer">
            <div id="clockdiv">
                <div>
                    <div className="smalltext">{this.format({id:"days"})}</div>
                    <Digit digit={this.props.time.days} isOverTime={this.isOverTime()}/>
                </div>
                <div>
                    <div className="smalltext">{this.format({id:"hours"})}</div>

                    <Digit digit={this.props.time.hours} isOverTime={this.isOverTime()}/>
                </div>
                <div>
                    <div className="smalltext">{this.format({id:"minutes"})}</div>
                    <Digit digit={this.props.time.minutes} isOverTime={this.isOverTime()}/>
                </div>
                <div>
                    <div className="smalltext">{this.format({id:"seconds"})}</div>
                    <Digit digit={this.props.time.seconds} isOverTime={this.isOverTime()}/>
                </div>
            </div>
        </div>
    }
}


export default injectIntl(IzitTimer);