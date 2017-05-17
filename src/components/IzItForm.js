import React , { PropTypes, Component }    from 'react'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {injectIntl, FormattedMessage} from 'react-intl';
import {createIzit} from '../services/Api';
import {renderTimeField, renderDateField, renderTextField, OptionalCard} from './Fields'
import IzitLoader from './IzitLoader';
import {izitMuiTheme} from './themeProvider';


const validate = values => {
    const errors = {};
    const requiredFields = [];//['what', 'email', 'whenH', 'whenD'];
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'Come on, fill the damn field';
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (values.what && /([<>\/\\])/i.test(values.what)) {
        errors.what = 'No way Jose';
    }
    return errors
};

class IzItForm extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: false};
        this.format = props.intl.formatMessage;
        this.dir = (this.props.intl.locale === "en-IL" || this.props.intl.locale === "he-IL") ? 'rtl' : 'ltr';
    }

    //getInitialState()

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
                this.props.onError(error);
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
                                            <div className="fields-description">{this.format({id:"whatDesc"})}</div>
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
                                                              disabled={this.props.pristine || this.props.submitting}>
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
