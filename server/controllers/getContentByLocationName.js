import { getData } from '../models/getData.js';

export const getContentByLocationName = async (request, response, next) => {
  const {
    query: { city },
  } = request;

  try {
    const data = await getData(city);
    console.log(data);
    return response.status(200).send(data);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};
