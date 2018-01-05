import React from 'react';
import axios from 'axios';
import DynamicTableForm from './dynamic-table-form';
import DynamicTableRows from './table-rows';
import AddNewButton from './add-new-button';

export default class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {columns: [], list: [], showFrom: false, newForm: true}
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData(){
    var self = this;
    var rejected = self.props.rejected_cols
    axios.get(self.props.url)
    .then(function(response){
      var data = response.data;
      var newColumns = [];
      for (let key in data[0]) {
        if(rejected.indexOf(key) === -1){
          newColumns.push(key)
        }
      }
      self.setState({list: data, columns: newColumns})
    });
  }

  createRecord(data){
    var self = this;
    var list = self.state.list.slice()
    list.unshift(data)
    self.setState({ list: list })
    self.toggleForm();
  }

  deleteRecord(index){
    var self = this;
    var tempList = self.state.list.slice()
    if (confirm("Do you want to delete ?")) {
      tempList.splice(index, 1);
      self.setState({ list: tempList })
    }
  }

  populator(index){
    var self = this
    var tempList = self.state.list.slice()
    var selected = tempList[index]
    for (const field of this.state.columns) {
      var form_field = document.getElementById('form_field_'+field);
      form_field.value =selected[field]
    }
    document.getElementById('selector_field').value = index;
    self.toggleForm();
    self.setState({newForm: false})
  }

  updateList(data, index) {
    var self = this;
    console.log(index)
    console.log(data)
    var newlist = this.state.list.slice()
    console.log(newlist[index])
    newlist[index] = data;
    console.log(newlist);

    self.setState({ list: newlist })
    self.toggleForm();
    self.setState({newForm: true})
  }

  toggleForm(){
    document.getElementById('dynamic-form').reset();
    var self = this;
    self.setState({showFrom: !this.state.showFrom});
  }

  render(){
    const list = this.state.list;
    const columns = this.state.columns;
    const show = this.state.showFrom;
    const newForm = this.state.newForm;
    const tabelHead = columns.map((column,index) => <th key={index}>{column}</th>);
    return(
      <div className="spaced spaced-bottom">
        {/* new button for the form */}
        <div className="spaced-bottom">
          <AddNewButton buttonEvent={() => this.toggleForm()}/>
        </div>
        {/* form for crud operations */}
        <DynamicTableForm fields={columns} addNew={this.createRecord.bind(this)} showFrom={show} update={this.updateList.bind(this)} newForm={newForm} buttonEvent={this.toggleForm.bind(this)}/>
        {/* dynamic table */}
        <div className="row clear-margin">
          <div className="col-xs-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  { tabelHead }
                  <th>Actions</th>
                </tr>
              </thead>
                <tbody>
                  {list.map((row, index) => <DynamicTableRows data={row} key={row.id} columns={columns} remove={this.deleteRecord.bind(this)} index={index} editRecord={this.populator.bind(this)}/>)}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
