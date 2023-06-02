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
        <div className="description">"Success is not an accident" est un événement présenté par Madame Filali, dont l'objectif est d'inspirer et de motiver les participants à atteindre leurs objectifs en partageant des histoires de réussite et des conseils pratiques. Cet événement met en avant l'idée que le succès est le résultat d'un travail acharné, d'une planification stratégique, d'une vision claire et d'un état d'esprit positif. Les participants pourront apprendre comment surmonter les obstacles, gérer les échecs et les erreurs, et développer leur confiance en eux pour atteindre leurs objectifs personnels et professionnels</div>
      </div>
      <div className="grid-item small">
        <img src={event3} alt="placeholder" />
        <div className="description">Le "Debate Day: Lack of Water" est un événement présenté par le Speak to Lead Club. L'objectif de cet événement est de sensibiliser le public aux problèmes liés à la pénurie d'eau dans le monde. Les participants pourront assister à des débats animés par des experts dans le domaine de l'eau, qui discuteront des causes et des conséquences de la pénurie d'eau, des solutions possibles pour résoudre ce problème et des actions que chacun peut entreprendre pour contribuer à la préservation de cette ressource vitale.</div>
      </div>
      <div className="grid-item small">
        <img src={event4} alt="placeholder" />
        <div className="description">Le Club de Soft Skills présente un atelier de communication professionnelle animé par Safae Mziane, une experte en communication. L'atelier vise à aider les participants à améliorer leurs compétences en matière de communication professionnelle, en se concentrant sur les techniques de présentation, la gestion de l'interaction avec les clients, la négociation et la gestion des conflits.</div>
      </div>
      <div className="grid-item small">
        <img src={event5} alt="placeholder" />
        <div className="description">L'Université UHIIC communique avec les étudiants de différentes manières pour les tenir informés des dernières nouvelles, des événements et des activités organisées sur le campus:E-mails,Réseaux sociaux,Affichages et panneaux d'affichage</div>
      </div>
      <div className="grid-item small">
        <img src={event6} alt="placeholder" />
        <div className="description">L'événement "We Are Hiring" offre une plateforme où les entreprises et les organisations partenaires peuvent présenter leurs offres d'emploi et rencontrer des candidats potentiels. Il s'agit d'une occasion pour les chercheurs d'emploi de découvrir les possibilités de carrière dans différents secteurs et de nouer des contacts avec des recruteurs.

</div>
      </div>
      <div className="grid-item small">
        <img src={event7} alt="placeholder" />
        <div className="description">Il faut contrôler cet assistant au lieu de nous le controler
- il faut  changer absolument la manière d'enseignement et d évaluation et même de la recherche scientifique
- on peut profiter le maximum de cet assistant mais au niveau de l intégrité en considérant l aspect éthique (moral) 
- garder la transparence et l honnêteté au niveau de la production scientifique si on utilise cet assistant informationnel la nécessité d ouvrir un débat  sur cette révolution de l intelligence artificielle entre les étudiants et les enseignants aussi 
- poursuivre le débat actuel sur  l impact de cette révolution de IA entre les deux courants , l un de ces courants propose de ralentir ce processus afin de ne pas perdre le contrôle ,le deuxième courant propose d'avancer dans ce sens pour résoudre les problèmes de santé et de l’humanité dans plusieurs domaines</div>
      </div>
      <div className="grid-item small">
        <img src={event8} alt="placeholder" />
        <div className="description">Lors de cette présentation, les membres fondateurs du club ont présenté leur vision et leur mission, expliqué les raisons de la création du club et les avantages que celui-ci peut offrir à ses membres</div>
      </div>
    </div>
  );
};

export default MyGrid;