// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import UserManagement from './UserManagement'; 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './UserManagement';


// ReactDOM.render(
//     <React.StrictMode>
//         <UserManagement />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// ...
