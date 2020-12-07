# Formula One Stats
 This web app allows users to look up their favorite drivers, teams, and tracks in Formula One. Results are not limited to just the current season, and actually go all they way back to 1950! Simply use one of the search bars to query for an item, and the app will show you the results along with details pertaining to each item. For example:

 Searching for drivers allows you to see a photo, their nationaility, past teams, and birth date.
 Searching for teams allows you to see their logo, head staff names, engine, and tire choice.
 Searching for tracks allows you to see the track layout, length, owners, and Grad Prix name.

 



 # How to Play

Using the 'W' and 'S' keys, move your paddle up and down. The person who scores a point 'serves' the next round. Try to apply spin by hitting the ball with your paddle moving. This manipulates the speed of the ball and makes it harder for your opponent to return. The game is played in a best of 7 format, so first to 4 points wins.

Click the "Play" button to get started. If you need to reset the table, click the 'reset' button. The score totals are at the bottom of the page.


## Steps to Install on local computer
1. Go to [repo](https://github.com/wjlock/pong-revisited) on Github profile
2. `fork` and `clone` repo
3. Clone to local machine
```text
git clone https://github.com/wjlock/pong-revisited.git
```
4. Go to `pong-revisted` directory
5. Open `index.html` in browser
```text
open index.html
```

## Roadmap

Items to add in the future, in no particular order:

1.) Difficulty levels
2.) Rounds
3.) center Net


| Functions | Description |
| ----------- | ----------- |
| `handleWallCollisionHuman` | Handle paddle collision with upper and lower bounds|
| `detectPaddleHit` | Handle paddle/ball collision |
| `computerAI` | Handle movement of computer paddle|
| `checkForPoint` | On each game tick, checks if a point was scored |
| `checkForWin` | On each game tick, checks if there is a winner|
| `howToPlay` | Handles "how to play" popup |
| `launchBall` | launches the ball in a randow y direction based on last point scored|
| `resetBoard` | Function to put board back to inital state after button click |

## Technologies Used

This project was built using HTML, CSS, and Javascript.