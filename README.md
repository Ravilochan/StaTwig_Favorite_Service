# fav-service
This is Service which favourites Users Ideas and store them in Database. 
A User can Favorite an Idea , Unfavorite any idea.

# Installation
Clone this repository into your local 

```bash
git clone https://github.com/Ravilochan/fav-service.git
```
Go to that directory
```bash
cd <directory-name>
```
Install all Dependencies for Node to run 

```bash
npm install
```
# Run Service

To Run this service your system or Local should have NodeJS Installed.

```bash
npm start
```

# Usage
This Service has API endpoints at 
```bash
/api/fav --> POST Request

/api/unfav --> PUT Request

/api/favorites/:id --> GET Request
```
For /api/fav - POST Request
POST data should be like 
```JSON
{ 
"user":
     {
     "_id":"5d6ede6a0ba62570afcedd3b"
     },
"favorite":
     {
     "_id":"5d6ede6a0ba62570afcedd32",
     "idea_owner": "String",
     "idea_owner_name": "String2",
     "idea_genre": "String3",
     "idea_headline": "String idea_name",
     "idea_description": "String idea_description",
     "price": 50
     } 
}
```
Here the _id in user is the MongoDB UID / _id unique for every user. This shoud 12 characters and uinque and accoridng to the rules of MongoDB _id.
Here the _id in Favorite is the MongoDB UID / _id unique for every Idea. This shoud 12 characters and uinque and accoridng to the rules of MongoDB _id.
For making this POST Favorite Request ( Favourite an Idea ) :
The user needs to send User detalis in "user" and Idea Details in "favorite"

Response :
```JSON
{
    "favorites": [
        "5d6ede6a0ba62570afcedd32"
    ],
    "_id": "5d6ede6a0ba62570afcedd3b",
    "__v": 0
}
```

For /api/unfav - PUT Request
PUT data should be like 
```JSON
{ 
"user":
     {
     "_id":"5d6ede6a0ba62570afcedd3b"
     },
"favorite":
     {
     "_id":"5d6ede6a0ba62570afcedd32"
     } 
}
```
Here the _id in user is the MongoDB UID / _id unique for every user. This shoud 12 characters and uinque and accoridng to the rules of MongoDB _id.
Here the _id in Favorite is the MongoDB UID / _id unique for every Idea. This shoud 12 characters and uinque and accoridng to the rules of MongoDB _id.
For making this PUT un-favorite Request ( un-Favourite an Idea ) :
The user needs to send User detalis in "user" and only Idea _id in "favorite"
Response :
```JSON
{
    "favorites": [],
    "_id": "5d6ede6a0ba62570afcedd3b",
    "__v": 0
}
```
To Get all favorited ideas of a User :
/api/favorites/:id -> GET Request
 here Params :id is the User's UID/_id from Usser collection. 
 Here the _id in user is the MongoDB UID / _id unique for every user. This shoud 12 characters and uinque and accoridng to the rules of MongoDB _id.
 
 Response :
 ```JSON
 [
    {
        "_id": "5d6ede6a0ba62570afcedd38",
        "idea_owner": "String",
        "idea_owner_name": "String2",
        "idea_genre": "String3",
        "idea_headline": "String idea_name",
        "idea_description": "String idea_description",
        "price": 50
    },
    {
        "_id": "5d6ede6a0ba62570afcedd39",
        "idea_owner": "String",
        "idea_owner_name": "String2",
        "idea_genre": "String3",
        "idea_headline": "String idea_name",
        "idea_description": "String idea_description",
        "price": 50
    }
]
```
 
 
