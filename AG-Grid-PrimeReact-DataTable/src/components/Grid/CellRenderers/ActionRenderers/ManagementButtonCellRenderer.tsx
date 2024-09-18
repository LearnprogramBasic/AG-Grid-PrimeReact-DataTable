import { FC } from 'react';
import { ManagementButtonIconMolecule } from '@siigo-arquitectura/management-button-icon-molecule-react';
import { ManagementButtonCellRendererProps, ManagementButtonIconMoleculeProps } from '@typings/typingsGrid/types';
import '@components/Grid/CellRenderers/Style/cell-renderer-common.scoped.scss';

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

	const handleClick = () => onClick?.() ?? alert(`Action button clicked for row ${rowIndex + 1}`);

	return (
		<div className="shared-renderer-styles">
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
