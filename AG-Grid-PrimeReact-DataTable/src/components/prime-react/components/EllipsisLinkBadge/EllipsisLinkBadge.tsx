import { FC } from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import 'primereact/resources/themes/saga-blue/theme.css'; // Puedes elegir el tema que desees
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './EllipsisLinkBadge.scope.scss'; // Para tus estilos personalizados

interface EllipsisLinkBadgeProps {
    href: string;
    disabled: boolean;
    messageTooltipEllipsis: string;
    statusModeBadge: 'success' | 'info' | 'warning' | 'danger'; // Ajustar las opciones permitidas
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
            />
            <Badge severity={statusModeBadge} className="badge-position" />
        </div>
    );
};

export default EllipsisLinkBadge;
