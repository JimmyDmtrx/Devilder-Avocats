import React from 'react';
import sectors from '../data/data';

const Secteurs = () => {
  return (
    <div className="secteurContent container">
      <section className="row">
        <article className="mt-5">
          <p>
            {' '}
            Devilder Avocats déploie ses expertises au profit de clients
            intervenant dans divers domaines d’activité et s'adapte à tout
            secteur d'activité, ce qui lui a permis d’acquérir une expertise «
            métier » dans les domaines concernés.
          </p>
          <p>Il s’agit notamment des secteurs d’activité suivants :</p>
        </article>
        <article className="sector-listing">
          <ul className="row mt-5 d-flex justify-content-between">
            {sectors.map((sector, index) => {
              return (
                <li
                  key={index}
                  className="col-4 mb-4 p-5 d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url( ${sector.imgurl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '30%',
                    height: '40vh',
                    borderRadius: '3px',
                  }}
                >
                  {/* <img
                    className="img-sector"
                    src={sector.imgurl}
                    alt="sector img"
                    style={{ width: '100%', height: '100%' }}
                  /> */}

                  <p className="sector-text">{sector.name}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Secteurs;
