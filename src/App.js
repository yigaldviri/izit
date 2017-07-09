import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { reducer as reduxFormReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import {FormattedMessage} from 'react-intl';

import './App.css';
import logo from './resources/logo.png'
import IzItForm from './components/IzItForm';
import Izit from './components/Izit';
import About from './components/About';
import Nowhere from './components/Nowhere';

const reducer = combineReducers({
    form: reduxFormReducer // mounted under "form"
});
const store =  (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

const ErrorPanel = (props)=> {
    if (!props.error || Object.getOwnPropertyNames(props.error).length === 0){
        return null;
    }
    return (
        <div className="error-panel">
            <FormattedMessage id={props.error}/>
        </div>
    )
};

const Design = (props) => <Provider store={store}><IzItForm onError={props.route.onError}/></Provider>;
const Published = (props) => <div><Izit token={props.params.token}/></div>;
const AboutPage = (props) => <div><About/></div>;
const NotFound = () => <Nowhere/>;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleError(error) {
        this.setState({error : error ? error : null});
    }

    goTo(where) {
        browserHistory.push(where);
    }

    render() {
        return (
            <div className="App">
                <div className="App-content">
                    <div className="App-header">
                        <div>
                            {<img src={logo} className="Izit-title" onClick={() => this.goTo("/")} alt="iZit.io"/>}
                        </div>
                        <div className="Izit-description">It's the final countdown. Ti di di di. Ti di di di di.</div>
                    </div>
                    <Router history={browserHistory}>
                        <Route path="/" component={Design} onError={this.handleError.bind(this)}/>
                        <Route path="/:token" component={Published} />
                        <Route path="/ext/about" component={AboutPage} />
                        <Route path="*" component={NotFound} />
                    </Router>
                    <ErrorPanel error={this.state.error}/>
                </div>
                <div className="footer">
                    <div onClick={() => this.goTo("/ext/about")}>© 2017 iZit.io | About</div>
                    <div style={{fontSize: 5}}>I Hate I18N</div>
                </div>
            </div>
        );
    }
}

export default App;
