import React, { Component } from 'react';

export default class Support extends Component {
  render() {
    return(
      <div className="container-fluid pt-2 mt-2">
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );   
  }
}
