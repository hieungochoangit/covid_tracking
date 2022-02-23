import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

import moment from 'moment'

const generatorData = (data, type) => {
  const time = data.map((item) => moment(item.Date).format('DD/MM/YYYY'))
  const number = data.map((item) => item.Confirmed);

  return {
    chat: {
      type: type
    },
    title: {
      text: 'Total Confirmed'
    },
    xAxis: {
      categories: time,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total Confirmed'
      }
    },
    series: {
      data: number,
      title: {
        text: 'Total'
      }
    }
  }
}

const Index = (props) => {
  const [optionsLineChart, setoptionsLineChart] = useState({});

  useEffect(() => {
    setoptionsLineChart(generatorData(props.totalReport, 'splice'));
  }, [props.totalReport])

  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <HighchartsReact highcharts={Highcharts} options={optionsLineChart} />
      </Grid>
    </Grid>
  )
}

export default Index