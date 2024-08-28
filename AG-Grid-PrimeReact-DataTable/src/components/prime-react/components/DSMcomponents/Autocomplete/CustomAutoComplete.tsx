import { FC } from 'react';
import {
  AutocompleteMoleculeCustomEvent,
  DropdownListGroupItem,
  DropdownListSingleItem,
  DropdownTableDataItem,
} from '@siigo-arquitectura/autocomplete-molecule';
import { AutocompleteMolecule } from '@siigo-arquitectura/autocomplete-molecule-react';
import { ProductSearchRendererProps } from '../../../../../typings/rowData.ts';

export const CustomAutoComplete: FC<ProductSearchRendererProps> = ({
  data,
  placeholder,
  label,
  onValueSelectChange,
}) => {
  const handleSelectChange = (
    event: AutocompleteMoleculeCustomEvent<(DropdownListSingleItem | DropdownListGroupItem)[] | DropdownTableDataItem[]>
  ) => {
    const selectedItems = event.detail;
    onValueSelectChange(selectedItems as (DropdownListSingleItem | DropdownListGroupItem)[]);
  };

  return (
    <AutocompleteMolecule
      data={data}
      placeholder={placeholder}
      label={label}
      onValueSelectChange={handleSelectChange}
    />
  );
};
