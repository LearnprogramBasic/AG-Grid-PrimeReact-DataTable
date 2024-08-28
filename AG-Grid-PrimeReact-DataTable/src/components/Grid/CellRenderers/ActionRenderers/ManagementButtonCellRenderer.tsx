import { FC } from 'react';
import { ManagementButtonIconMolecule } from '@siigo-arquitectura/management-button-icon-molecule-react';
import { ManagementButtonCellRendererProps, ManagementButtonIconMoleculeProps } from '../../typings';

export const ManagementButtonCellRenderer: FC<
	ManagementButtonCellRendererProps & ManagementButtonIconMoleculeProps
> = ({
	typeIcon = 'ellipsis',
	modeBadge = true,
	statusModeBadge = 'success',
	messageTooltipEllipsis = 'Action button',
	ariaLabel = 'Action Button',
	showTooltip = false,
	onClick,
	node,
	data,
}) => {
	const rowIndex = node?.rowIndex ?? -1; // Obtener el índice de la fila

	const handleClick = () => {
		if (onClick) {
			// Si se proporciona una función onClick, úsala
			onClick();
		} else {
			// Acción alternativa (mostrar alerta en este caso)
			alert(`Action button clicked for row ${rowIndex + 1}`);
		}
	};

	return (
		<div style={{ padding: '7px', backgroundColor: 'var(--border-200)' }}>
			<ManagementButtonIconMolecule
				typeIcon={typeIcon}
				modeBadge={modeBadge}
				statusModeBadge={data?.statusModeBadge ?? statusModeBadge}
				messageTooltipEllipsis={messageTooltipEllipsis}
				ariaLabel={ariaLabel}
				showTooltip={showTooltip}
				onClick={handleClick} // Usar la función handleClick al hacer clic
			/>
		</div>
	);
};
