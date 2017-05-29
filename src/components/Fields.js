import React from 'react'
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {Field} from 'redux-form'
import {izitMuiTheme} from './themeProvider';
import {FormattedMessage} from 'react-intl';

const ErrorMessage = ({error}) => {
  if(!error){
      return null;
  }
    return (
        <div>
           <FormattedMessage id={error}/>
        </div>
    )
};

export const renderTimeField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <MuiThemeProvider muiTheme={izitMuiTheme}>
        <TimePicker hintText={label}
                    floatingLabelText={label}
                    errorText={touched && error && <ErrorMessage error={error}/>}
                    onChange={(event, value) => {
                        input.onChange(value)
                    }}
                    {...custom}
                    format="24hr"
                    autoOk={true}
                    fullWidth={true}/>
    </MuiThemeProvider>
);


export const renderDateField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <MuiThemeProvider muiTheme={izitMuiTheme}>
        <DatePicker hintText={label}
                    floatingLabelText={label}
                    errorText={touched && error && <ErrorMessage error={error}/>}
                    onChange={(event, value) => {
                        input.onChange(value)
                    }}
                    formatDate={new Intl.DateTimeFormat('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    }).format}
                    {...custom}
                    autoOk={true}
                    fullWidth={true}/>
    </MuiThemeProvider>
);


export const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <MuiThemeProvider muiTheme={izitMuiTheme}>
        <TextField hintText={label}
                   floatingLabelText={label}
                   errorText={touched && error && <ErrorMessage error={error}/>}
                   {...input}
                   {...custom}
                   fullWidth={true}/>
    </MuiThemeProvider>
);


export const OptionalCard = (props) => {

    const {formatMessage} = props;

    return (
        <div className="optional-list">
            <MuiThemeProvider>
                <Card>
                    <CardHeader
                        title={formatMessage({id:"toggle"})}
                        subtitle={formatMessage({id:"toggleSub"})}
                        actAsExpander={true}
                        showExpandableButton={true}
                        titleStyle={{paddingLeft : 90}} //hack! yack!
                        subtitleStyle={{paddingLeft : 90, marginTop: 10}} //hack! yack!
                    />
                    <CardText expandable={true}>
                        <Field name="youtube" component={renderTextField} label={formatMessage({id:"youtube"})}/>
                        <Field name="link" component={renderTextField} label={formatMessage({id:"link"})}/>
                    </CardText>
                </Card>
            </MuiThemeProvider>
        </div>
    );
};
