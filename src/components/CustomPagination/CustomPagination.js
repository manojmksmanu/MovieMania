import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './CustomePagination.css'
export default function PaginationSize({ pages, setPageNo }) {
  const pageChange = (event, page) => {
    setPageNo(page);
    window.scroll(0, 0);
  }
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 10, }} >
      <Stack spacing={2}>
        <Pagination className='pagination' color='primary' onChange={pageChange} count={pages} size="large" />
      </Stack>
    </div>
  );
}