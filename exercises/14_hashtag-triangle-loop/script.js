$(document.ready)(function(){

var triangle = "";	//declaring triangle as string variable

for(var index=0; index<7; index++){
	console.log(index);
	console.log("before:" triangle);
	triangle = triangle + "#";
	console.log("before:" + triangle);

}

var fruits = {"apples", "bananas", "coconut", "dragonfruit"};

console.log(fruits[1]);

for(var j=0; j<fruits.length; j++){
	console.log(fruits[j]);
}

});