import { LucideIcon } from 'lucide-react'
import './PageHeading.css'

interface Props {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  iconSize?: number;
  iconStrokeWidth?: number;
}

export default function PageHeading({
  title,
  subtitle,
  icon: Icon,
  iconSize = 48,
  iconStrokeWidth = 1.5
}: Props) {
  return (
    <div className="page-heading">
      <div className="hero-icon-wrapper">
        <Icon size={iconSize} strokeWidth={iconStrokeWidth} />
      </div>
      <h1 className="page-heading-title">
        {title}
        {subtitle && (
          <>
            {' '}
            <br />
            {subtitle}
          </>
        )}
      </h1>
    </div>
  )
}