import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CategoryRow, Review } from '../../types/types';

const columns: {
  key: keyof Review;
  name: string;
  rAlign?: boolean;
}[] = [
  { key: 'hotel', name: 'Hotel' },
  { key: 'country', name: 'Country' },
  { key: 'city', name: 'City' },
  { key: 'visit_type', name: 'Visit Type' },
  { key: 'text', name: 'Text' },
  { key: 'score', name: 'Score', rAlign: true },
];

const EnhancedCategoryRow = (props: { row: CategoryRow; category: string }) => {
  const { row, category } = props;

  const [open, setOpen] = useState(false);

  const filteredColumns = columns.filter((row) => row.key !== category);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell>{row.noOfReviews}</TableCell>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Reviews
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    {filteredColumns.map((col) => (
                      <TableCell align={col.rAlign ? 'right' : 'left'}>
                        {col.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.reviews.map((review) => (
                    <TableRow key={review.id}>
                      {filteredColumns.map((col) => (
                        <TableCell align={col.rAlign ? 'right' : 'left'}>
                          {review[col.key]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default EnhancedCategoryRow;
