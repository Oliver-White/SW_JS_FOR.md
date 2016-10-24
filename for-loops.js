for(j = 5; j<120; j=j+10){
	console.log(j)
}

for(p = 4096; p >= 1; p = p / 2){
	console.log(p)
}

var president = ["George Washington", "John Adams", "Thomas Jefferson"]; 
var order = ["#1", "#2", "#3"];
var president_order = "";

for (var i = 0; i < president.length; i++) {
	president_order += order[i] + " " + president[i] + " ";
}
console.log(president_order);


var ant_species = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

Object.keys(ant_species).forEach(function(key) {
    console.log(key, ant_species[key]);
});










