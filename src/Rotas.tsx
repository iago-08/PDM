import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';


const Rotas: React.FC = () => (
  
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home"  component={Home} exact={true} />
        <Redirect exact from="/" to="/home" />
        <Route path="/Pagina1" component={Pagina1} exact={true} />  
        <Route path="/Pagina2" component={Pagina2} exact={true} />  
      </IonRouterOutlet>
    </IonReactRouter>
  
);

export default Rotas;