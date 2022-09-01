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
        <article className="sector-listing d-flex justify-content-between">
          <ul className="mt-5 d-flex justify-content-between flex-wrap">
            {sectors.map((sector, index) => {
              return (
                <li
                  key={index}
                  className="mb-5 pt-5 pb-5 d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url( ${sector.imgurl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '3px',
                    marginBottom: '1rem',
                    width: '30%',
                    height: '45vh',
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
