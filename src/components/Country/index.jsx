import React from 'react'

import { FormControl, InputLabel, NativeSelect, Grid } from '@mui/material';
import { Box } from '@mui/system';

const index = (props) => {
  const { countries, onChange } = props

  return (
    <Box my={4}>
      <Grid container width='300px'>
        <FormControl fullWidth>
          <InputLabel shrink variant='standard' htmlFor='select-country'>Quoc gia</InputLabel>
          <NativeSelect
            onChange={onChange}
            inputProps={{
              name: 'Country',
              id: 'select-country'
            }}
          >
            {
              countries && countries.map((item, index) => <option key={index} value={item.ISO2}>{item.Country}</option>)
            }
          </NativeSelect>
        </FormControl>
      </Grid>
    </Box>
  )
}

export default index