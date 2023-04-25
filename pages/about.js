import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>About | commerce</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                BoutiqueKZ
              </h2>
              <h4 className="font-size-subheader mb-4">
              Somos una tienda de ropa online, nuestro propósito es ser tu mejor opción al momento de vestir para que puedas decir adiós al “NO TENGO QUE PONERME” 
              </h4>
              <h5 className="font-size-subheader mb-4">Trabajo De Titulación De La Utmach Para La Carrera Ingeniería De Sistemas</h5>
              <h6 className="font-size-subheader mb-4">Desarrollo De Prototipo De E-Commerce Para Boutiques Con Soporte De Toma De Decisiones Mediante El Uso De La Metodología Swirl</h6>
              <div className="about-cjs mt-3 d-flex flex-row">
                <span className="px-4 py-3 font-color-white about-doc" href="/" rel="noopener noreferrer">
                  Ir a la página principal
                </span>
                
              </div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              {/* <img src="/images/logoutmach.png" alt="Commerce.js illustration"/> */}
            </div>
          </div>
        </div>
      </div>

   
    </div>
    <Footer />
  </Root>
);

export default About;
