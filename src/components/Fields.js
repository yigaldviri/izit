import React from 'react'
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
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
                    autoOk={true}
                    fullWidth={true}/>
    </MuiThemeProvider>
);


export const renderDateField = ({locale, input, label, meta: { touched, error }, ...custom }) => (
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
                    firstDayOfWeek={locale === "en-IL" || locale === "he-IL" ? 0 : 1}
                    minDate={new Date()}
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


