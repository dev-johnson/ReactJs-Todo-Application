import React from 'react';
import Table from '../dynamic-tables/table';

export default class UserTable extends React.Component {
  render(){
    return(
      <div className="row clear-margin spaced spaced-bottom">
        <div className="col-xs-12">
          <h1 className=" clear-margin post-title">Users Table</h1>
        </div>
        <div className="col-xs-12">
          <Table url="https://jsonplaceholder.typicode.com/users" rejected_cols="['address', 'company']" />
        </div>
      </div>
    )
  }
}
