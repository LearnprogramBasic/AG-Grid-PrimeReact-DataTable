import { FC } from 'react';
import { Checkbox,  } from 'primereact/checkbox';
import { LabeledCheckboxProps } from '../../../../../typings/rowData.ts.ts';


const LabeledCheckbox: FC<LabeledCheckboxProps> = ({ checked, label, onChange }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox 
                checked={checked} 
                onChange={onChange} 
                style={{ marginRight: '8px' }} // Espaciado entre checkbox y label
            />
            <span>{label}</span>
        </div>
    );
};

export default LabeledCheckbox;
