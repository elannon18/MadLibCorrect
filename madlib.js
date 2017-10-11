//Getting the sentence
var sentence = [];
var replacements = [];
var index = 0;
//call functions
filler(sentence, "Next word: ");
filler(replacements, "Next position: ");
replace(sentence,replacements,"Part of Speech for word in sentence");
alert("Switch positions");
//Which words are being replaced
function filler(myArray,myPrompt){
	index = -1;
	do {
		index++;
	myArray[index] = prompt(myPrompt+"["+index+"] = ");
	}
	while(myArray[index] != "^");
	myArray.pop();
	console.log(myArray);
}

function replace (mySArray,myRArray,myPrompt){
		for(index=0;index<myRArray.length;index++){
			mySArray[myRArray[index]]=prompt(myPrompt +"["+myRArray[index]+"] =");
		}
		console.log(mySArray);
}
