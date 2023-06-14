import { WEATHER_API_KEY as API_KEY } from "@env";

export default async function getWeather(CITY) {
  try {
    console.log("Very Costly Run")
    let response = await fetch(
      `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${CITY}`
    );
    let data = response.json();
    if (!(data.error === undefined))
      throw Error("Sorry We werent able to fetch the weather");
    return data;
  } catch (error) {
    console.log("Weather could not be fetched");
  }
}
