import { drawGraph1 } from './graph1'
import { drawGraph2 } from './graph2'
import 'button.js';
import 'graphCauses';
import 'graphRace.js'


$(document).ready(function() {
 /* code here */ 
drawGraph()

});


const drawGraph = () => {
drawGraph1()
/**setRange(9000);
slider.addEventListener('input', e => setRange(e.target.value))**/
 drawGraph2()
}

/**var test = 0;

  slider.addEventListener("input", function(){
   test = document.getElementById("slider").value
   console.log(test)
});**/