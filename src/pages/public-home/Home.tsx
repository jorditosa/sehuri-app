import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import './Home.css';
import { BookOpenText, File, HomeIcon, Link2 } from 'lucide-react';
import PageHeading from '../../components/ui/page-heading/PageHeading';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <PageHeading
          title="Hola!"
          icon={HomeIcon}
        />


        <IonGrid className="home-grid">
          <IonRow>
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <IonCard color="primary" className="home-card" button routerLink="/manifesto">
                <div className="card-icon-wrapper">
                  <BookOpenText
                    className='card__home--icon'
                    size={32}
                    strokeWidth={1.5}
                  />
                </div>
                <IonCardHeader>
                  <IonCardTitle className="card-title">
                    Leer Manifesto
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p className="card-description">
                    Ciberseguridad es Derecho Humano
                  </p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">

            <IonCol size="6">
              <IonCard color="secondary" className="home-card" button routerLink="/tools/url-scanner">
                <div className="card-icon-wrapper">
                  <Link2
                    className='card__home--icon'
                    size={32}
                    strokeWidth={1.5}
                  />
                </div>
                <IonCardHeader>
                  <IonCardTitle className="card-title">
                    Comprobar URL
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p className="card-description">
                    Analiza la seguridad de cualquier enlace antes de visitarlo
                  </p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard color="secondary" className="home-card" button routerLink="/tools/file-scanner">
                <div className="card-icon-wrapper">
                  <File
                    className='card__home--icon'
                    size={32}
                    strokeWidth={1.5}
                  />
                </div>
                <IonCardHeader>
                  <IonCardTitle className="card-title">
                    Comprobar Fichero
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p className="card-description">
                    Analiza la seguridad de cualquier enlace antes de visitarlo
                  </p>
                </IonCardContent>
              </IonCard>
            </IonCol>

          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;