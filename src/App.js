import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="title" className="col-sm-2 control-label">Username</label>
            <div className="col-sm-10">
              <input className="form-control" readOnly value=""/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input className="form-control" readOnly value=""/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-2">
            </div>
            <div className="col-sm-10">
              <button type="button" class="btn btn-success">Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
