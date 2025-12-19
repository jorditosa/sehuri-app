import { IonPage, IonContent, IonInput, IonItem, IonRow, IonCol, IonCard, IonCardContent, IonGrid, IonText } from "@ionic/react";
import { Link, AlertTriangle, ScanSearch } from "lucide-react";
import PageHeading from "../../components/ui/page-heading/PageHeading";
import './Tools.css';
import Button from "../../components/ui/button/Button";

export default function UrlScanner() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <PageHeading
          title="Comprobar URL"
          icon={Link}
        />
        <IonGrid className="onboarding-grid">
          {/* Descripción principal */}
          <IonRow>
            <IonCol size="12">
              <IonCard color="primary">
                <IonCardContent>
                    <p style={{ margin: 0 }}>
                      Analiza la seguridad de cualquier URL antes de visitarla para verificar la veracidad y detectar posibles riesgos de phishing, malware o contenido malicioso.
                    </p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Campo de entrada principal */}
          <IonRow>
            <IonCol size="12">
              <IonCard color="primary">
                <IonCardContent style={{ paddingBottom: '8px' }}>
                  <IonItem lines="none">
                    <IonInput
                      placeholder="https://ejemplo.com"
                      type="url"
                      style={{ '--padding-start': '12px' }}
                    />
                  </IonItem>
                  <IonText color="secondary">
                    <p style={{ fontSize: '0.8em', margin: '8px 0 0 16px' }}>
                      Formatos aceptados: https://ejemplo.com o ejemplo.com
                    </p>
                  </IonText>
                  <Button 
                    text="Analizar URL"
                    icon={ScanSearch}
                  />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Información adicional */}
          <IonRow>
            <IonCol size="12">
              <IonCard color="primary">
                <IonCardContent>
                  <IonText>
                    <h3 style={{ marginTop: 0, marginBottom: '12px', display: 'flex', alignItems: 'center', fontSize: "18px", color: "var(--ion-color-secondary)" }}>
                      <AlertTriangle size={32} style={{ marginRight: '8px' }} />
                      ¿Qué verificamos?
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: '16px', fontSize: "16px", }}>
                      <li>Reputación del dominio</li>
                      <li>Detección de phishing y malware</li>
                      <li>Certificados de seguridad SSL/TLS</li>
                      <li>Presencia en listas negras de seguridad</li>
                    </ul>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}