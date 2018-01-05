import React from 'react';

export default class DynamicTableRows extends React.Component {

  remove(id, event){
    event.preventDefault();
    this.props.remove(id)
  }
  edit(id, event){
    event.preventDefault();
    console.log(this.props.columns)
    this.props.editRecord(id);
  }
  render(){
    const row = this.props.data;
    const tableRow = this.props.columns.map((record, index) => <td key={index}>{row[record]}</td>);
    return(
      <tr key={row.id}>
        { tableRow }
        <td className="text-center">
  				<span title="Edit" className="dull-black-text" onClick={this.edit.bind(this, this.props.index)}><i className="fa fa-pencil" aria-hidden="true"></i></span>&nbsp;&nbsp;

    			<a href="javascript:void(0);" title="Delete" value={row.id} className="dull-black-text" onClick={this.remove.bind(this, this.props.index)}><i className="fa fa-trash" aria-hidden="true"></i></a>
    		</td>
      </tr>
    )
  }
}
