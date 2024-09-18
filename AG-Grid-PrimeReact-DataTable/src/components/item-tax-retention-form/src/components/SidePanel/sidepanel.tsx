import { SidePanelMolecule } from '@siigo-arquitectura/side-panel-molecule-react';
import './sidepanel.scoped.scss';
import { ISidePanelProps } from './sidePanel.types';
import { FC, useEffect, useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

const SidePanel: FC<ISidePanelProps> = ({ title, show, children, footer, onClosePanel }) => {
	const size = useWindowSize();
	const [panelWidth, setPanelWidth] = useState('max(70vw, 600px)');

	useEffect(() => {
		if (!size?.width) return;
		const currentWidth = size.width >= 1440 ? '30vw' : 'max(70vw, 600px)';
		setPanelWidth(currentWidth);
	}, [size]);

	return (
		<SidePanelMolecule
			id="panelLeft"
			sidePanelTitle={title}
			showSideButton={false}
			showPanel={show}
			hiddenOverlay={false}
			preventDefaultClosing
			width={panelWidth}
			overflow={false}
			onClosePanel={onClosePanel}
		>
			<section slot="body-slot" className="organization-general-info" role="form">
				{children}
			</section>

			<footer slot="footer-slot">{footer}</footer>
		</SidePanelMolecule>
	);
};

export default SidePanel;
