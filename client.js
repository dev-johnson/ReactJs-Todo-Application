import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import App from './components/main';

/*
* use BrowserRouter instead of HashRouter if you dont want to have the # symbol over the url and the most
* preferable way is to use BrowserRouter
*
* Note BrowserRouter needs a server to catch all the request and pass it to the react index html file for further * process... here i haven't using any server so i used HashRouter
*
*/

ReactDom.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
