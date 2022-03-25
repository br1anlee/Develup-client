# DevelUp
A fullstack application that allows users to create flash cards and organize them by categories. Inside each category will have a list of decks. For example, inside a Web Developer catergory there might be a deck for React and Node.
Inside each deck will have a series of cards that contain questions of varying difficulties. A user can submit their answers to the questions and then the actual answer will be revealed. A user can utilize the app to see what topics they understand and what topics they need to improve on.
It's time to DevelUp! 

## User Stories
* As an unregistered user, I would like to sign up with name, username, email, and password
* As a registered user, I would like to sign in with email and password
##### As a signed in user: 
* I would like to be able to change my name and or username
* I would like to be able to add a profile picture
* I would like to be able to sign out
* I would like to see a list of card decks to study
* I would like the ability to add certain decks to my favorites
* I would like to have my own profile page which displays my favorite decks
* I would like to remove decks from my favorites list
* I would like to see the cards that are inside the decks
  - see the questions on the cards
  - after submitting see the actual answer

## Installation Instructions
- TBD

## Tech Used
* NodeJS
* Express
* React
* MongoDB
* Bootstrap

## [noSQL] Data Model Diagram

![and RD](DevelUp-ERD.drawio.png)

## RESTful Routing
| Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | / | home page that allows user to sign in or sends user to create an account |
| POST | /login | user signs in |
| POST | /register | creates a new user |
| GET  | /profile | renders the profile page |
| PUT  | /profile | updating username and profile picture | 
| GET | /category | page that shows all the categories|
| GET | /category/:id | page that shows all of the decks of that category|
| PUT | /category/:id/:id | user can favorite a deck |
| GET | /profile | users can see all favorite decks |
| DELETE | /profile | user can delete a favorite |


## Stretch RESTful Routing Goal
| Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| POST | /category | users can create decks |
| PUT | /category/:id | user can edit their created decks |
| DELETE | /category/:id | user can delete their created decks|


 # MVPs
- [] Build a frontend client using REACT
- [] Build a Mongodb database of users that can be accessed to create and login users
- [] Users are able to log out from the application
- [] Allow users to have the ability to upload their own profile picture
- [] Have one category with 2 decks for users to study from
- [] Allow users to favorite their deck
- [] Allow users to see all of their favorites 
- [] Allow users to update their profile 
- [] Allow users to delete their favorites 
- [] Allow users to see the cards that are inside the decks
- [] Allow users to type the answers to the questions in the deck of cards

# Stretch Goals
- [] Create multiple categories with at least 2 decks of flash cards
- [] Create an about DevelUp + page 
- [] Allow users to create a deck of flash cards
- [] Allow users to update and/or delete the deck of flash cards they have created
- [] Allow users to favorite deck of flash cards of their liking
- [] Allow users to create categories of the deck of flash cards
- [] Allow users to choose pre-sets of the difficulty level (Easy, Medium, Hard)
