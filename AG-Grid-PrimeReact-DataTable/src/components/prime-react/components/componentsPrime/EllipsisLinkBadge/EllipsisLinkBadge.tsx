import { FC } from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema específico para definir colores y estilos visuales.
import 'primereact/resources/primereact.min.css';// Estilos base de PrimeReact necesarios para todos los componentes.
import 'primeicons/primeicons.css'; 
import './EllipsisLinkBadge.scope.scss';

interface EllipsisLinkBadgeProps {
    href: string;
    disabled: boolean;
    messageTooltipEllipsis: string;
    statusModeBadge: 'success' | 'info' | 'warning' | 'danger';
}

const EllipsisLinkBadge: FC<EllipsisLinkBadgeProps> = ({ href, disabled, messageTooltipEllipsis, statusModeBadge }) => {
    return (
        <div className="button-container">
            <Button 
                icon="pi pi-ellipsis-h" 
                className="rounded-button" 
                aria-label="Ellipsis" 
                disabled={disabled} 
                tooltip={messageTooltipEllipsis} 
                tooltipOptions={{ position: 'top' }} 
                onClick={() => window.location.href = href}
                pt={{
                    root: {
                        className: 'custom-button', // Clase personalizada
                    },
                }}
            />
            <Badge 
                severity={statusModeBadge} 
                className="badge-position"
                pt={{
                    root: {
                        className: 'custom-badge', // Clase personalizada
                    },
                }}
            />
        </div>
    );
};

export default EllipsisLinkBadge;
