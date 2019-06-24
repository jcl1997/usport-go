import React, { Component } from 'react';
import './../css/progressBar.css'

export default class ProgressBar extends Component {
  render() {
    return (
      <div>
        <h5 className="card-title text-center">Rank: 1</h5>
        <div className="progress progress-striped">
          <div className="progress-bar" />
        </div>
        <p className="card-text text-center">50/100&nbsp;XP</p>
      </div>
    );
  }
}
