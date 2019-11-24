/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component,Fragment, } from 'react';
import {connect} from 'react-redux';
import CanvasJSReact from './canvasjs.react';
import NotiAdmin from '../NotiAdmin/NotiAdmin';
import styles from './DashboardAdmin.module.css'
import FooterAdmin from '../FooterAdmin/FooterAdmin';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class DashboardAdmin extends Component {
  constructor() {
		super();
		this.generateDataPoints = this.generateDataPoints.bind(this);
	}
	
	generateDataPoints(noOfDps) {
		var xVal = 1, yVal = 100;
		var dps = [];
		for(var i = 0; i < noOfDps; i++) {
			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
			dps.push({x: xVal,y: yVal});	
			xVal++;
		}
		return dps;
	}
    render() {
      const options1 = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "dark1", "dark2"
        title:{
          text: "Trip Expenses"
        },
        data: [{
          type: "pie",
          indexLabel: "{label}: {y}%",		
          startAngle: -90,
          dataPoints: [
            { y: 20, label: "Airfare" },
            { y: 24, label: "Food & Drinks" },
            { y: 20, label: "Accomodation" },
            { y: 14, label: "Transportation" },
            { y: 12, label: "Activities" },
            { y: 10, label: "Misc" }	
          ]
        }]
      }
      const options = {
        theme: "light2", // "light1", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        title: {
          text: "Try Zooming and Panning"
        },
        axisY: {
          // gridColor:'red',
          includeZero: false
        },
        data: [{
          markerColor:'red',
          markerBorderColor:'green',
          type: "area",
          dataPoints: this.generateDataPoints(500)
        }]
      }
        return (
            <Fragment>
              <div className={styles.notification}>

          <NotiAdmin/>
              </div>
        <div id="page-top">
  <div id="wrapper">
    <div style={{width:'86%',margin:'auto 0 auto auto',paddingTop:'90px'}} id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-warning shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-danger shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Earnings (Monthly)</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                    </div>
                    <div className="col-auto">
                      <img src="./assets/images/calendar.svg" width="30px" height="40px" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Annual)</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                    </div>
                    <div className="col-auto">
                    <img src="./assets/images/currency.svg" width="30px" height="40px" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                    <img src="./assets/images/task.svg" width="30px" height="40px" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                    </div>
                    <div className="col-auto">
                    <img src="./assets/images/computer.svg" width="30px" height="40px" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-danger">Earnings Overview</h6>
                  <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <div className="dropdown-header">Dropdown Header:</div>
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <CanvasJSChart style={{height:'100%'}} options = {options}/>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-danger">Revenue Sources</h6>
                </div>
                <div className="card-body">
                  <CanvasJSChart options = {options1} />     
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-danger">Projects</h6>
                </div>
                <div className="card-body">
                  <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
                  <div className="progress mb-4">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
                  <div className="progress mb-4">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
                  <div className="progress mb-4">
                    <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
                  <div className="progress mb-4">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card bg-primary text-white shadow">
                    <div className="card-body">
                      Primary
                      <div className="text-white-50 small">#4e73df</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-success text-white shadow">
                    <div className="card-body">
                      Success
                      <div className="text-white-50 small">#1cc88a</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-info text-white shadow">
                    <div className="card-body">
                      Info
                      <div className="text-white-50 small">#36b9cc</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-warning text-white shadow">
                    <div className="card-body">
                      Warning
                      <div className="text-white-50 small">#f6c23e</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-danger text-white shadow">
                    <div className="card-body">
                      Danger
                      <div className="text-white-50 small">#e74a3b</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-secondary text-white shadow">
                    <div className="card-body">
                      Secondary
                      <div className="text-white-50 small">#858796</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-danger">Illustrations</h6>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src="./assets/images/undraw_posting_photo.svg" alt />
                  </div>
                  <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                  <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw →</a>
                </div>
              </div>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-danger">Development Approach</h6>
                </div>
                <div className="card-body">
                  <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
                  <p className="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <FooterAdmin/>
    </div>
  </div>
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
 
</div>
            </Fragment>
        )
    }
}

export default connect (null,null)(DashboardAdmin);