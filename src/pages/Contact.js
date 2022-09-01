// import {React} from 'react';
import geo from "../styles/icons/geo-alt.svg";
import phone from "../styles/icons/phone.svg";
import mail from "../styles/icons/mail.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import GDN from "../styles/images/GDN2.jpg";

const Contact = () => {
  return (
    <>
      <div>
        {" "}
        <img
          className="librairy"
          style={{ width: "100vw", height: "60vh", objectFit: "cover" }}
          src={GDN}
          alt="librairy"
        />
      </div>
      <div className="contactContent container mt-5 mb-5 pb-5">
        {/* <h1 className='title mt-5 mb-5 text-center'>Nous contacter</h1> */}
        <section>
          <p>Une question ? Une problématique ?</p>
          <p>
            N’hésitez pas à nous contacter, nous vous répondrons dans les
            meilleurs délais.
          </p>
        </section>
        <section className="row mt-5 d-flex justify-content-between align-items-end">
          <article className="col-4 d-flex flex-column align-items-center shadow-sm">
            <img className="icons" src={geo} alt="geo ping" />
            <h4> Adresse</h4>

            {/* <h5>Devilder Avocats</h5> */}
            <p> 11-13, rue de Belzunce, 75010 Paris </p>
          </article>
          <article className="col-4 d-flex flex-column align-items-center shadow-sm">
            <img className="icons" src={phone} alt="geo ping" />
            <h4>Téléphone</h4>
            <CopyToClipboard text="0142424242">
              <p
                className="tobeclicked"
                onClick={() => {
                  alert("téléphone copié");
                }}
              >
                +33 1 42 42 42 42
              </p>
            </CopyToClipboard>

            {/* <small className='fs-6' >cliquez pour copier nos coordonnées </small> */}
          </article>
          <article className="col-4 d-flex flex-column align-items-center shadow-sm">
            <img className="icons" src={mail} alt="geo ping" />
            <h4>E-mail</h4>
            <CopyToClipboard text="contact@devilder">
              <p
                className="tobeclicked"
                onClick={() => {
                  alert("email copié");
                }}
              >
                contact@devilder-avocats.fr
              </p>
            </CopyToClipboard>

            {/* <small className='fs-6'>cliquez pour copier nos coordonnées </small> */}
          </article>
        </section>
      </div>
    </>
  );
};

export default Contact;
