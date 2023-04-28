import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';



const Page1: React.FC = () => {
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
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonCard>
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                        <IonCardHeader>
                            <IonCardTitle>Card Title</IonCardTitle>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Here's a small text description for the card content. Nothing more, nothing less.
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                        <IonCardHeader>
                            <IonCardTitle>Card Title</IonCardTitle>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Here's a small text description for the card content. Nothing more, nothing less.
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        </>
    )
}

export default Page1;