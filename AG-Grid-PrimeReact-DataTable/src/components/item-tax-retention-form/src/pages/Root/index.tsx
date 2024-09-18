import { lazy, type FC, useState } from 'react';
import './index.scoped.scss';
import { useTranslation } from 'react-i18next';
import { ProductDescriptionBox } from '@/components/ProductDescriptionBox/ProductDescriptionBox';

const SidePanel = lazy(() => import('@/components/SidePanel/sidepanel'));
const ButtonBox = lazy(() => import('@/components/ButtonBox/buttonBox'));
// const ProductDescriptionBox = lazy(() => import('@/components/ProductDescriptionBox'));

const Root: FC = () => {
	const [showPanel, setShowPanel] = useState(false);
	const { t } = useTranslation(['translation']);

	// Función para alternar el estado del panel
	const togglePanel = () => {
		setShowPanel(prev => !prev);
	};

	const handleButtonPanelCancel = () => {
		alert('Se canceló');
		setShowPanel(false);
	};

	const handleFormSubmit = () => {
		alert('Se guardó');
		setShowPanel(false);
	};

	return (
		<>
			{/* Botón para abrir/cerrar el panel */}
			<button onClick={togglePanel}>{showPanel ? 'Cerrar Panel' : 'Abrir Panel'}</button>

			{/* SidePanel con las dos cajas dentro */}
			{showPanel && (
				<SidePanel
					show={showPanel}
					title={t('index.SidePanel.title')}
					footer={<ButtonBox onClickPrimary={handleFormSubmit} onClickTertiary={handleButtonPanelCancel} />}
					onClosePanel={handleButtonPanelCancel}
				>
					<div className="skeleton-wrapper">
						{/* Primera caja - Producto y descripción */}
						<ProductDescriptionBox productCode="R2022" description="Botas mujer talla 36 color café" />
						{/* Segunda caja - Tabla de impuestos y opciones */}
						<div className="box tax-table-box">
							<div className="box-content">
								{/* Aquí iría el contenido de la tabla y demás opciones */}
								[Espacio para la tabla de impuestos]
							</div>
						</div>
					</div>
				</SidePanel>
			)}
		</>
	);
};

export default Root;
