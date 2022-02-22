import { useEffect, useState } from 'react';
import './App.css';

import { FormControl, InputLabel, MenuItem, NativeSelect, Select, Typography } from '@mui/material';

import { getCountries } from './api/api';
import { Box } from '@mui/system';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(res => {
      setCountries(res.data);
      console.log(res.data)
    })
  }, [])

  const handleSelected = () => {
    console.log("checked")
  }

  return (
    <div className="App">
      <Typography variant='h1' fontWeight='500'>So lieu COVID-19</Typography>
      <Box width='300px'>
        <FormControl fullWidth>
          <NativeSelect onChange={handleSelected}>
            {
              countries && countries.map((item, index) => <option key={index} value={item.ISO2}>{item.Country}</option>)
            }
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
