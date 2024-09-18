import { FC } from 'react';
import { ButtonBoxMolecule } from '@siigo-arquitectura/button-box-molecule-react';
import { EventButtonBox, IButtonBox } from './buttonBox.types';
import { useTranslation } from 'react-i18next';

const ButtonBox: FC<IButtonBox> = ({ onClickPrimary, onClickTertiary }) => {
	const { t } = useTranslation(['translation']);
	const handleButtonClick = (event: CustomEvent<EventButtonBox>) => {
		const { source } = event.detail;
		if (source === 'primary' && onClickPrimary) {
			onClickPrimary();
		} else if (source === 'tertiary' && onClickTertiary) {
			onClickTertiary();
		}
	};

	return (
		<ButtonBoxMolecule
			primary-button-text={t('components.ButtonBox.save')}
			tertiaryButtonText={t('components.ButtonBox.cancel')}
			onOptionSelect={handleButtonClick}
			onClickButton={handleButtonClick as unknown as (event: Event) => void}
		/>
	);
};

export default ButtonBox;
