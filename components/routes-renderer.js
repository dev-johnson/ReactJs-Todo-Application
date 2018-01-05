import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../routes';

export default class RoutesRenderer extends React.Component {

  constructor() {
    super();
  }
  
  render() {
    const routeComponents = routes.map(({path, component}, index) => <Route path={path} component={component} key={index} />);
    return (
      <BrowserRouter>
        <div>
          {routeComponents}
        </div>
      </BrowserRouter>
    );
  }
}
