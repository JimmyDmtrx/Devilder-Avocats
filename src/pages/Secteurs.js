import React from 'react';
import books from "../styles/images/books.jpg"

const Secteurs = () => {
    return (
        <div className='secteurContent container'>
        <section className='row'>
            
                <article className='col-4 mt-5'>
                    <img style={{width:"100%"}} src={books} alt="books" />
                </article>
                <article className='col-8'>
                <h1 className='title mt-5 mb-5 text-center fs-2'>Nos domaines d'intervention</h1>
                    <p> Devilder Avocats déploie ses expertises au profit de
                        clients intervenant dans divers domaines d’activité et s'adapte à tout
                        secteur d'activité, ce qui lui a permis d’acquérir une expertise «
                        métier » dans les domaines concernés.
                        </p>
                        <p>Il s’agit notamment des secteurs
                        d’activité suivants :</p> 
                <ul className='row mt-5 d-flex justify-content-between'>
                    <li className='col-5 mb-4 p-3'>Tech - Numérique</li>
                    <li className='col-5 mb-4 p-3'>Vente en ligne</li>
                    <li className='col-5 mb-4 p-3'>Bancaire - Services de paiement</li>
                    <li className='col-5 mb-4 p-3'>Transport</li>
                    <li className='col-5 mb-4 p-3'>Automobile</li>
                    <li className='col-5 mb-4 p-3'>Agriculture</li>
                    <li className='col-5 mb-4 p-3'>Vente aux enchères</li>
                    <li className='col-5 mb-4 p-3'>Hôtellerie-restauration</li>
                </ul>
            </article>
                
                
                
            </section>
            
      
        </div>
    );
};

export default Secteurs;