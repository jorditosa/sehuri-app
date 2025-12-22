import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import './Home.css';
import { BookOpenText, BrainCircuit, File, HomeIcon, Link2, PersonStanding } from 'lucide-react';
import PageHeading from '../../components/ui/page-heading/PageHeading';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <PageHeading
          title="Tu espacio Digital"
          icon={HomeIcon}
        />

        <IonGrid className="home-grid">
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
                    Comprobar URL y/o Dominio
                  </IonCardTitle>
                </IonCardHeader>
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
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard color="secondary" className="home-card" button routerLink="/tools/file-scanner">
                <div className="card-icon-wrapper">
                  <PersonStanding
                    className='card__home--icon'
                    size={32}
                    strokeWidth={1.5}
                  />
                </div>
                <IonCardHeader>
                  <IonCardTitle className="card-title">
                    Protección Menores
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard color="tertiary" className="home-card" button routerLink="/tools/file-scanner">
                <div className="card-icon-wrapper">
                  <BrainCircuit
                    className='card__home--icon'
                    size={32}
                    strokeWidth={1.5}
                  />
                </div>
                <IonCardHeader>
                  <IonCardTitle className="card-title">
                    IA - Generador palabra clave
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>

          </IonRow>

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
                    Ciberseguridad y Privacidad digitales como Derechos Humanos
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