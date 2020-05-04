import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";
import { fetchDailyData } from "../api";
import * as React from "react";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailydata] = useState([]);

  useEffect(() => {
    const fecthAPI = async () => {
      setDailydata(await fetchDailyData());
    };

    fecthAPI();
  }, [setDailydata]);

  const chart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "green",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  console.log(confirmed, recovered, deaths);
  const barchart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["red", "green", "blue"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return <div>{country ? barchart : chart}</div>;
};
export default Chart;
