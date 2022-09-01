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
                  className="col-4 d-flex flex-column align-items-center mb-4"
                >
                  <img
                    className="img-sector"
                    src={sector.imgurl}
                    alt="sector img"
                    style={{ width: '100%', height: '100%' }}
                  />

                  <p className="sector-text mt-2 mb-4 ">{sector.name}</p>
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
