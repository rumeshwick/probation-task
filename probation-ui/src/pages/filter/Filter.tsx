import React from 'react';
import './Styles.css';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type Props = {
  label: string;
  values: { key: string; name: string }[];
  selected: string;
  onChanged: (value: string) => void;
};

const Filter = ({ label, values, selected, onChanged }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChanged(event.target.value);
  };

  return (
    <FormControl className='filter-selector' sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id='filter-selector'>{label}</InputLabel>
      <Select
        labelId='filter-selector'
        id='filter-selector'
        value={values.length ? selected : 'loading'}
        label={label}
        onChange={handleChange}
      >
        {values.length ? (
          values.map((row) => (
            <MenuItem key={row.key} value={row.key}>
              {row.name}
            </MenuItem>
          ))
        ) : (
          <MenuItem value='loading'>Loading...</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default Filter;
