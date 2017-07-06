import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Field} from 'redux-form'
import {injectIntl} from 'react-intl';
import { debounce } from 'throttle-debounce'

import {renderTextField} from './Fields'
import Preview from './Preview'

class OptionalCard extends React.Component{

    constructor(props) {
        super(props);
        this.formatMessage = props.intl.formatMessage;
        this.state = {};
        this.updatePreview = debounce(1200, this.updatePreview);
    }

    updatePreview(value){
        this.setState({previewUrl: value});
    }

    render () {
        return (
            <div className="optional-list">
                <MuiThemeProvider>
                    <Card>
                        <CardHeader
                            title={this.formatMessage({id: "toggle"})}
                            subtitle={this.formatMessage({id: "toggleSub"})}
                            actAsExpander={true}
                            showExpandableButton={true}
                            titleStyle={{paddingLeft: 90}} //hack! yack!
                            subtitleStyle={{paddingLeft: 90, marginTop: 10}} //hack! yack!
                        />
                        <CardText expandable={true}>
                            <Field name="youtube" component={renderTextField} label={this.formatMessage({id: "youtube"})}/>
                            <Field name="link"
                                   component={renderTextField}
                                   onChange={(event, value) => {
                                       this.updatePreview(value)
                                   }}
                                   label={this.formatMessage({id: "link"})}/>
                            <Preview url={this.state.previewUrl}/>
                        </CardText>
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default injectIntl(OptionalCard);