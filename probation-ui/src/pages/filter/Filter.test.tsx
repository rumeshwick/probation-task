import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from './Filter';

describe('Filter', () => {
  it('should render filter component', async () => {
    const label = 'Category';
    render(
      <Filter label={label} selected='' values={[]} onChanged={() => {}} />
    );
    const elm = screen.getAllByText(label);
    expect(elm).toBeTruthy();
  });

  it('should render given options', async () => {
    const label = 'Category';
    const values = [
      { key: 'country', name: 'Country' },
      { key: 'hotel', name: 'Hotel' },
    ];
    render(
      <Filter
        label={label}
        selected='country'
        values={values}
        onChanged={() => {}}
      />
    );
    const elm = screen.getAllByText('Country');
    expect(elm).toBeTruthy();
  });
});
