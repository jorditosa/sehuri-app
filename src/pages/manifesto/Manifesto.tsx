import { IonRow, IonCol, IonTitle, IonPage, IonContent } from '@ionic/react';
import { Scale } from 'lucide-react';
import './Manifesto.css';

export default function Manifesto() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="manifesto-container">
          <div className="manifesto-hero">
            <div className="hero-icon-wrapper">
              <Scale size={48} strokeWidth={1.5} />
            </div>
            <IonTitle>
              Ciberseguridad <br/>
            Derecho Humano Fundamental
            </IonTitle>
          </div>

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
        </div>
      </IonContent>
    </IonPage>
  );
}