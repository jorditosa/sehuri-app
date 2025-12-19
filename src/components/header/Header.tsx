import { IonHeader, IonToolbar, IonImg, IonRow } from '@ionic/react';
import { Bell } from 'lucide-react';
import { useHistory } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const history = useHistory()

  const handleLogoClick = () => {
    history.push('/home')
  }

  return (
    <IonHeader className="header">
      <IonToolbar color="secondary">
        <IonRow className="header-content">
            <div className="header-logo-wrapper" onClick={handleLogoClick}>
            <IonImg 
                src="/logos/LOGO_SKT_Blau.svg"
                alt="logo Seckat"
                className="header__img"
            />
            </div>

                <Bell size={32} />
        </IonRow>

      </IonToolbar>
    </IonHeader>
  )
}