export type ButtonClickSource = 'primary' | 'secondary' | 'tertiary';
export interface EventButtonBox {
	source: ButtonClickSource;
	value: unknown;
}
export interface IButtonBox {
	onClickPrimary?: () => void;
	onClickSecondary?: () => void;
	onClickTertiary?: () => void;
}
