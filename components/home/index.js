import React from 'react';

export default class HomePage extends React.Component {
  render(){
    return(
      <div className="row grey-background highly-spaced highly-spaced-bottom clear-margin">
        <div className="col-lg-9 col-sm-10 col-xs-12 col-centered text-center">
          <div className="row clear-margin">
            <div className="col-xs-12">
              <h1 className="clear-margin spaced hero-text-title">Welcome to the simple ToDo application using ReactJs</h1>
            </div>
          </div>
          <div className="row clear-margin">
            <div className="col-lg-7 col-sm-10 col-xs-12 col-centered">
              <p className="clear-margin full-spaced spaced-bottom hero-text-desc">This a simple application using <code>http://jsonplaceholder.typicode.com</code> api for demonstrating the basic of reactjs</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 text-center full-spaced">
          <a href="/posts" className="btn flat-green-btn">View Posts</a>
        </div>
      </div>
    )
  }
}
