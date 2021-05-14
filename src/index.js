import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebaseConfig';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import './index.css';

ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={<h4>Loading...</h4>}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Suspense>
    </FirebaseAppProvider>,   
    document.getElementById('root')
);
 