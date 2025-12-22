import { IonPage, IonContent, IonInput, IonItem, IonRow, IonCol, IonCard, IonCardContent, IonGrid, IonText, IonCardHeader } from "@ionic/react";
import { Link, Loader, ScanSearch, TextSearch } from "lucide-react";
import PageHeading from "../../../components/ui/page-heading/PageHeading";
import '../Tools.css';
import Button from "../../../components/ui/button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { UrlScannerI } from "./url-scanner.types";
import { useMutation } from "@tanstack/react-query";
import { scanURLAction } from "../../../actions/tools/url-scan";
import { useHistory } from "react-router-dom";

export default function UrlScanner() {
  const history = useHistory();
  const { register, handleSubmit } = useForm<UrlScannerI>();
  const { mutate, isPending, data } = useMutation({
    mutationFn: scanURLAction,
    onError: (error) => {
      console.log(error.message)
    },
    onSuccess: (response) => {
      console.log(data)
      // history.push('/tools/url-scanner/result', { scanData: response });
    }
  })

  const onSubmit: SubmitHandler<UrlScannerI> = (formData) => {
    console.log(formData)
    mutate(formData)
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <PageHeading
          title="Comprobar URL"
          icon={Link}
        />
        <IonGrid className="onboarding-grid">

          <IonRow>
            <IonCol size="12">

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <IonRow>
                  <IonCol size="12">
                    <IonCard color="primary">
                      <IonCardHeader>
                        <p>
                          Antes de visitar un enlace, verifica su seguridad para detectar posibles riesgos como phishing, malware o contenido malicioso.
                        </p>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonItem lines="none">
                          <IonInput
                            placeholder="https://ejemplo.com"
                            type="url"
                            {...register("url", { required: true })}
                          />
                        </IonItem>
                        <Button
                          type="submit"
                          text="Analizar URL"
                          icon={isPending ? Loader : ScanSearch}
                          disabled={isPending}
                        />
                        <IonText color="secondary">
                          <p style={{ fontSize: '0.9em', margin: '8px 0 0 16px' }}>
                            Formatos aceptados: https://ejemplo.com o ejemplo.com
                          </p>
                        </IonText>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </form>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonCard color="primary">
                <IonCardContent>
                  <IonText>
                    <h3 style={{ marginTop: 0, marginBottom: '12px', display: 'flex', alignItems: 'center', fontSize: "16px", color: "var(--ion-color-secondary)", gap: 8 }}>
                      <TextSearch size={32} style={{ marginRight: '8px' }} />
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
