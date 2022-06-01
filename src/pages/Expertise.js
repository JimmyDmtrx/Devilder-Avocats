
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
      <h1 className="title mt-5 text-center mb-3">Nos expertises</h1>

      <section className="categ-container mt-5">
        <div className="categ-expertise border" onClick={handleCateg1}>
          Contrats commerciaux
        </div>

        <div onClick={handleCateg2} className="categ-expertise border">
          Concurrence
        </div>
        <div onClick={handleCateg3} className="categ-expertise border">
          Distribution et consommation
        </div>
        <div onClick={handleCateg4} className="categ-expertise border">
          Immobilier et construction
        </div>
        <div onClick={handleCateg5} className="categ-expertise border">
          Contentieux et résolution des litiges
        </div>
      </section>
    </div>
  );
};

export default Expertise;
