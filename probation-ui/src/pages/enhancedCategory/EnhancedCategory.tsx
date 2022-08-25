import React, { useEffect, useState } from 'react';
import { useCategories } from '../../hooks/useCategories';
import { useAggregatedReviews } from '../../hooks/useAggregatedReviews';
import Filter from '../filter/Filter';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EnhancedCategoryRow from './EnhancedCategoryRow';

const EnhancedCategory = () => {
  const categories = useCategories();

  const aggregatedReviews = useAggregatedReviews();

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    if (categories.length) {
      setSelectedCategory(categories[0].key);
    }
  }, [categories.length]);

  return (
    <div>
      <Filter
        label='Category'
        selected={selectedCategory}
        values={categories}
        onChanged={setSelectedCategory}
      />
      <div style={{ height: 400, width: '100%' }}>
        <TableContainer component={Paper}>
          <Table aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <TableCell width='50%'>Name</TableCell>
                <TableCell width='40%'>Nr. of reviews</TableCell>
                <TableCell width='10%' />
              </TableRow>
            </TableHead>
            <TableBody>
              {(aggregatedReviews[selectedCategory] || []).map((row) => (
                <EnhancedCategoryRow
                  key={row.name}
                  row={row}
                  category={selectedCategory}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default EnhancedCategory;
