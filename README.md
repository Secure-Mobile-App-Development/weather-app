# Weather Application (Internship Sem 4)

This is a simple weather application that uses an API to fetch the weather data. It is a great way to learn how to use APIs and how to build a simple web application using React native.

## Contents
- [Summary](#summary)
- [Accessibility](#accessibility)
- [Output](#output)
- [Use cases](#use-cases)
- [Running the Application](#running-the-application)
- [Conclusion and learning outcome](#conclusion-and-learning-outcome)

## Summary
The application is very simple to use. Just enter a city name in the input field and Submit it. The application will then fetch the weather data for that city and display it in the output area. It initially provides you with 3 screens, ie. Home, City 1 and City 2. The Home screen shows your locations weather whereas you can change the cities you want to view in city 2 and city 3

## Accessibility
| ![Screenshot 2023-06-15 025318](https://github.com/Secure-Mobile-App-Development/weather-app/assets/93852415/6d58c383-7d87-4064-8f8f-b5021d3c1bdb) | ![Screenshot 2023-06-15 025402](https://github.com/Secure-Mobile-App-Development/weather-app/assets/93852415/058c39d1-85a6-4e4c-88a6-3c5d17787346) | ![Screenshot 2023-06-15 025511](https://github.com/Secure-Mobile-App-Development/weather-app/assets/93852415/2009972b-4969-4e99-89e3-c2daca7480a4) |
|:--:|:--:|:--:|
| **First Screen (User Location)** | **Details Displayed** | **Change City to be viewed** |

## Output
The output area will display the following information for the selected city:
- Current temperature
- Current humidity
- Current wind speed
- Current weather conditions

https://github.com/Secure-Mobile-App-Development/weather-app/assets/93852415/e9e5751f-8ab9-40b2-9d65-aaae148f9cad

## Use cases
This application can be used for a variety of purposes, such as:

- Checking the weather for the day ahead
- Planning outdoor activities
- Staying informed about weather conditions
- Making travel plans

## Running the Application
1. This is a simple repository and doesnt need much contributions hence there is no need to fork this repository

2. Clone this repository to your local environment
```
git clone https://github.com/Secure-Mobile-App-Development/weather-app.git
```

3. Enter the projects directory
```
cd weather-app
```

4. Install all the dependencies required for this project
```
npm install
```

5. Create a `.env` file in the root directory and initialize two variables with the following names
```
WEATHER_API_KEY="YOUR WEATHER STACK API KEY" 
// get the key from here https://weatherstack.com/login
```

6. Start the expo development server using the following command
```
npx expo start
```

## Conclusion and learning outcome
This application is a great way to learn how to use APIs and how to build a simple web application. By following the instructions in this README, you will be able to learn how to:

- Fetch data from an API
- Display data in a web page
- Use the requests library in React native

# I hope you enjoy using this application!
