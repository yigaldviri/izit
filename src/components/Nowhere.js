import React from 'react';
import nowhere from '../resources/nowhere.gif'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {injectIntl, FormattedMessage} from 'react-intl';
import {izitMuiTheme} from './themeProvider'

class Nowhere extends React.Component {

    constructor(props) {
        super(props);
        this.format = props.intl.formatMessage;
    }

    render () {
        return(
            <div className="form-wrapper nowhere">
                <div className="reached">
                    <FormattedMessage id="haveReached"/>
                </div>
                <div className="nowhere-title"> <FormattedMessage id="nowhere"/></div>
                <img src={nowhere} style={{width : "50%"}} alt="What up, yo?"/>
                <div className="how-that-happened"> <FormattedMessage id="noIdea"/></div>
                    <MuiThemeProvider muiTheme={izitMuiTheme}>
                        <RaisedButton
                            label={this.format({id: "goBackToMainPage"})}
                            primary={true}  buttonStyle={{color: "white"}}
                            href="/">
                        </RaisedButton>
                    </MuiThemeProvider>
            </div>
        )
    }
}

export default injectIntl(Nowhere);
