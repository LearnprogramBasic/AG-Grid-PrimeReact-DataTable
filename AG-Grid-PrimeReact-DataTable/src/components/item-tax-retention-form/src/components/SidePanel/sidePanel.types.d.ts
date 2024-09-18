/// <reference types="react" />
export interface ISidePanelProps {
	show: boolean;
	title: string;
	children?: React.ReactNode;
	footer?: React.ReactNode;
	header?: React.ReactNode;
	onClosePanel?: () => void;
	onExternalLink?: () => void;
}
