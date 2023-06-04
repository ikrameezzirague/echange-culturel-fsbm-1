import React, { useState } from 'react';
import './FAQ.css';
import Navbar from '../composants/Navbar';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const faqData = [
    {
      title: "Questions fréquentes sur les CVs",
      questions: [
        {
          question: "Comment rédiger mon premier CV professionnel ?",
          answer: "Pour rédiger votre premier CV professionnel, suivez ces étapes :\n\n1. Rassemblez vos informations personnelles, votre expérience, votre formation et vos compétences.\n\n2. Choisissez un format de CV adapté, tel que chronologique, fonctionnel ou combiné.\n\n3. Utilisez un modèle de CV professionnel ou créez le vôtre en utilisant un éditeur de texte ou un outil en ligne.\n\n4. Structurez votre CV en sections claires, telles que l'en-tête, le résumé, l'expérience professionnelle, l'éducation et les compétences.\n\n5. Personnalisez chaque section en mettant en avant vos réalisations pertinentes et en utilisant des mots clés spécifiques à votre domaine.\n\n6. Assurez-vous de vérifier l'orthographe et la grammaire, et demandez à quelqu'un de le relire pour vous.\n\n7. Enregistrez votre CV au format PDF et envoyez-le aux employeurs potentiels avec une lettre de motivation personnalisée."
        },
        {
          question: "Qu'est-ce que je dois éviter dans la rédaction de mon CV ?",
          answer: "Lors de la rédaction de votre CV, évitez les erreurs suivantes :\n\n1. Des fautes d'orthographe et de grammaire. Relisez attentivement votre CV et demandez à quelqu'un de le relire également.\n\n2. Des informations non pertinentes. Limitez-vous aux éléments pertinents pour le poste auquel vous postulez.\n\n3. Un format de CV peu clair. Utilisez une structure claire et organisez votre CV en sections distinctes.\n\n4. Des clichés et des phrases toutes faites. Soyez original et précis dans votre description des compétences et des réalisations.\n\n5. Des mensonges ou des exagérations. Soyez honnête et précis dans la présentation de votre expérience et de vos compétences."
        },
        {
          question: "Quels sont les points que je dois obligatoirement mentionner dans mon CV ?",
          answer: "Certains points importants à mentionner dans votre CV sont :\n\n1. Vos informations de contact : nom, numéro de téléphone, adresse e-mail.\n\n2. Votre expérience professionnelle, en commençant par le poste le plus récent.\n\n3. Votre formation académique, y compris les diplômes obtenus.\n\n4. Vos compétences spécifiques liées au poste auquel vous postulez.\n\n5. Vos réalisations professionnelles significatives.\n\n6. Vos activités extraprofessionnelles pertinentes, telles que le bénévolat ou les associations professionnelles.\n\n7. Des références professionnelles, si nécessaire."
        }
      ]
    },
    {
      title: "Questions fréquentes sur les entretiens d'embauche",
      questions: [
        {
          question: "Comment me préparer à mon premier entretien d'embauche ?",
          answer: "Pour vous préparer à votre premier entretien d'embauche, suivez ces conseils :\n\n1. Renseignez-vous sur l'entreprise et le poste auquel vous postulez.\n\n2. Préparez des réponses concises et percutantes aux questions courantes, telles que vos forces et faiblesses, votre expérience pertinente et pourquoi vous êtes intéressé par le poste.\n\n3. Entraînez-vous à répondre aux questions d'entretien avec un ami ou un membre de votre famille.\n\n4. Mettez en valeur vos compétences et vos réalisations en les illustrant par des exemples concrets.\n\n5. Soyez ponctuel le jour de l'entretien et habillez-vous de manière appropriée.\n\n6. Posez des questions pertinentes sur le poste et l'entreprise pour montrer votre intérêt.\n\n7. Envoyez un e-mail de remerciement après l'entretien pour exprimer votre gratitude envers les recruteurs."
        },
        {
          question: "Quelles sont les questions les plus fréquentes lors des entretiens d'embauche ?",
          answer: "Voici quelques-unes des questions fréquemment posées lors des entretiens d'embauche :\n\n1. Parlez-moi de vous-même.\n\n2. Quels sont vos points forts et vos points faibles ?\n\n3. Pourquoi avez-vous postulé pour ce poste/entreprise ?\n\n4. Parlez-moi de votre expérience professionnelle pertinente.\n\n5. Comment gérez-vous les situations difficiles ou le stress au travail ?\n\n6. Où vous voyez-vous dans cinq ans ?\n\n7. Avez-vous des questions pour nous ?"
        }
      ]
    },
    {
      title: "Questions fréquentes sur la recherche d'emploi",
      questions: [
        {
          question: "Comment trouver mon premier emploi ?",
          answer: "Pour trouver votre premier emploi, suivez ces étapes :\n\n1. Consultez les sites d'emploi spécialisés dans votre domaine ou secteur d'activité.\n\n2. Utilisez des moteurs de recherche d'emploi en utilisant des mots clés spécifiques à votre profil et votre région.\n\n3. Suivez les réseaux sociaux professionnels et les groupes liés à votre domaine pour être informé des opportunités.\n\n4. Réseautez avec des professionnels de votre domaine pour découvrir des offres cachées ou obtenir des recommandations.\n\n5. Contactez les agences de recrutement spécialisées dans votre domaine.\n\n6. Personnalisez votre candidature en fonction des exigences de chaque poste et entreprise."
        },
        {
          question: "Comment rédiger un CV efficace pour la recherche d'emploi ?",
          answer: "Pour rédiger un CV efficace pour la recherche d'emploi, voici quelques conseils :\n\n1. Utilisez un format clair et professionnel.\n\n2. Mettez en valeur vos compétences et réalisations pertinentes pour le poste auquel vous postulez.\n\n3. Soyez concis et utilisez des mots clés spécifiques à votre domaine.\n\n4. Incluez vos expériences professionnelles, votre formation et vos compétences.\n\n5. Vérifiez l'orthographe et la grammaire.\n\n6. Personnalisez votre CV pour chaque candidature.\n\n7. Enregistrez votre CV au format PDF."
        }
      ]
    }
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
        {faqData.map((section, index) => (
          <div className="faq-section" key={index}>
            <h2 className="faq-section-title">{section.title}</h2>
            {section.questions.map((item, idx) => (
              <div className="faq-item" key={idx}>
                <div className="faq-question" onClick={() => toggleAnswer(index + idx)}>
                  <span>{item.question}</span>
                  {activeIndex === index + idx ? <FaMinus /> : <FaPlus />}
                </div>
                {activeIndex === index + idx && <p className="faq-answer">{item.answer}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
