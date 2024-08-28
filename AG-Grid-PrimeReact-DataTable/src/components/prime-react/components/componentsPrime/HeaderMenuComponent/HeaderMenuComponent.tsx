import React, { useState, useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './HeaderMenuComponent.scss';

interface HeaderMenuComponentProps {
  label: string;
  menuLabel: string;
}

const HeaderMenuComponent: React.FC<HeaderMenuComponentProps> = ({ label, menuLabel }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const menu = useRef<Menu>(null);

  const items = [
    {
      template: () => (
        <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }}>
          <Checkbox
            inputId="restrictItems"
            checked={checked}
            onChange={(e: CheckboxChangeEvent) => setChecked(!!e.checked)}
            pt={{
              root: {
                className: 'custom-checkbox', // Clase personalizada
              },
            }}
          />
          <label htmlFor="restrictItems" style={{ marginLeft: '0.5rem' }}>
            {menuLabel}
          </label>
        </div>
      ),
    },
  ];

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    menu.current?.toggle(event);
  };

  return (
    <div className="header-menu-container">
      <span className="header-label">{label}</span>
      <button
        className="p-column-header-icon p-link custom-button"
        onClick={handleButtonClick}
      >
        <i className="pi pi-ellipsis-v"></i>
      </button>
      <Menu 
        model={items} 
        popup 
        ref={menu}
        pt={{
          root: {
            className: 'custom-menu', // Clase personalizada
          },
        }}
      />
    </div>
  );
};

export default HeaderMenuComponent;
