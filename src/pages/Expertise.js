
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
      <h1 className="title mt-4 text-center">Expertise</h1>

      <section className="categ-container">
        <div className="categ-expertise" onClick={handleCateg1}>
          Contrats commerciaux
        </div>

        <div onClick={handleCateg2} className="categ-expertise">
          Concurrence
        </div>
        <div onClick={handleCateg3} className="categ-expertise">
          Distribution et consommation
        </div>
        <div onClick={handleCateg4} className="categ-expertise">
          Immobilier et construction
        </div>
        <div onClick={handleCateg5} className="categ-expertise">
          Contentieux et résolution des litiges
        </div>
      </section>
    </div>
  );
};

export default Expertise;
