import React from 'react';

import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {injectIntl, FormattedMessage} from 'react-intl';

import {izitMuiTheme} from './themeProvider'
import IzitLoader from './IzitLoader';
import IzitTimer from './IzitTimer';
import {getIzit} from '../services/Api';
import {getTimerState, getTimeRemaining} from './IzitStates';
import Sharing from './Sharing';
import Preview from './Preview'


const Phrase = ({izitState}) => {
    return (
        <div className="is-ticking">
            <FormattedMessage id={"statePhrase" + izitState}/>
        </div>
    );
};


class Izit extends React.Component {
    constructor(props) {
        super(props);
        this.format = props.intl.formatMessage;
        this.state = {loading: true, izit: {link: null}, time: 0, izitState: 0};
    }

    getIzitState(entTime, izitStatus) {
        return {
            time: getTimeRemaining(entTime),
            izitState: getTimerState(entTime, izitStatus)
        }
    }

    setTimer(time, izitState) {
        this.setState(this.getIzitState(time, izitState));
        let interval = () => {
            this.setState(this.getIzitState(time, izitState));
        };
        this.timerID = setInterval(interval.bind(this), 1000);
    }

    componentDidMount() {
        getIzit(this.props.token)
            .then ((res) => {

                if (!res.data.what){ // izit doesn't exist.
                    browserHistory.push("/go/to/nowhere");
                }
                this.setTimer(res.data.when, res.data.status);
                this.setState({
                    loading: false,
                    izit: res.data
                });
            })
            .catch((error) => {
                // this.setState({loading: false});
                // go to 404 . with the error?
                // this.setTimer(null, null);

                // not sure this is the right behaviour
                browserHistory.push("/go/to/nowhere");
            });
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render () {
        if (this.state.loading){
            return (<IzitLoader/>);
        }

        return(
            <div className="context-wrapper izit-screen">
                <div className="what">{this.state.izit.what}</div>

                <div className="time-wrapper">
                    <IzitTimer time={this.state.time} izitState={this.state.izitState}/>

                    {this.state.izit.youtube &&
                    <div className="youtube-panel">
                        <iframe src={this.state.izit.youtube.replace("watch?v=", "embed/")}
                                allowFullScreen/>
                    </div>
                    }

                    {this.state.izit.link &&
                    <a href={this.state.izit.link} style={{textDecoration: "none"}}>
                        <Preview url={this.state.izit.link}/>
                    </a>
                    }

                </div>

                <Phrase izitState={this.state.izitState}/>

                <MuiThemeProvider muiTheme={izitMuiTheme}>
                    <RaisedButton
                        label={this.format({id:"createYourOwn"})}
                        className="sub-button" primary={true}
                        href="/">
                    </RaisedButton>
                </MuiThemeProvider>

                <Sharing loc={this.context.router.location}/>

            </div>

        )
    }
}

Izit.contextTypes = {
    router: React.PropTypes.object,
    location: React.PropTypes.object
};

export default injectIntl(Izit);
