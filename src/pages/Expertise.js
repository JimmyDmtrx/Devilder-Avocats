import { useNavigate } from 'react-router-dom';
import { React } from 'react';

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
  const handleCateg6 = () => {
    navigate(`/contentieux`);
  };
  // navigate("/commercial-contrat")
  return (
    <div className="container">
      <section className="categ-container mt-5 pt-5">
        <div className="categ-expertise shadow" onClick={handleCateg1}>
          Contrats commerciaux
        </div>

        <div onClick={handleCateg2} className="categ-expertise shadow">
          Concurrence
        </div>
        <div onClick={handleCateg6} className="categ-expertise shadow">
          Contentieux
        </div>

        <div onClick={handleCateg4} className="categ-expertise shadow">
          Immobilier - Construction
        </div>
        <div onClick={handleCateg5} className="categ-expertise shadow">
          Droit des sociétés
        </div>
        <div onClick={handleCateg3} className="categ-expertise shadow">
          <p>Distribution & Consommation</p>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
