# my-weather-app — a weather forecast app written in AngularJS

<img src="app/img/myWaetherApp.jpeg" alt="myWeather App"/>

"myWeather App" is a small AngularJS project that makes use of the [OpenWeatherMap](http://openweathermap.org/)
service for fetching and displaying weather data and forecasts based on a given location (city).


## Code challenge 

* Building an app with AngularJS 
* Building an app based on the [OpenWeatherMap API](http://openweathermap.org/API/)
* Bootstrapping an AngularJS app: Basic modules and view definition, ng-app, ng-view
* Defining a controller for handling the weather data in $scope
* Defining a service for fetchi	ng weather data from openweathermap.com via JSONP
* Defining a custom directive for instantly embedding sort of "weather data day panel"
* Setting up unit test run with karma/jasmine

## Installation
By using git UI
* Download as zip and unzip the same. 
* Install latest node js
* All development dependency where already resolved
* if need to run server then
* open  command promt and go to project base dir
* type npm start
* this should start server on port 8000 (default port configured if not changed)
* Hit http://localhost:8000/app/index.html
* You should see base page where you can select city from menu or type your custom city and hit search button.
	
via git and npm:
$ git clone git@github.com:prafullkherde/my-weather-app.git [my-app-name]
$ cd [my-app-name]
$ npm install


## Run application via server

You can pick one of these options:
* serve this repository with a web server of-your-choice
* install node.js and run `scripts/web-server.js`

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.

To see what exact response we get from  openweathermap.org refer project_base\rest\response.json

##Demo
To view demo of the application on cloud please hit below link.
http://myweatherapp.cfapps.io

## Help
Please drop a mail to me on prafull.kherde@gmail.com with all details

## Can Do or Can improve with more time
* This can be fitted like a just a one directive 
* Can add proper logging system 
* I can use more secure way as https://darksky.net/dev/docs/forecast
* Some time it required time to get response so you see? On screen
* Make use (and parse) more provided weather data (+ add filters, formatting)
* Internationalization / Localization
* Make it available off line 
* Provide "use current location" and fetch data via lat/lon
* Build a view with n-day-forecast in typical weather app style
* Improve UI/UX by integrating a fancy design, transitions and effects
