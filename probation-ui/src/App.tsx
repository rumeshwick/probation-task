import React, { useState } from 'react';
import './App.css';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import Category from './pages/category/Category';
import Score from './pages/score/Score';
import EnhancedCategory from './pages/enhancedCategory/EnhancedCategory';

const viewButtons = [
  { label: 'Category', value: 'category' },
  { label: 'Score', value: 'score' },
  { label: 'Overview', value: 'overview' },
];

const App = () => {
  const [viewType, setViewType] = useState<string>(viewButtons[0].value);

  const handleViewType = (
    _event: React.MouseEvent<HTMLElement>,
    newViewType: string
  ) => {
    if (newViewType !== null) {
      setViewType(newViewType);
    }
  };

  const getView = () => {
    if (viewType === 'category') {
      return <Category />;
    } else if (viewType === 'score') {
      return <Score />;
    }
    return <EnhancedCategory />;
  };

  return (
    <div className='App'>
      <ToggleButtonGroup
        value={viewType}
        exclusive
        onChange={handleViewType}
        aria-label='View Type'
        className='view-type'
      >
        {viewButtons.map((row) => (
          <ToggleButton
            key={row.value}
            value={row.value}
            aria-label={row.label}
          >
            {row.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {getView()}
    </div>
  );
};

export default App;
