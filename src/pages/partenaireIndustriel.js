import React from 'react';
import ErrorBoundary from '../composants/ErrorBoundary';
import Navbar from '../composants/Navbar';

const PartenaireIndustriel = () => {
const isUnderConstruction = true;
return (
<div>
<Navbar />
{isUnderConstruction ? (
<ErrorBoundary />
) : (
<div>{/* Contenu de la page PartenaireIndustriel */}</div>
)}
</div>
);
};

export default PartenaireIndustriel;