import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Card.module.css";
import moment from "moment";
import CountUp from "react-countup";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) return "null";
  return (
    <Grid container spacing={3} justify="center">
      <Grid item component={Card} className={[styles.card, styles.infected]}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5" component="h2">
            {confirmed.value}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {moment(lastUpdate).format("MMMM Do YYYY")}
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} className={[styles.card, styles.recovered]}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {moment(lastUpdate).format("MMMM Do YYYY")}
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} className={[styles.card, styles.deaths]}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5" component="h2">
            {deaths.value}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {moment(lastUpdate).format("MMMM Do YYYY")}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};
export default Cards;
