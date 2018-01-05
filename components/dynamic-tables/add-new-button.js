import React from 'react';

export default class AddNewButton extends React.Component {
  render(){
    return(
      <div className="container row">
        <div className="col-xs-12 text-right">
          <button className="btn btn-success" onClick={this.props.buttonEvent}><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Add New</button>
        </div>
      </div>
    )
  }
}
