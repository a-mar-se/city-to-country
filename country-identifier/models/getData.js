import fetch from 'node-fetch';

const { OPENCAGE_API_KEY } = process.env;

export const getData = async (city) => {
  try {
    const country = await getCountryByCity(city);
    return country;
  } catch (error) {
    throw new Error(error);
  }
};

const getCountryByCity = async (city) => {
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=madrid&key=3b6bbe7fc8ef42d699c55734d9d49890&language=en&pretty=1`,
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
