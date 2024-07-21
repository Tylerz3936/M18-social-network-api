# M18-social-network-api

## Description
This is a social network API built using Node.js, Express, and MongoDB. The API allows users to perform CRUD operations on users and thoughts, as well as add and remove reactions to thoughts and manage a user's friend list.

## Table of Contents
- Installation
- Usage
- API Endpoints
    - User Endpoints
        - Add friend
        - Remove friend
    - Thought Endpoints
    - Reaction Endpoints
- Models
- Walkthrough Demo
- Questions

## Installation
1. Clone the repository
2. Navigate to the projec directory
3. Install the dependencies:
    ```
    npm install
    ```
4. Start MongoDB
5. Start the Server:
    ```
    npm start
    ```
## Usage
The server will start on http://localhost:3001. You can use Insomnia, Postman, or any other API testing tool to interact with the API.

## API Endpoints
### User Endpoints
1. Find all users
- URL: GET /api/users
- Description: Retrieve all users from the database.
2. Find user by ID
- URL: GET /api/users/:userId
- Description: Retrieve a single user by their unique ID.
3. Create User/Second User/ Third User
- URL: POST /api/users
- Body (JSON):
    ```
    {
    "username": "newUser",
    "email": "newuser@example.com"
    }
    ```
- Description: Create a new user with the provided username and email.
4. Update User
- URL: PUT /api/users/:userId
- Body (JSON):
    ```
    {
    "username": "updatedUser",
    "email": "updateduser@example.com"
    }
    ```
- Description: Update an existing user's information by their unique ID.
5. Delete User
- URL: DELETE /api/users/:userId
- Description: Delete a user from the database by their unique ID.
6. Add a friend to a user's friend list
- URL: POST /api/users/:userId/friends/:friendId
- Description: Add a friend to a user's friend list by their unique user ID and friend ID.
7. Remove a friend from a user's friend list
- URL: DELETE /api/users/:userId/friends/:friendId
- Description: Remove a friend from a user's friend list by their unique user ID and friend ID.
## Thought Endpoints
1. Get all thoughts
- URL: GET /api/thoughts
- Description: Retrieve all thoughts from the database.

2. Create a new thought
- URL: POST /api/thoughts
- Body (JSON):
    ```
    {
    "thoughtText": "This is a new thought",
    "username": "newUser",
    "userId": "user_id_here"
    }
    ```
- Description: Create a new thought with the provided text, username, and user ID.

## Reaction Endpoints
1. Create reaction
- URL: POST /api/thoughts/:thoughtId/reactions
- Body (JSON):
{
  "reactionBody": "This is a reaction",
  "username": "reactionUser"
}
- Description: Add a reaction to a thought by the thought's unique ID.
2. Remove a reaction 
- URL: DELETE /api/thoughts/:thoughtId/reactions/:reactionId
- Description: Remove a reaction from a thought by the thought's unique ID and reaction's unique ID.

## Models
### User Model
- username: String, required, unique, trimmed
- email: String, required, unique, must match a valid email format
- thoughts: Array of ObjectIds referencing Thought documents
- friends: Array of ObjectIds referencing User documents
### Thought Model
- thoughtText: String, required, must be between 1 and 280 characters
- createdAt: Date, defaults to current date, uses a getter to format the timestamp
- username: String, required
- reactions: Array of nested documents created with the reactionSchema
### Reaction Model
- reactionId: ObjectId, default is a new ObjectId
- reactionBody: String, required, 280 character maximum
- username: String, required
- createdAt: Date, defaults to current date, uses a getter to format the timestamp

## Walkthrough-Demo
<video controls src="assets/m18-walkthrough-demo.mp4" title="Title"></video>
## Questions
If you have any questions, please open an issue or contact tylerzhao103@gmail.com.
