import React, { Component } from 'react';

class Clients extends Component {
  render() {

    if(this.props.data){
      var brands = this.props.data.brands.map(function(brands){
        var projectImage = 'images/clients/'+brands.image;
        return <div key={brands.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={brands.url} title={brands.title}>
               <img alt={brands.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{brands.title}</h5>
                     <p>{brands.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="clients">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Clients I have work with.</h1>

            <div id="clients-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {brands}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Clients;
