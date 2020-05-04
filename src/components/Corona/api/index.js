import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeUrl = url;
  if (country) {
    changeUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeUrl);

    const modifieldData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifieldData;
  } catch (error) {
    console.error("Fetch Failed...", error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(data);
    const modifieldData = data.map((dailyData) => ({
      comfirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifieldData;
  } catch (error) {
    console.log("fecth failed", error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log("fecth failed", error);
  }
};
