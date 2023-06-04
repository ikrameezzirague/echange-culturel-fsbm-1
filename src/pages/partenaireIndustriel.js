import React from 'react';
import ErrorBoundary from '../composants/ErrorBoundary';
import Navbar from '../composants/Navbar';

const partenaireIndustriel = () => {
    const isUnderConstruction = true; 
    return (
      <div>
          <Navbar />
        {isUnderConstruction ? (
          <ErrorBoundary />
        ) : (
  
          <div>
         
          </div>
        )}
      </div>
    );
  };

export default partenaireIndustriel;