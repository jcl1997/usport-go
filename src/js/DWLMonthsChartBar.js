import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default class DWLYearsChartBar extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      title:{
        text: 'Draws - Wins - Losses (MONTHS)'
      },
      axisY: {
        title: "Growth Rate (in %)",
        suffix: "%",
        includeZero: true
      },
      data: [
        {
          type: "column",
          name: "Draw",
          showInLegend: true,
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { label: "January", y: 10 },
            { label: "February", y: 15 },
            { label: "March", y: 5 },
            { label: "April", y: 10 },
            { label: "May", y: 15 },
            { label: "June", y: 5 },
            { label: "July", y: 15 },
            { label: "August", y: 10 },
            { label: "September", y: 5 },
            { label: "October", y: 10 },
            { label: "November", y: 15 },
            { label: "December", y: 5 },
          ]
        },
        {
          type: "column",
          name: "Wins",
          showInLegend: true,
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { label: "January", y: 50 },
            { label: "February", y: 45 },
            { label: "March", y: 30 },
            { label: "April", y: 50 },
            { label: "May", y: 45 },
            { label: "June", y: 30 },
            { label: "July", y: 50 },
            { label: "August", y: 45 },
            { label: "September", y: 30 },
            { label: "October", y: 50 },
            { label: "November", y: 45 },
            { label: "December", y: 30 },
          ]
        },
        {
          type: "column",
          name: "Losses",
          showInLegend: true,
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { label: "January", y: 40 },
            { label: "February", y: 40 },
            { label: "March", y: 65 },
            { label: "April", y: 40 },
            { label: "May", y: 40 },
            { label: "June", y: 65 },
            { label: "July", y: 40 },
            { label: "August", y: 40 },
            { label: "September", y: 65 },
            { label: "October", y: 40 },
            { label: "November", y: 40 },
            { label: "December", y: 65 },
          ]
        }
      ]
    }
    
    return (
        <div className="ChartWithIndexLabel">
            <CanvasJSChart options = {options} />
        </div>
    );
  }
}
