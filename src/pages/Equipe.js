import { React } from "react";
import CecPic from "../styles/images/cecilia-photo.jpeg";
import EdPic from "../styles/images/edouard-photo.jpeg";

const Equipe = () => {
  return (
    <div className="equipeContent container">
      <section className="row">
        <article className="imgContainer col-4 me-5">
          <img style={{ width: "100%" }} src={EdPic} alt="" />
        </article>
        <article className="col-7 mb-5">
          <div className="mb-3">
            <h2 className="text-center fw-bold">Edouard Devilder</h2>
            <p className="text-center fw-bold fst-italic">Avocat fondateur</p>
          </div>
          <div>
            <p>
              Inscrit au Barreau de Paris depuis novembre 2012, Édouard est
              diplômé d’un master en droit de l’Université Paris II
              Panthéon-Assas et de l’ESSEC Business School où il a effectué le
              programme Grande Ecole.
            </p>
            <p>
              Après avoir été formé dans des cabinets d’affaires internationaux
              (Linklaters et Bredin Prat) et effectué une alternance de 2 ans en
              entreprise (Orano, ex Areva), Edouard a rejoint en 2012 le cabinet
              Freshfields Bruckhaus Deringer LLP, dans lequel il a exercé en
              tant que collaborateur libéral pendant près de 6 ans.
            </p>
            <p>
              À ce titre, Edouard est intervenu sur des problématiques
              contractuelles particulièrement complexes pour une clientèle de
              grands groupes (automobile, transport ferroviaire, grande
              distribution notamment) et sur tous les aspects du droit de la
              concurrence (contrôle des concentrations, pratiques restrictives
              et pratiques anti-concurrentielles). Il a en outre traité des
              contentieux commerciaux, civils et financiers de premier plan,
              appréhendant l’approche contentieuse des problématiques
              contractuelles et corporate dans un contexte mondial.
            </p>
            <p>
              En 2018, après avoir acquis une expérience forte dans de nombreux
              pans du droit des affaires et une connaissance approfondie de
              différentes industries, Edouard a fondé Devilder Avocats afin de
              se consacrer entièrement à ses clients.
            </p>
            <p>
              Riche de son expérience, Edouard propose une relation-client
              entreprenante, privilégiée et pragmatique.{" "}
            </p>
            <p>Ses langues de travail sont le français et l’anglais.</p>
          </div>
        </article>
      </section>
      <section className="row">
        <article className="col-7">
          <div className="mb-3">
            <h2 className="text-center fw-bold">Cécilia Trovato</h2>
            <p className="text-center fw-bold fst-italic">
              Avocate collaboratrice
            </p>
          </div>
          <div>
            <p>
              Cécilia est diplômée de l’Université Paris X où elle a obtenu un
              Master 2 de droit du commerce international et a effectué un
              semestre d’étude à l’Université Torcuato di Tella de Buenos Aires
              (Argentine).
            </p>
            <p>
              Cécilia a été formée en droit commercial, notamment au sein du
              département « droit commercial / droit de la distribution » du
              cabinet CMS Francis Lefebvre et de l’équipe « contrats commerciaux
              internationaux » de SNCF Voyages Développement, filiale dédiée au
              pilotage des partenariats internationaux de la SNCF avec les
              entreprises ferroviaires étrangères.
            </p>
            <p>
              Elle a rejoint le cabinet Devilder Avocats en juillet 2019 en tant
              que collaboratrice libérale où elle intervient principalement en
              matière de contrats d’affaires, distribution, concurrence,
              consommation et contentieux des affaires.
            </p>
            <p>
              L’expérience qu’elle a acquise, associée à son parcours
              académique, lui ont permis de développer une pratique du droit
              commercial dans toutes ses branches et une maîtrise des techniques
              contentieuses.
            </p>
            <p>Ses langues de travail sont le français et l’anglais.</p>
          </div>
        </article>
        <article className="imgContainer col-4 ms-5">
          <img style={{ width: "100%" }} src={CecPic} alt="" />
        </article>
      </section>
    </div>
  );
};

export default Equipe;
