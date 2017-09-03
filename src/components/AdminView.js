import React from 'react';
import {izitMuiTheme} from './themeProvider'
import {injectIntl, FormattedMessage} from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {changeIzitStatus} from '../services/Api';
import { browserHistory } from 'react-router'


class AdminView extends React.Component {

    constructor(props) {
        super(props);
        this.format = props.intl.formatMessage;
    }

    changeStatus() {
        changeIzitStatus()
            .then ((res) => {

                if (!res.data.what){ // izit doesn't exist.
                    browserHistory.push("/go/to/nowhere");
                }
                else {
                    browserHistory.push(this.props.izit.urlToken);
                    //browserHistory.push(res.data.urlToken);
                }
            })
    }
    
    render() {
        return (
            <div className="context-wrapper izit-screen">
                <div className="what">{this.props.izit.what}</div>
                <div>
                    <FormattedMessage id="admin-change-state"/>
                </div>
                <MuiThemeProvider muiTheme={izitMuiTheme}>
                    <RaisedButton
                        label={this.format({id: "admin-change-button"})}
                        className="sub-button" primary={true}
                        onClick={this.changeStatus}>
                    </RaisedButton>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default injectIntl(AdminView);