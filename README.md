# Formula One Stats
 This web app allows users to look up their favorite drivers, teams, and tracks in Formula One. Results are not limited to just the current season, and actually go all they way back to 1950! Simply use one of the search bars to query for an item, and the app will show you the results along with details pertaining to each item. 

 # Deployed Website

https://formula-one-stats.herokuapp.com/

# How to use

Navigate to the home page, and input your query in the related search boxes. You can search for drivers, teams, tracks, and rankings.
Note: To search for rankings you must input a year.

# Screenshots

![ScreenShot](https://i.postimg.cc/900YYbcD/Screen-Shot-2020-12-10-at-10-10-21-PM.png)
![ScreenShot](https://i.postimg.cc/RV3T3gP8/Screen-Shot-2020-12-10-at-10-10-55-PM.png)
![ScreenShot](https://i.postimg.cc/h4ZrPk0T/Screen-Shot-2020-12-10-at-10-11-13-PM.png)
![ScreenShot](https://i.postimg.cc/D0NdjGzB/Screen-Shot-2020-12-10-at-10-11-27-PM.png)

# Steps to install

- Fork and Clone github rep to your machine
- Run npm install
- Add API key to env file (API used: https://rapidapi.com/api-sports/api/api-formula-1)
- Run sequelize db:create formula-one-stats_development
- run command sequlize db:migrate to perform necessary migrations
```