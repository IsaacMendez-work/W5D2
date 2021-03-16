import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassComp from './practicingComponents/ClassComp';
import FuncComp from './practicingComponents/FunctionalComp';
{/* the command to open react in a page is: npm start */}

ReactDOM.render(
  <React.StrictMode>
    <App />

    {/* We can add components here to be added after <App /> is finished rendering, or we can add it so that it's actually in <App /> by adding these components to App.js */}
    <ClassComp />
    <FuncComp />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
