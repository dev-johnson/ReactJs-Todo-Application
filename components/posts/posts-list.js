import React from 'react';
import Table from '../dynamic-tables/table';

export default class PostTable extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="row clear-margin spaced spaced-bottom">
        <div className="col-xs-12">
          <h1 className=" clear-margin post-title">Posts Table</h1>
        </div>
        <div className="col-xs-12">
          <Table url="https://jsonplaceholder.typicode.com/posts" rejected_cols="['userId', 'body']" />
        </div>
      </div>
    )
  }
}
