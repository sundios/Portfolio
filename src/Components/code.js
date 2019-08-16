import React, { Component } from 'react';
import HtmlCss from '../tools-img/htmlcss.png';
import js from '../tools-img/js.png';
import Reactjs from '../tools-img/react.png';
import Python from '../tools-img/python.png';
import Nodejs from '../tools-img/nodejs.png';
import Mysql from '../tools-img/mysql.png';
import Airflow from '../tools-img/airflow.png';

class Code extends Component {
  

  render() {
    return (

    	<div className="twelve columns m">
      		<h1> Code & Tech </h1>
      			<div className="box">
      				<img src={HtmlCss} alt="Html, CSS Logo" />
      				<h6> HTML, CSS </h6>
      			</div>
            <div className="box">
              <img src={js} alt="Javascript Logo" />
              <h6> Javascript </h6>
            </div>
            <div className="box">
              <img src={Reactjs} alt="React Logo" />
              <h6> React </h6>
            </div>
            <div className="box">
              <img src={Python} alt="Python Logo" />
              <h6> Python </h6>
            </div>
            <div className="box">
              <img src={Nodejs} alt="NodeJs Logo" />
              <h6> Node JS </h6>
            </div>
            <div className="box">
              <img src={Mysql} alt="Mysql Logo" />
              <h6> MySQL </h6>
            </div>
            <div className="box">
              <img src={Airflow} alt="Airflow Logo" />
              <h6> Apache Airflow </h6>
            </div>

      	</div>
    );
  }
}

export default Code;



