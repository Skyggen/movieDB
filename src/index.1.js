// les librairies
// pour les échelles:
//const d3 = require('d3')
// pour écrire le fichier:
//const fs = require('fs')
// charger le fichier JSON créé avec "node run.js"
var requestURL = 'https://api.themoviedb.org/3/movie/popular?language=fr&api_key=e0c090ad9289504f572875f449a5f944'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var popularMovies = request.response;
    populateHeader(popularMovies);
   // showMovies(popularMovies);
   console.log(popularMovies)
  }
  var header = document.querySelector('header');
  function populateHeader(jsonObj) {
    var title = jsonObj['results'][0]['original_title'];
    console.log(title);
  
  }

  

  var chart3 = bb.generate({
   
    "data": {
        "columns": [
            ["x", 10, 4, 7, 9, 1, 5],
            ["Movies", 100, 23, 45, 54, 78, 2]
        ],
        "type": "scatter",
        "x": "x",
        "xLocaltime": false,
        "xSort": false,
        "selection": {
            "enabled": true,
            "grouped": true,
            "multiple": true,
            "draggable": true
        },
        "onclick": function() {
        },
        "onover": function() {
            console.log("hello")
 
      Movies: "black"
        }
    },
    "title": {
        "text": "Nombre d'entrées vendues par année en Suisse romande par type de projection (films d'origine américaine)"
    },
    "axis": {
        "x": {
            "type": "timeseries",
            "localtime": false,
            "tick": {
                "width": 0,
                "multiline": true,
                "outer": true,
                "fit": false,
                "centered": true
            },
            "max": 10,
            "min": 0
        },
        "y": {
            "show": true,
            "max": 100,
            "min": 10
        }
    }
});
  


  
//const dataMovie = require('../data/popularMovie.json')
//const dataTv = require('../data/popularTv.json')
