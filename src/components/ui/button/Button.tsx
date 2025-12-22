import { IonButton } from '@ionic/react'
import { LucideIcon, Loader } from 'lucide-react';
import './Button.css'

interface Props {
  text: string;
  icon: LucideIcon;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger';
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

export default function Button({
  text,
  icon: Icon,
  onClick,
  color = 'secondary',
  type,
  disabled = false
}: Props) {
  // Detectamos si el icon es Loader comparando la referencia del componente
  const isLoader = Icon === Loader;

  return (
    <IonButton
      type={type}
      expand="block"
      color={color}
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="button-content">
        <span className="button-text">{text}</span>
        <Icon 
          className={`button-icon ${isLoader ? 'spin' : ''}`} 
          size={42} 
          strokeWidth={1.5} 
        />
      </span>
    </IonButton>
  )
}
