import React, {  } from 'react';

const display = {
    display: 'block'
  };
  const hide = {
    display: 'none'
  };
  
  export default class LogInPopup extends React.Component {
    constructor(props) {
      super(props);
      this.OnSubmit = this.OnSubmit.bind(this);
      this.state = {
        toggle: true
      }
    }
  
    OnSubmit=()=> {
      alert("Logged In successfully");
        this.setState((prevState) => ({
        toggle: !prevState.toggle
      }));
    }
    render() {
    
      return (
        <div className="modal" style={this.state.toggle ? display : hide}>
        <div className="modal-content">
          <h4>Modal Header</h4>
        </div>
        <div className="modal-footer">
          <a className="btn-flat" onClick={this.OnSubmit}>Submit</a>
        </div>
      </div>
      );
    }
  }