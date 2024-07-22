/**
 *
 * @format
 */

import React from 'react';
import { Navigation } from '@navigation/index';
import { Provider } from '@utils/providers/Provider';

function App(): React.JSX.Element {
    return (
        <Provider>
            <Navigation />
        </Provider>
    );
}

export default App;
