import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const { OPENCAGE_API_KEY } = process.env;

export const getData = async (city) => {
  try {
    const country = await getCountryByCity(city);
    console.log(country);
    return country;
  } catch (error) {
    throw new Error(error);
  }
};

const getCountryByCity = async (city) => {
  try {
    console.log(city);
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPENCAGE_API_KEY}`,
    );
    const data = await response.json();
    const [firstResult] = data.results;
    const country = firstResult.components.country;
    return country;
  } catch (error) {
    throw new Error(error);
  }
};

const getRandom = async (ccc) => {};
