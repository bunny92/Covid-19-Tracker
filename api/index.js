import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const counturl = "https://api.covid19india.org/data.json";

export const statewisecount = async (state) => {
  try {
    let statecount = await axios.get(counturl);
    let states = statecount.data.statewise.filter(
      (item) => item.state == state
    );
    return states[0];
  } catch (error) {
    return error;
  }
};

export const listState = async () => {
  try {
    const {
      data: { statewise },
    } = await axios.get(counturl);
    // { active, confirmed, deaths, lastupdatedtime, recovered }
    return { statewise };
  } catch (error) {
    return error;
  }
};

export const getCurrentPlace = async (latitude, longitude) => {
  let url = "https://geocode.xyz/18.774715,84.409386?json=1";
  try {
    const {
      data: { city, state, country, staddress },
    } = await axios.get(url);
    return { city, state, country, staddress };
  } catch (error) {
    return error;
  }
};
export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
