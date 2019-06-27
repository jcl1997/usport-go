import React, { Component } from 'react';
import DWLYearsChartBar from './DWLYearsChartBar';
import DWLYearsChartBarMonths from './DWLMonthsChartBar';
 
export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid px-lg-5">
        <div className="row mx-lg-n5">
          <div className="p-3 col-sm-12 col-md-6">
            <DWLYearsChartBar />
          </div>
          <div className="p-3 col-sm-12 col-md-6">
            <DWLYearsChartBarMonths />
          </div>
        </div>
      </div>
    );
  }
}
