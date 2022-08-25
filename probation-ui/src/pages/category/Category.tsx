import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useCategories } from '../../hooks/useCategories';
import { useAggregatedReviews } from '../../hooks/useAggregatedReviews';
import Filter from '../filter/Filter';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 50 },
  { field: 'noOfReviews', headerName: 'Nr. of reviews', flex: 50 },
];

const Category = () => {
  const categories = useCategories();

  const aggregatedReviews = useAggregatedReviews();

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    if (categories.length) {
      setSelectedCategory(categories[0].key);
    }
  }, [categories.length]);

  return (
    <div className='wrapper'>
      <Filter
        label='Category'
        selected={selectedCategory}
        values={categories}
        onChanged={setSelectedCategory}
      />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={aggregatedReviews[selectedCategory] || []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          loading={!aggregatedReviews[selectedCategory]}
        />
      </div>
    </div>
  );
};

export default Category;
