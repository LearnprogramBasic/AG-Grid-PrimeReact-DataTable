import { FC } from 'react';
import { ManagementButton } from '../components';
import { ManagementButtonCellRendererProps } from '../typings';

export const ManagementButtonCellRenderer: FC<ManagementButtonCellRendererProps> = props => {
	const rowIndex = props.node?.rowIndex ?? -1;

	const handleClick = () => {
		alert(`Action button clicked for row ${rowIndex + 1}`);
	};

	const statusModeBadge = props.data.statusModeBadge;

	return (
		<ManagementButton
			onClick={handleClick}
			typeIcon="ellipsis"
			modeBadge={true}
			statusModeBadge={statusModeBadge}
			messageTooltipEllipsis="Action button"
			ariaLabel="Action Button"
			showTooltip={false}
		/>
	);
};
