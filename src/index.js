import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {IntlProvider, addLocaleData} from 'react-intl';
import {en, he} from './resources/translations'
import heLocaleData from 'react-intl/locale-data/he';
import enLocaleData from 'react-intl/locale-data/en';

// Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


addLocaleData([...heLocaleData, ...enLocaleData]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

class Root extends Component {
    constructor() {
        super();
        this.state = {
            translations: null,
        };
    }

    componentWillMount() {
        this.setState({
            translations: language === "en-IL" || language === "he-IL" ? he : en
        });
    }

    render() {
        let app;
        if (this.state.translations) {
            app = (
                <IntlProvider locale={language} messages={this.state.translations}>
                    <App/>
                </IntlProvider>
            );
        }

        return <div>{app}</div>;
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
