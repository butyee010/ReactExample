/**
 * Created by USER on 10/01/2018.
 */
import React from 'react';
import ReactDOM  from 'react-dom';
import Root from './components/root';
import {AppContainer} from 'react-hot-loader'

const rootElement = document.getElementById('root');

ReactDOM.render(
    <AppContainer warnings={false}>
        <Root />
    </AppContainer>,
    rootElement
)

if (module.hot) {
    module.hot.accept('./components/root', () => {
        const NextRootApp = require('./components/root').default
        ReactDOM.render(
            <AppContainer>
                <NextRootApp />
            </AppContainer>,
            rootElement
        );
    });
}
