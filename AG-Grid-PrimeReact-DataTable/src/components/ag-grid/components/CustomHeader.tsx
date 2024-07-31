import React, { useState, useEffect, useRef } from 'react';
import { ICellEditorParams } from 'ag-grid-community';

const CustomCellEditor: React.FC<ICellEditorParams> = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.value);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const refInput = useRef<HTMLInputElement>(null);

  const options = ['Producto A', 'Producto B', 'Producto C', 'Producto D'];

  useEffect(() => {
    setFilteredOptions(options);
  }, []);

  useEffect(() => {
    if (refInput.current) {
      refInput.current.focus();
    }
  }, []);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()))
    );
  }, [searchValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    props.stopEditing();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.stopEditing();
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        ref={refInput}
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{ width: '100%' }}
      />
      {filteredOptions.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          maxHeight: '150px',
          overflowY: 'auto',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          zIndex: 1,
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {filteredOptions.map(option => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{ padding: '8px', cursor: 'pointer' }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomCellEditor;
