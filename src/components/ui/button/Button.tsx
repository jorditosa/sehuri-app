import { IonButton } from '@ionic/react'
import { LucideIcon } from 'lucide-react';
import './Button.css'

interface Props {
  text: string;
  icon: LucideIcon;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger';
}

export default function Button({
  text,
  icon: Icon,
  onClick,
  color = 'secondary',
}: Props) {
  return (
    <IonButton
      expand="block"
      color={color}
      className="button"
      onClick={onClick}
    >
      <span className="button-content">
        <span className="button-text">{text}</span>
        <Icon 
          className="button-icon" 
          size={48} 
          strokeWidth={1.5} 
        />
      </span>
    </IonButton>
  )
}