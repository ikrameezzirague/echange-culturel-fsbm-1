import React from 'react';
import { FaTools } from 'react-icons/fa';
import './ErrorBoundary.css';
import construction from './../icones/construction.jpg';

class UnderConstructionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1>Oops, quelque chose s'est mal passé.</h1>
        </div>
      );
    }
    return (
      <div className="page-container">
        <div className="content">
        <img src={construction} alt="Logo de la société" className="image" style={{ width: '600px', height: 'auto' }} />
  
          <p className="text">Nous travaillons sur cette page et elle sera bientôt disponible.</p>
          <p className="text">Merci de votre patience !</p>
         
        </div>
      </div>
    );
  }
}

export default UnderConstructionPage;