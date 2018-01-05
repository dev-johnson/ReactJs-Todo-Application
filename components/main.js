import React from 'react';
import Header from './header/headerbar';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import routes from '../routes';
import HomePage from './home/index';
import PostTable from './posts/posts-list';
import RoutesRenderer from './routes-renderer';

export default class App extends React.Component {

  render(){
    const routeComponents = routes.map(({path, component}, index) => <Route exact path={path} component={component} key={index} />);

    return (
      <div className="clear-margin">
        <Header />
        {routeComponents}
      </div>
    );
  }
}
