import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    }
};

const IzitLoader = ({loaderSize}) => (
    <div style={style.container}>
        <MuiThemeProvider>
            <RefreshIndicator
                size={loaderSize || 70}
                left={0}
                top={10}
                loadingColor="#004d40"
                status="loading"
                style={style.refresh}
            />
        </MuiThemeProvider>
    </div>
);

export default IzitLoader;