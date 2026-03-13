#Weather Application

This Project for made for self practice.This is real time weather forecast application which is single page application built using React JS.

It is Simple Weather application which has better user interface.

<img width="1892" height="868" alt="image" src="https://github.com/user-attachments/assets/7dccc1ca-9d17-482c-9ec2-5bc23a0a6f61" />


*It has better state management which enables to see weather conditions in your area.

*The weather data is fetched from open weather map api using axios library in react.

##Setup Instructions

*Install Dependencies
npm install

*Configure Environment Variables
Create a .env file in the root directory.

Add your open weather map API URLs or key.

*Run the Development Server
npm start

## Acknowledgements

I would like to acknowledge the assistance I received from ChatGPT for its valuable guidance and support during the development of this project.
## OpenWeatherMap API Key

This project utilizes data from the OpenWeatherMap API. To run the project locally or deploy it, you'll need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/) and include it in your application's configuration.

Please sign up on the OpenWeatherMap website to get your API key. Once you have obtained the API key, you can include it in your application's settings or environment variables.

Replace `your_api_key_here` with the API key you obtained from OpenWeatherMap. Make sure not to share your API key publicly.

After adding the API key to the `.env.local` file, you can access it in your application using `process.env.REACT_APP_API_KEY`.

