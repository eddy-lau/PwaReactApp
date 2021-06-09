import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Embedded PWA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">PWA</IonTitle>
          </IonToolbar>
        </IonHeader>
        <iframe src="https://m.aliexpress.com/"/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
