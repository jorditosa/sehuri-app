import { IonRow, IonCol, IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonText } from '@ionic/react';
import { Scale } from 'lucide-react';
import './Manifesto.css';
import PageHeading from '../../components/ui/page-heading/PageHeading';

export default function Manifesto() {
  return (
    <IonPage>
      <IonContent fullscreen>

        <PageHeading
          title='Ciberseguridad'
          subtitle='como Derecho Humano'
          icon={Scale}
        />

        <IonRow>
          <IonCol size="12">
            <IonCard color='primary'>
              <IonCardHeader>
                <h3>Declaración de Principios</h3>
              </IonCardHeader>
              <IonCardContent>
                <IonText color="secondary">
                  <article>
                    <p>
                      Toda persona tiene derecho a que los sistemas digitales que use sean seguros
                      y garanticen la <strong>integridad</strong>, <strong>confidencialidad</strong> y {" "}
                      <strong>disponibilidad</strong> de la información. Los poderes públicos deben
                      asegurar que tanto sistemas públicos como privados cumplan con estas garantías,
                      según su nivel de riesgo.
                    </p>
                    <p>
                      Además, promoverán la formación y concienciación social en ciberseguridad
                      y mecanismos de certificación que garanticen la protección de todos los ciudadanos
                      en el entorno digital.
                    </p>
                  </article>
                </IonText>
              </IonCardContent>



            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
}