
import { useNavigate } from "react-router-dom";
import {React} from 'react';

const Expertise = () => {
  const navigate = useNavigate();
  const handleCateg1 = () => {
    navigate(`/commercial-contrat`);
  };
  const handleCateg2 = () => {
    navigate(`/concurrence`);
  };
  const handleCateg3 = () => {
    navigate(`/distribution`);
  };
  const handleCateg4 = () => {
    navigate(`/immobilier`);
  };
  const handleCateg5 = () => {
    navigate(`/contentieux`);
  };
  // navigate("/commercial-contrat")
  return (
    <div className="container">
      <h1 className="title mt-5 text-center">Nos expertises</h1>

      <section className="categ-container mt-5 pt-5">
        <div className="categ-expertise shadow" onClick={handleCateg1}>
          Contrats commerciaux
        </div>

        <div onClick={handleCateg2} className="categ-expertise shadow">
          Concurrence
        </div>
        <div onClick={handleCateg3} className="categ-expertise shadow">
          Distribution - Consommation
        </div>
        <div onClick={handleCateg4} className="categ-expertise shadow">
          Immobilier - Construction
        </div>
        <div onClick={handleCateg5} className="categ-expertise shadow">
          Droit des sociétés 
        </div>
        <div onClick={handleCateg5} className="categ-expertise shadow">
          Contentieux 
        </div>
        
      </section>
    </div>
  );
};

export default Expertise;
