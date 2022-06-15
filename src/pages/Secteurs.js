import React from 'react';
import books from "../styles/images/books.jpg"

const Secteurs = () => {
    return (
        <div className='secteurContent container'>
        <section className='row '>
            
                <article className='col-4 mt-5'>
                    <img style={{width:"100%"}} src={books} alt="books" />
                </article>
                <article className='col-8 mt-5'>
                    <p> Devilder Avocats déploie ses expertises au profit de
                        clients intervenant dans divers domaines d’activité et s'adapte à tout
                        secteur d'activité, ce qui lui a permis d’acquérir une expertise «
                        métier » dans les domaines concernés.
                        </p>
                        <p>Il s’agit notamment des secteurs
                        d’activité suivants :</p> 
                <ul className='row mt-5 d-flex justify-content-between'>
                    <li className='col-5 mb-4 p-3 rounded-pill'>Tech - Numérique</li>
                    <li className='col-5 mb-4 p-3 rounded-pill'>Vente en ligne</li>
                    <li className='col-5 mb-4 p-3 rounded-pill '>Bancaire - Services de paiement</li>
                    <li className='col-5 mb-4 p-3 rounded-pill'>Transport</li>
                    <li className='col-5 mb-4 p-3 rounded-pill'>Automobile</li>
                    <li className='col-5 mb-4 p-3 rounded-pill'>Agriculture</li>
                    <li className='col-5 mb-4 p-3 rounded-pill'>Vente aux enchères</li>
                    <li className='col-5 mb-4 p-3 rounded-pill'>Hôtellerie-restauration</li>
                </ul>
            </article>
                
                
                
            </section>
            
      
        </div>
    );
};

export default Secteurs;