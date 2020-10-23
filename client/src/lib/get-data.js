export const getData = async (city) => {
  const response = await fetch(`/?city=${city}`);

  console.log(response);
  const data = await response.json();
  console.log(data);
  // const { country } = data;
  // console.log(country);
  // return data;
};
