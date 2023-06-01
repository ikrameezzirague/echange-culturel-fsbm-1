import React from 'react';
import ErrorBoundary from '../composants/ErrorBoundary';
import Navbar from '../composants/Navbar';

const Associations = () => {
const isUnderConstruction = true;
return (
<div>
<Navbar />
{isUnderConstruction ? (
<ErrorBoundary />
) : (
<div>{/* Contenu de la page Associations */}</div>
)}
</div>
);
};

export default Associations;