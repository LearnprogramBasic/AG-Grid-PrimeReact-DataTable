import { FC } from 'react';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './PriceDropdown.scss';

interface UnstyledDropdownProps {
  value: number | null;
  onChange: (value: number) => void;
}

const UnstyledDropdown: FC<UnstyledDropdownProps> = ({ value, onChange }) => {
  const priceOptions = [
    { label: 'Lista 1', value: 2500 },
    { label: 'Lista 2', value: 5000 },
    { label: 'Lista 3', value: 10000 },
    { label: 'Lista 4', value: 2500 },
    { label: 'Lista 5', value: 5000 },
    { label: 'Lista 6', value: 10000 }
  ];

  const formatCurrency = (value: number) => {
    return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  };

  const selectedValueTemplate = (option: { label: string; value: number } | null) => {
    return option ? formatCurrency(option.value) : 'Seleccione un precio';
  };

  const optionTemplate = (option: { label: string; value: number }) => {
    return (
      <div className="dropdown-item">
        <span>{option.label}</span>
        <span style={{ marginLeft: 'auto' }}>{formatCurrency(option.value)}</span>
      </div>
    );
  };

  return (
    <div className="card custom-dropdown">
      <Dropdown
        value={value}
        options={priceOptions}
        onChange={(e) => onChange(e.value)}
        optionLabel="label"
        optionValue="value"
        valueTemplate={selectedValueTemplate}
        itemTemplate={optionTemplate}
        
      />
    </div>
  );
};

export default UnstyledDropdown;
