import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';



const Pagina2: React.FC = () => {
    return (
        <>
            <IonMenu contentId="main-content" >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu Content</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonItem><a href='/home'>Home</a></IonItem>

                </IonContent>
                <IonMenuToggle>
                    <IonButton>Click to close the menu</IonButton>
                </IonMenuToggle>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton ></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Exemplo 2</IonTitle>
                    </IonToolbar>
                    <IonToolbar>
                        <IonSearchbar></IonSearchbar>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                </IonContent>
            </IonPage>
        </>
    )
}

export default Pagina2;