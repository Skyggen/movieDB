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
// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 10])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.GrLivArea); } )
      .attr("cy", function (d) { return y(d.SalePrice); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

})
