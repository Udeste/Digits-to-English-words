# Digits to English words
Api server written in Javascript that converts numbers in the grammatically-correct English phrase.

##Introduction
This web server is totally developer with javascript technologies ready for production. The main server definition is coded in `server.js` file. 
It starts a nodeJS server using expressJS and delegate the converting operations on `http://localhost/convert/` path to the submodule included in `/node/convert.js` file.
The server will return a JSON file with the following format:
```JSON
{
  "number": "256",
  "word": "two hundred and fifty-six"
}
```

##Requirements

In order to make this api server working the following requirements are needed:
* node (v4.2 or greater)
* gulp (v3.9.1 or greater)
* npm (v3.7.3 or greater)

##Installation and deploy

To start this server you have to clone this repository then move in your local folder, open a terminal and type `npm install`. Now you will get installed all the dependencies necessary to start and test the server.

###Start the server
The server can be started by typing `gulp server` in terminal console
When the server has started it is accessible at `http://localhost:8080`. 

###Convert a number
To convert a number you need to make a `GET` request at `http://localhost:8080/convert/` node path by appending the number to convert. 

Example: a GET call to `http://localhost:8080/convert/532` will return the English-correct phrase of 532 that is `five hundred and thirty-two`

###Unit testing
This project comes with unit testing already defined. All you need to do is to type in your terminal `gulp test` and watch the results. If you want to add other tests you can edit the `/test/api.js` file.


