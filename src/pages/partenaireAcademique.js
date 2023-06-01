import React from 'react';
import ErrorBoundary from '../composants/ErrorBoundary';
import Navbar from '../composants/Navbar';

const PartenaireAcademique = () => {
const isUnderConstruction = true;
return (
<div>
<Navbar />
{isUnderConstruction ? (
<ErrorBoundary />
) : (
<div></div>
)}
</div>
);
};

export default PartenaireAcademique;