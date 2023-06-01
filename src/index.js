import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FsbmEnChiffre from './pages/FsbmEnChiffre';
import EventList from './pages/EventList';
import MasterMaroc from './pages/MasterMaroc';
import CvTheque from './pages/CvTheque';
import FAQ from './pages/FAQ';
import partenaireIndustriel from './pages/partenaireIndustriel';
import partenaireAcademique from './pages/partenaireAcademique';
import Clubs from './pages/clubs';
import Associations from './pages/Associations';
const router = createBrowserRouter([
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "SignUp",
    element: <SignUp/>,
  },
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "FsbmEnChiffre",
    element: <FsbmEnChiffre/>,
  },
  {
    path: "EventList",
    element: <EventList/>,
  },
 
  {
    path: "MasterMaroc",
    element: <MasterMaroc/>,
   },
   {
    path: "CvTheque",
    element: <CvTheque/>,
   },
   {
    path: "FAQ",
    element: <FAQ/>,
   },
   {
    path: "partenaireAcademique",
    element: <partenaireAcademique/>,
   },
   {
    path: "partenaireIndustriel",
    element: <partenaireIndustriel/>,
   },
   {
    path: "Clubs",
    element: <Clubs/>,
   },
   {
    path: "Associations",
    element: <Associations/>,
   },
  // {
  //   path: "établissements-uh2c",
  //   element: <établissements_uh2c/>,
  // },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
