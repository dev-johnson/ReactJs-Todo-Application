import React from 'react';

export default class DynamicTableForm extends React.Component {

  handleFormSubmit(event){
    event.preventDefault();
    const formData = {};
    var index = document.getElementById('selector_field').value;
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    if (this.props.newForm) {
      this.props.addNew(formData);
    }else{
      this.props.update(formData, index);
    }
    document.getElementById('dynamic-form').reset();
  }

  render(){

    const fields = this.props.fields.map((field, index) => <div key={index} className="form-group col-lg-3 col-sm-6 col-xs-12"><input ref={field} type="text" className="form-control" id={'form_field_'+field} placeholder={field}/></div>);

    return(
      <div className={this.props.showFrom ? "show" : "hide"}>
        <form onSubmit={this.handleFormSubmit.bind(this)} id="dynamic-form">
          <div className="row clear-margin">
            {fields}
            <input type="hidden" id="selector_field"/>
          </div>
          <div className="row spaced spaced-bottom clear-margin">
            <div className="col-lg-6 col-sm-6 col-xs-12 text-center col-centered">
              <input type="submit"  value={this.props.newForm ? "Create" : "Update"} className="btn btn-primary" />
              <button className="btn btn-default" onClick={this.props.buttonEvent}>Cancel</button>
            </div>
          </div>
        </form>
      </div>

    )
  }
}
