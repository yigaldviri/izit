import React , { Component }    from 'react'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card} from 'material-ui/Card';
import {injectIntl, FormattedMessage} from 'react-intl';

import {createIzit} from '../services/Api';
import {renderTimeField, renderDateField, renderTextField} from './Fields'
import OptionalCard from './OptionalCard'
import IzitLoader from './IzitLoader';
import {izitMuiTheme} from './themeProvider';
import {validate} from './../utils/Helpers';

class IzItForm extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: false};
        this.format = props.intl.formatMessage;
        this.locale = this.props.intl.locale;
        this.dir = (this.locale === "en-IL" || this.locale === "he-IL") ? 'rtl' : 'ltr';
    }

    create = (inputs) => {
        this.setState({loading: true});
        this.props.onError(null);
        inputs.locale = this.props.intl.locale;
        createIzit(inputs)
            .then((res) => {
                browserHistory.push(res.data.urlToken)
            })
            .catch((error) => {
                this.setState({loading: false});
                this.props.onError(error.message);
            });
    };


    render() {
        return (
            <div className="context-wrapper">
                <p className="App-intro">
                    <FormattedMessage id="description"/>
                </p>
                <form dir={this.dir} onSubmit={this.props.handleSubmit(values => this.create(values))}>
                    <div>
                            <MuiThemeProvider>
                                <Card>
                                    <div className="card-wrapper">
                                        <div>
                                            <Field name="what"
                                                   component={renderTextField}
                                                   label={this.format({id:"what"})}/>
                                        </div>
                                        <div>
                                            <Field name="whenD" component={renderDateField} label={this.format({id:"whenD"})}/>
                                        </div>
                                        <div>
                                            <Field name="whenH" component={renderTimeField} label={this.format({id:"whenH"})}/>
                                        </div>
                                        <div>
                                            <Field name="email" component={renderTextField} label={this.format({id:"email"})}/>
                                            <div className="fields-description">{this.format({id:"emailDesc"})}</div>
                                        </div>
                                        <OptionalCard formatMessage={this.format}/>
                                        <div className="sub-button">
                                            <MuiThemeProvider muiTheme={izitMuiTheme}>
                                                <RaisedButton primary={true} type="submit" buttonStyle={{color: "white"}}
                                                              disabled={this.props.pristine || this.props.submitting || this.state.loading}>
                                                    <FormattedMessage id="submitButton"/>
                                                </RaisedButton>
                                            </MuiThemeProvider>
                                            {this.state.loading && (
                                                <IzitLoader loaderSize="30"/>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </MuiThemeProvider>
                    </div>
                </form>
            </div>
        )
    }
}

export default injectIntl(reduxForm({
    form: 'IzItForm',
    validate,
})(IzItForm))
