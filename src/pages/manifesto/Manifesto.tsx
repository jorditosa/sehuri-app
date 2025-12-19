import { IonRow, IonCol, IonPage, IonContent } from '@ionic/react';
import { Scale } from 'lucide-react';
import './Manifesto.css';
import PageHeading from '../../components/ui/page-heading/PageHeading';

export default function Manifesto() {
  return (
    <IonPage>
      <IonContent fullscreen>

        <PageHeading
          title='Ciberseguridad'
          subtitle='Derecho Humano Fundamental'
          icon={Scale}
        />

        <IonRow className="manifesto-row">
          <IonCol size="12" sizeMd="10" offsetMd="1" sizeLg="8" offsetLg="2">
            <div className="manifesto-section">
              <div className="manifesto-content">

                <article className="manifesto-article">
                  <div className="article-badge">
                    <h3>Declaración de Principios</h3>
                  </div>
                  <p className="manifesto-text">
                    Toda persona tiene derecho a que los sistemas digitales que use sean seguros
                    y garanticen la <strong>integridad</strong>, <strong>confidencialidad</strong> y {" "}
                    <strong>disponibilidad</strong> de la información. Los poderes públicos deben
                    asegurar que tanto sistemas públicos como privados cumplan con estas garantías,
                    según su nivel de riesgo.
                  </p>
                  <p className="manifesto-text">
                    Además, promoverán la formación y concienciación social en ciberseguridad
                    y mecanismos de certificación que garanticen la protección de todos los ciudadanos
                    en el entorno digital.
                  </p>
                </article>

              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
}