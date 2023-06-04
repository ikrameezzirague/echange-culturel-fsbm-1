import React from 'react';
import ErrorBoundary from '../composants/ErrorBoundary';
import Navbar from '../composants/Navbar';
 // Import the CSS file for styling

const partenaireAcademique = () => {
  const isUnderConstruction = true; 

  return (
    <div className="partenaire-container">
      <Navbar />
      {isUnderConstruction ? (
        <ErrorBoundary />
      ) : (
        <div>
          {/* Content of the page */}
        </div>
      )}
    </div>
  );
};

export default partenaireAcademique;
