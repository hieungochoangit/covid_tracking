import { Grid } from '@mui/material'
import React from 'react'

import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

const index = () => {
  const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Chart Covid'
    },
    subtitle: {
      text: "highcharts"
    },
    series: [
      {
        data: [1, 2, 4, 5, 6]
      }
    ]
  }


  return (
    <Grid container spacing={3}>
      <Grid item sm={8}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Grid>
      <Grid item sm={4}>
        4
      </Grid>
    </Grid>
  )
}

export default index