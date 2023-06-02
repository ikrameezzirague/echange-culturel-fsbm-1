import React from 'react';
import { FaTools } from 'react-icons/fa';
//import construction from '../constructions/construction.jpg';

class ErrorBoundary extends React.Component {
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
        <div style={styles.errorContainer}>
          <h1>Oops, something went wrong.</h1>
        </div>
      );
    }
    return (
      <div style={styles.container}>
        <FaTools style={styles.icon} />
        <div style={styles.content}>
          <h1 style={styles.title}>Page en cours de construction</h1>
          <p style={styles.text}>Nous travaillons sur cette page et elle sera bientôt disponible.</p>
          <p style={styles.text}>Merci de votre patience !</p>
        
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '20px',
  },
  icon: {
    fontSize: '48px',
    marginBottom: '10px',
    color: 'blue',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'red',
    textAlign: 'left',
  },
  text: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  errorContainer: {
    textAlign: 'center',
    marginTop: '20px',
    color: 'red',
  },
  image: {
    width: '300px', // Largeur de l'image
    height: 'auto', // Hauteur automatique en conservant les proportions
    marginTop: '20px',
  },
};

export default ErrorBoundary;
