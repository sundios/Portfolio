import React, { Component } from 'react';
import ScreamingFrog from '../tools-img/screaming-frog-logo.png';
import SearchMetrics from '../tools-img/search-metrics.png';
import DeepCrawl from '../tools-img/deepcrawl.png';
import Stat from '../tools-img/stat.png';
import Google from '../tools-img/google.png';
import Majestic from '../tools-img/majestic.png';
import Keywordtool from '../tools-img/keywordtool.png';

class Seo extends Component {
  

  render() {
    return (

    	<div className="twelve columns m">
      		<h1> SEO </h1>
      			<div className="box">
      				<img src={ScreamingFrog} alt="Screaming Frog Logo" />
      				<h6> Screaming Frog </h6>
      			</div>
      			<div className="box">
      				<img src={SearchMetrics} alt="Search Metrics Logo" />
      				<h6> Search Metrics </h6>
      			</div>
      			<div className="box">
      				<img src={DeepCrawl} alt="DeepCrawl Logo" />
      				<h6> DeepCrawl </h6>
      			</div>
      			<div className="box">
      				<img src={Stat} alt="Stat Logo" />
      				<h6> Stat </h6>
      			</div>
      			<div className="box">
      				<img src={Google} alt="Google Search Console Logo" />
      				<h6> Google Search Console </h6>
      			</div>
      			<div className="box">
      				<img src={Majestic} alt="Majestic Logo" />
      				<h6> Majestic </h6>
      			</div>
      			<div className="box">
      				<img src={Keywordtool} alt="Keywordtool Logo" />
      				<h6> Keywordtool.io </h6>
      			</div>
      	</div>
    );
  }
}

export default Seo;



