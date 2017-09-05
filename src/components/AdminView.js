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

    changeStatus = () => {
        let urlToken = this.props.izit.urlToken, key = this.props.queryKey;
        
        changeIzitStatus(urlToken, key, 'DONE')
            .then ((res) => {
                if (!res.data.what){ // izit doesn't exist.
                    browserHistory.push("/go/to/nowhere");
                }
                else {
                    browserHistory.push(this.props.izit.urlToken);
                    window.location.reload();
                }
            })
    };
    
    render() {
        return (
            <div style={{margin: '20px'}}>
                <div style={{color: 'red'}}>
                    <FormattedMessage id="admin-change-state"/>
                </div>
                <div>
                    <MuiThemeProvider muiTheme={izitMuiTheme}>
                        <RaisedButton
                            label={this.format({id: "admin-change-button-cancel"})}
                            className="admin-button" primary={true}
                            onClick={() => browserHistory.push(this.props.izit.urlToken)}>
                        </RaisedButton>
                    </MuiThemeProvider>
                    
                    <MuiThemeProvider muiTheme={izitMuiTheme}>
                        <RaisedButton
                            label={this.format({id: "admin-change-button"})}
                            className="admin-button" primary={true}
                            onClick={this.changeStatus}>
                        </RaisedButton>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

export default injectIntl(AdminView);