import "events.js";

export function drawGraph2(){
  var margin = {top: 20, right: 0, bottom: 70, left: 80},
  width = 600 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;


// set the ranges
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

// define the axis
var xAxis = d3.svg.axis()
.scale(x)
.orient("bottom")



var yAxis = d3.svg.axis()
.scale(y)
.orient("left")
.ticks(10);


// add the SVG element
var svg = d3.select("#chart2").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", 
  "translate(" + margin.left + "," + margin.top + ")");


// load the data
d3.json("data.json", function(error, data) {

  data.forEach(function(d) {
    d.year = d.year;
    d.sum = +d.sum;
  });

  // scale the range of the data
var range = 11300;
draw(range)

var slider = d3.select('#slider2');
slider.on('input', function() {
    draw(this.value);
});


    function draw(range) {
      //draw bars
svg.selectAll("*").remove();
        x.domain(data.map(function(d) { return d.year; }));
  y.domain([range, d3.max(data, function(d) { return d.sum; })]);
  svg.selectAll("bar")
  .data(data)
  .enter().append("rect")
  .attr("class", "bar")
  .attr('fill',"url(#svgGradient)")
  .attr("x", function(d) { return x(d.year); })
  .attr("width", x.rangeBand()/1.2)
  .attr("y", function(d) { return y(d.sum); })
  .attr("height", function(d) { return height - y(d.sum); });

//add y axis
    svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
    .attr("fill","white")
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", -80)
  .attr("dy", ".71em")
  .style("text-anchor", "end")
  .text("Number of murders");

    // add axis
  svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis)
    .attr("fill","white")
  .selectAll("text")
  .style("text-anchor", "end")
  .attr("dx", "-.8em")
  .attr("dy", "-.55em")
  .attr("transform", "rotate(-90)")
    .attr("fill","white");
      var gradient = {
   linearGradient: [0, 0, 0, 400],
   stops: [
   [0, '#000'],
   [1, '#ff0000']
   ]
 };


//add gradient
var gradient = svg.append("linearGradient")
.attr("id", "svgGradient")
.attr("x1", "0%")
.attr("x2", "100%")
.attr("y1", "0%")
.attr("y2", "100%");

gradient.append("stop")
.attr('class', 'start')
.attr("offset", "0%")
.attr("stop-color", "white")
.attr("stop-opacity", 1);

gradient.append("stop")
.attr('class', 'end')
.attr("offset", "100%")
.attr("stop-color", "grey")
.attr("stop-opacity", 1);

}








  // Add bar chart



});
}