import React from 'react';

export default class NotFound extends React.Component {
  render(){
    return(
      <div>
        <div className="spaced spaced-bottom">
          <div className="row grey-background spaced spaced-bottom">
            <div className="col-lg-12 col-centered">
              <h1 className="clear-margin spaced post-title">Oops the page you are looking for doesnot exists</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
