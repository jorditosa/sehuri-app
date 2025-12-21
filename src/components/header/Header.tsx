import { IonHeader, IonToolbar, IonImg, IonRow, IonButton } from '@ionic/react';
import { Bell } from 'lucide-react';
import { useHistory } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/home');
  };

  return (
    <IonHeader className="header">
      <IonToolbar color="secondary">
        <IonRow className="header-content">
          <IonButton
            fill="clear"
            size="small"
            className="header-logo-wrapper"
            onClick={handleLogoClick}
          >
            <IonImg
              src="/logos/LOGO_SKT_Blau.svg"
              alt="logo Seckat"
              className="header__img"
            />
          </IonButton>
          <Bell size={32} />
        </IonRow>
      </IonToolbar>
    </IonHeader>
  );
}
