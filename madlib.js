//Getting the sentence
var sentence = [];
var replacements = [];
var index = 0;
//call functions
filler(sentence, "Next word: ");
filler(replacements, "Next position: ");

//Which words are being replaced
function filler(myArray,myPrompt){
	index = -1;
	do {
		index++;
		myArray[index] = prompt(myPrompt +index+ ":");
	}
	while(myArray[index] != "^")
	console.log(myArray);
}

//Getting the Position
for(index = 0; index < replacements.length-1; index++) {
sentence[replacements[index]]= prompt("Part of Speech for " +sentence[replacements[index]]+ ".");
}
console.log(sentence);
//enter
for(index = 0; index < replacements.length-1; index++) {
sentence[replacements[index]]= prompt("Enter a " +sentence[replacements[index]]+ ".");
}

sentence.splice(-1,1);
sentenceString = sentence.join(' ');
alert(sentenceString.toString());