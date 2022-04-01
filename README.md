<img align="left" width="40" height="auto" style="padding-right: 10px padding-top: 10px" src="public/logo.png" alt="Logo of DevelUp">

#  DevelUp +


A fullstack application that allows users to create flash cards and organize them by categories. Inside each category will have a list of decks. For example, inside a Web Developer catergory there might be a deck for React and Node. Inside each deck will have a series of cards that contain questions of varying difficulties. A user can submit their answers to the questions and then the actual answer will be revealed. A user can utilize the app to see what topics they understand and what topics they need to improve on. It's time to DevelUp! 

## User Stories
---
* I would like to look at community made decks.
* I would like to create my own decks and see my own decks.
* I would like to edit my own decks.

## Deployed Link
---
TBA
---
## Installation Instructions
---
### Client-Side
- Fork and clone this repository.
- Run ` npm i ` to install the dependencies.
- Create a .env.local and store the `REACT_APP_SERVER_URL`


### Server-Side
- Fork and clone this [repository](https://github.com/Jamelscott/Develup-server)
- Run `npm i ` to install the dependencies
- Create a .env and store the `JWT_SECRET` and `PORT` number


## Tech Used
---
* NodeJS
* Express
* React
* MongoDB
* CSS
* Postman
* Figma
* Trello
* Git


## [noSQL] Data Model Diagram
---

![and RD](/public/DevelUp-ERD.png)


## FRONTEND ROUTES 
---
|Path | Purpose|
|----| ------ |
| `/` | login page|
| `/signup` | register page|
| `/profile` | profile page |
| `/category` | category page|
| `/category/:id` | decks page|
| `/category/:id/deck/:deckId` | cards page |
| `/category/:id/deck/:deckId` | edit page |
| `/about` | about page |

## BACKEND ROUTES
---
| Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | `api-v1/category` | displays all of the categories of decks
| GET | `api-v1/category/:id` | displays all decks in a specific category |
| GET | `api-v1/category/:id/deck/:deckId` | displays the cards of a specific deck | 
| GET | `api-v1/images` | reads all images
| PUT | `api-v1/category/:id/deck/:deckId` | make changes of the cards |
| DELETE | `api-v1/category/:id/deck/:deckId` | deletes the whole deck and empty categories |
| POST | `api-v1/category` | creates a deck |
| POST | `api-v1/users/login` | login |
| POST | `api-v1/images` | create profile picture |
| POST | `api-v1/users/register` | register |


## Wireframes
---
![Sign-In](/public/wireframes/Sign%20In.png)
![Register](/public/wireframes/Sign%20Up.png)
![Profile](/public/wireframes/Profile%20Page.png)
![Create-Deck](/public/wireframes/Create%20a%20deck%20Page.png)
![Category](/public/wireframes/Category%20Page.png)
![Decks](/public/wireframes/Decks%20Page.png)
![Card-Question](/public/wireframes/Card%20Page%20%5BQuestion%5D.png) 
![Card-Answer](/public/wireframes/Card%20Page%20%5BAnswer%5D.png)
![Card-Complete](/public/wireframes/Completed%20Page.png)



 ## Final Product Images
---
Sign In
![Sign-In](/public/images/signin.png)
Sign Up
![Sign-Up](/public/images/register.png)
Profile
![Profile](/public/images/profile.png)
Categories
![Categories](/public/images/categories.png)
Create a deck
![Create a deck](/public/images/create-deck.png)
Decks
![Decks](/public/images/decks.png)
Card Question
![Card Question](/public/images/question.png)
Card Answer
![Card Answer](/public/images/answer.png)



 # MVPs
 ---
- [X] Build a frontend client using React
- [X] Build a MongoDB database of users that can be accessed to create and login users
- [X] Update profile pictures
- [X] CRUD for category, decks and cards
- [X] Login functionality
- [X] Register functionality
- [X] Logout functionality


# Stretch Goals
---
- [] Users are able to favorite their decks
- [] Allow users to choose pre-sets of the difficulty level (Easy, Medium, Hard)
- [] Users are able to upload images of the decks
- [] Making create decks and edit cards page responsive
