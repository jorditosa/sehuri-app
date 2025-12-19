import { IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import { ArrowRight, Play } from 'lucide-react'
import { useHistory } from 'react-router-dom'
import PageHeading from '../../components/ui/page-heading/PageHeading'
import Button from '../../components/ui/button/Button'
import { setStorageValue } from '../../lib/preferences/storage-lib'
import './OnBoarding.css'

export default function OnBoarding() {
  const history = useHistory()

  const handleGetStarted = () => {
    setStorageValue('hasSeenOnboarding', 'true')
    history.push('/home')
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <PageHeading
          title="¡Bienvenido/a!"
          subtitle="Seguridad y privacidad digital para todas las personas"
          icon={Play}
        />

        <IonGrid className="onboarding-grid">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="10" sizeLg="8">
              <IonCard color="primary" className="onboarding-intro-card">
                <IonCardContent>
                  <p className="intro-description">
                    La ciberseguridad no es un lujo, sino un derecho fundamental.
                    Todas las personas merecen navegar por el mundo digital con seguridad,
                    independientemente de sus conocimientos técnicos o recursos económicos.
                  </p>
                  <p className="intro-description">
                    Por ello, hemos desarrollado <strong>Sehuri</strong>, una aplicación que te proporciona
                    información y herramientas para proteger tu seguridad digital de manera accesible y efectiva.
                  </p>
                  <Button
                    text="Empezar"
                    icon={ArrowRight}
                    onClick={handleGetStarted}
                  />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
