import { FC } from 'react';
import { ButtonIconAtom } from '@siigo-arquitectura/button-icon-atom-react';
import { useGridStore } from '@/services/store/useGridStore';
import { TrashIconCellRendererProps } from '@typings/typingsGrid/types';
import '@components/Grid/CellRenderers/Style/cell-renderer-common.scoped.scss';

export const TrashIconCellRenderer: FC<TrashIconCellRendererProps> = ({
	node,
	api,
	onClick,
	icon = 'fas fa-trash',
	size = 'm',
	color = 'tertiary',
}) => {
	const removeRowFromStore = useGridStore(state => state.removeRow);

	const handleClick = () => {
		if (onClick) {
			onClick();
		} else if (api && node) {
			console.log(`Removing row with data:`, node.data);

			const rowIndex = useGridStore.getState().rowData.findIndex(row => row === node.data);

			if (rowIndex >= 0) {
				removeRowFromStore(rowIndex);
			}

			api.applyTransaction({ remove: [node.data] });
		}
	};

	return (
		<div className="trash-icon-renderer">
			<ButtonIconAtom icon={icon} size={size} color={color} onClick={handleClick} />
		</div>
	);
};
