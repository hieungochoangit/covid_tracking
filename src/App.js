import { useEffect, useState } from 'react';
import './App.css';

import { Typography } from '@mui/material';

import { getCountries, getReportCountry } from './api/api';

import Country from './components/Country';
import Highlight from './components/Highlight';
import Summary from './components/Summary';
import { Box } from '@mui/system';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('cf');
  const [report, setReport] = useState({});

  useEffect(() => {
    getCountries().then(res => {
      setCountries(res.data);
    })
  }, [])

  useEffect(() => {
    getReportCountry(selectedCountry).then(res => {
      setReport(res.data[res.data.length - 1]);
    })
  }, [selectedCountry])

  useEffect(() => {
    console.log(selectedCountry)
  })

  const handleChange = (e) => {
    setSelectedCountry(e.target.value.toLowerCase());
  }

  return (
    <div className="App">
      <Box mx='auto' width='1280px'>
        <Typography variant='h1' fontWeight='500'>So lieu COVID-19</Typography>

        <Country countries={countries} onChange={handleChange} value={selectedCountry} />
        <Highlight report={report} />
        <Summary />
      </Box>
    </div>
  );
}

export default App;
