import React, { useState } from 'react';
import './FAQ.css';
import Navbar from '../composants/Navbar';

const FAQ = () => {
  const faqData = [
    {
      question: "Comment créer mon premier CV professionnel ?",
      answer: "Pour créer votre premier CV professionnel, suivez ces étapes :\n\n1. Rassemblez vos informations personnelles, votre expérience, votre formation et vos compétences.\n\n2. Choisissez un format de CV adapté, tel que chronologique, fonctionnel ou combiné.\n\n3. Utilisez un modèle de CV professionnel ou créez le vôtre en utilisant un éditeur de texte ou un outil en ligne.\n\n4. Structurez votre CV en sections claires, telles que l'en-tête, le résumé, l'expérience professionnelle, l'éducation et les compétences.\n\n5. Personnalisez chaque section en mettant en avant vos réalisations pertinentes et en utilisant des mots clés spécifiques à votre domaine.\n\n6. Assurez-vous de vérifier l'orthographe et la grammaire, et demandez à quelqu'un de le relire pour vous.\n\n7. Enregistrez votre CV au format PDF et envoyez-le aux employeurs potentiels avec une lettre de motivation personnalisée."
    },
    {
      question: "Comment réussir mon entretien d'embauche ?",
      answer: "Pour réussir votre entretien d'embauche, voici quelques conseils :\n\n1. Préparez-vous en vous renseignant sur l'entreprise, son secteur d'activité et le poste pour lequel vous postulez.\n\n2. Préparez des réponses concises et percutantes aux questions courantes, telles que vos forces et faiblesses, votre expérience pertinente et pourquoi vous êtes intéressé par le poste.\n\n3. Entraînez-vous à répondre aux questions d'entretien avec un ami ou un membre de votre famille.\n\n4. Mettez en valeur vos compétences et vos réalisations en les illustrant par des exemples concrets.\n\n5. Soyez ponctuel et habillez-vous de manière appropriée pour l'entretien.\n\n6. Montrez votre intérêt pour l'entreprise en posant des questions pertinentes sur le poste et l'entreprise.\n\n7. N'oubliez pas de suivre l'entretien avec un e-mail de remerciement pour exprimer votre gratitude envers les recruteurs pour l'opportunité."
    },
    {
      question: "Quelles compétences sont importantes pour intégrer le marché de l'emploi ?",
      answer: "Pour intégrer le marché de l'emploi avec succès, certaines compétences sont importantes :\n\n1. Compétences techniques : maîtrisez les compétences spécifiques requises pour votre domaine, telles que la programmation, la gestion de projet, le design graphique, etc.\n\n2. Compétences interpersonnelles : développez votre capacité à travailler en équipe, à communiquer efficacement et à résoudre des problèmes de manière collaborative.\n\n3. Compétences en leadership : démontrez votre capacité à prendre des initiatives, à gérer des projets et à inspirer les autres.\n\n4. Compétences en résolution de problèmes : soyez capable d'analyser des situations complexes, de trouver des solutions créatives et de prendre des décisions éclairées.\n\n5. Compétences en apprentissage continu : montrez votre volonté de vous adapter aux nouvelles technologies et aux évolutions du marché en continuant à apprendre et à vous former tout au long de votre carrière."
    },
    {
      question: "Comment trouver des offres d'emploi pertinentes ?",
      answer: "Pour trouver des offres d'emploi pertinentes, vous pouvez suivre ces étapes :\n\n1. Consultez les sites d'emploi spécialisés dans votre domaine ou votre secteur d'activité.\n\n2. Utilisez des moteurs de recherche d'emploi en utilisant des mots clés spécifiques à votre profil et à votre région.\n\n3. Suivez les réseaux sociaux professionnels et les groupes liés à votre domaine pour être informé des opportunités.\n\n4. Réseautez avec des professionnels de votre domaine pour découvrir des offres cachées ou obtenir des recommandations.\n\n5. Contactez les agences de recrutement spécialisées dans votre domaine.\n\n6. Assurez-vous de personnaliser votre candidature en fonction des exigences de chaque poste et de chaque entreprise."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <Navbar />
      <h1 className="faq-heading">FAQ - Conseils pour le marché de l'emploi</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <h2 className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
            </h2>
            {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
