import React, { Component } from 'react';
import CanvasJSReact from './../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default class DWLYearsChartBar extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      title:{
        text: 'Draws - Wins - Losses (Years)'
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
            { label: 2017, y: 25 },
            { label: 2018, y: 30 },
            { label: 2019, y: 45 },
          ]
        },
        {
          type: "column",
          name: "Wins",
          showInLegend: true,
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { label: 2017, y: 20 },
            { label: 2018, y: 30 },
            { label: 2019, y: 50 },
          ]
        },
        {
          type: "column",
          name: "Losses",
          showInLegend: true,
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { label: 2017, y: 55 },
            { label: 2018, y: 40 },
            { label: 2019, y: 5 },
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
