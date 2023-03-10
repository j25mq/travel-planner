# Table of contents

- [Project Summary and features](#project-summary)
- [Installation Requirements](#requirements)
- [Design system](#design-system)
- [Code owners](#code-owners)
 
## [Project Summary and features](#project-summary)
The project included a simple form asking the user to enter at least a location, and a date, as well as other optional information such as flight & hosting information and to add notes. The trip added can be found in 'my trips', in which the user can see the number of trips planner and delete one or multiple trips.

## [Installation Requirements](#requirements)
Download ZIP on Github or clone it from profile.
![Screenshot 2023-03-03 at 9 00 48 AM](https://user-images.githubusercontent.com/107758701/222664932-d5b56a3a-88c7-4696-b56e-5ab42df44da4.png)
Install package and start server ('cd .../travel-planner' , 'npm install').
The project should be running on http://localhost:8080/.

### Interface and Architecture

#### Architecture
- dist
  - js
    - app.js
    - my-trips.js
  - media
    - journal.svg
  - styles
    - app.css
    - footer.css
    - header.css
    - main.css
  - index.html
  - my-trips.html
- js
  - app.js
  - my-trips.js
- media
  - journal.svg
- node_modules
- src
  - client
    - css
      - app.css
      - footer.css
      - header.css
      - main.css
    - js
      - app.js
      - my-trips.js
    - media
      - journal.svg
    - index.js
  - server
    - index.js
    - mockAPI.js
- styles
  - app.css
  - footer.css
  - header.css
  - main.css
- index.html
- my-trips.html
- webpack.dev.js
- webpack.prod.js
- package-lock.json
- package.json
- README

#### Usability
- usable on modern desktop, tablet, and phone browsers
- **responsive layout**
- **reponsive navbar**

#### Content Structure
- homepage (app1) built with HTML
- trips added page (app2) built with JS

### Documentation

#### README
- basic information, project description, usage, dependencies - correct markdown syntax should be used

#### Comments
- comments should be present at the beginning of each procedure and class

# [Code owners](#code-owners)
Website: https://www.juliemiquelard.com/ <br>
Github: https://github.com/j25mq <br>
Instagram: https://www.instagram.com/j25mq/
