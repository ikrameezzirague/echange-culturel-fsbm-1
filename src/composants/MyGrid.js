import React from "react";
import "./MyGrid.css";
import event1 from './../image-Events/event1.logo';
import event2 from './../image-Events/event2.logo';
import event3 from './../image-Events/event3.logo';
import event4 from './../image-Events/event4.logo';
import event5 from './../image-Events/event5.logo';
import event6 from './../image-Events/event6.logo';
import event7 from './../image-Events/event7.logo';
import event8 from './../image-Events/event8.logo';

const MyGrid = () => {
  return (
    <div className="grid-container">
      <div className="grid-item small">
        <img src={event1} alt="placeholder" />
        <div className="description">la Caravane de Capgemini TS Maroc en collaboration avec la FT2I est une initiative importante pour promouvoir les technologies de l'information et de la communication au Maroc et stimuler le développement économique du pays.</div>
      </div>
      <div className="grid-item small">
        <img src={event2} alt=""/>
        <div className="description">"Success is not an accident" est un événement présenté par Madame Filali, dont l'objectif est d'inspirer et de motiver les participants à atteindre leurs objectifs en partageant des histoires de réussite et des conseils pratiques.  </div>
      </div>
      <div className="grid-item small">
        <img src={event3} alt="placeholder" />
        <div className="description">Le "Debate Day: Lack of Water" est un événement présenté par le Speak to Lead Club. L'objectif de cet événement est de sensibiliser le public aux problèmes liés à la pénurie d'eau dans le monde. </div>
      </div>
      <div className="grid-item small">
        <img src={event4} alt="placeholder" />
        <div className="description">Le Club de Soft Skills présente un atelier de communication professionnelle animé par Safae Mziane, une experte en communication. L'atelier vise à aider les participants à améliorer leurs compétences en matière de communication professionnelle.</div>
      </div>
      <div className="grid-item small">
        <img src={event5} alt="placeholder" />
        <div className="description">L'Université UHIIC communique avec les étudiants de différentes manières pour les tenir informés des dernières nouvelles, des événements et des activités organisées sur le campus:E-mails,Réseaux sociaux,Affichages et panneaux d'affichage.</div>
      </div>
      <div className="grid-item small">
        <img src={event6} alt="placeholder" />
        <div className="description">L'événement "We Are Hiring" offre une plateforme où les entreprises et les organisations partenaires peuvent présenter leurs offres d'emploi et rencontrer des candidats potentiels. Il s'agit d'une occasion pour les chercheurs d'emploi.

</div>
      </div>
      <div className="grid-item small">
        <img src={event7} alt="placeholder" />
        <div className="description">Il faut contrôler cet assistant au lieu de nous le controler
- il faut  changer absolument la manière d'enseignement et d évaluation et même de la recherche scientifique
- on peut profiter le maximum de cet assistant mais au niveau de l intégrité en considérant l aspect éthique (moral) 
</div>
      </div>
      <div className="grid-item small">
        <img src={event8} alt="placeholder" />
        <div className="description">Lors de cette présentation, les membres fondateurs du club ont présenté leur vision et leur mission, expliqué les raisons de la création du club et les avantages que celui-ci peut offrir à ses membres</div>
      </div>
    </div>
  );
};

export default MyGrid;