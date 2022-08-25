import React, { useEffect, useMemo, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useReviews } from '../../hooks/useReviews';
import Filter from '../filter/Filter';
import { FilterOption } from '../../types/types';
import { getUniqueScores } from '../../utils/utils';

const columns: GridColDef[] = [
  { field: 'hotel', headerName: 'Hotel', flex: 25 },
  { field: 'country', headerName: 'Country', flex: 15 },
  { field: 'city', headerName: 'City', flex: 15 },
  { field: 'visit_type', headerName: 'Visit Type', flex: 15 },
  { field: 'text', headerName: 'Text', flex: 30 },
];

const Score = () => {
  const reviews = useReviews();

  const [scores, setScores] = useState<FilterOption[]>([]);

  const [selectedScore, setSelectedScore] = useState('');

  useEffect(() => {
    if (reviews.length) {
      const uniqueScores = getUniqueScores(reviews);
      setScores(uniqueScores);
      setSelectedScore(uniqueScores[0].key);
    }
  }, [reviews.length]);

  const filteredReviews = useMemo(() => {
    return reviews.filter((row) => row.score.toString() === selectedScore);
  }, [selectedScore, reviews]);

  return (
    <div className='wrapper'>
      <Filter
        label='Score'
        selected={selectedScore}
        values={scores}
        onChanged={setSelectedScore}
      />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filteredReviews}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          loading={!filteredReviews.length}
        />
      </div>
    </div>
  );
};

export default Score;
