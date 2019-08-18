import React, { Component } from 'react';


class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var seo = this.props.data.seo.map(function(seo){
        var projectImage = 'images/tools-img/'+seo.image;
        return <div key={seo.title}>
              <a href={seo.url} title={seo.title} target="_blank">
                <div className="box">
                  <img src={projectImage} alt={seo.name + " logo"} />
                    <h6> {seo.name}</h6>
                </div>
               </a> 
              </div> 
      })
      var code = this.props.data.code.map(function(code){
        var projectImage = 'images/tools-img/'+code.image;
        return <div key={code.title}>
              <a href={code.url} title={code.title} target="_blank">
                <div className="box">
                  <img src={projectImage} alt={code.name + " logo"} />
                    <h6> {code.name}</h6>
                </div>
               </a> 
              </div> 
      })
      var tools = this.props.data.tools.map(function(tools){
        var projectImage = 'images/tools-img/'+tools.image;
        return <div key={tools.title}>
              <a href={tools.url} title={tools.title} target="_blank">
                <div className="box">
                  <img src={projectImage} alt={tools.name + " logo"} />
                    <h6> {tools.name}</h6>
                </div>
               </a> 
              </div> 
      })

      var languages = this.props.data.languages.map(function(languages){
        var projectImage = 'images/languages/'+languages.image;
        return <div key={languages.title}>
                <div className="box">
                  <img src={projectImage} alt={languages.name} />
                    <h6> {languages.name}</h6>
                </div>
              </div> 
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Pro Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>
			</div>
      <div className="skill_column">
      <h1> SEO </h1>
      {seo}
      </div>

      <div className="skill_column">
      <h1> Code & Tech </h1>
      {code}
      </div>

      <div className="skill_column">
      <h1> Other tools </h1>
      {tools}
      </div>

      <div className="skill_column">
      <h1> Languages </h1>
      {languages}
      </div>

      </div>
   </section>
    );
  }
}

export default Resume;
