import React from 'react'

import { Card, CardContent, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';

const index = (props) => {

  if (props.report === undefined) {
    return <h1>No data</h1>;
  }

  return (
    <Box my={4}>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <Card>
            <CardContent>
              <Typography component='p'>So ca mac</Typography>
              <Typography component='span'>
                {props.report.Confirmed}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={4}>
          <Card>
            <CardContent>
              <Typography component='p'>So ca khoi</Typography>
              <Typography component='span'>
                {props.report.Recovered}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={4}>
          <Card>
            <CardContent>
              <Typography component='p'>So ca tu vong</Typography>
              <Typography component='span'>
                {props.report.Deaths}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default index