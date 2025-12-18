import { IonHeader, IonToolbar, IonImg } from '@ionic/react'
import './Header.css';


export default function Header() {
    return (
        <IonHeader className='header'>
            <IonToolbar color='secondary'>
                <IonImg 
                src='/logos/LOGO_SKT_Blau.svg'
                alt='logo Seckat'
                className='header__img'
                />
            </IonToolbar>
        </IonHeader>
    )
}
