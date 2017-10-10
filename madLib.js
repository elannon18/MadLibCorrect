//Getting the sentence
var sentence = [];
var index = 0;
do {
sentence[index] = prompt("Word" +index+ ":");
index++
}
while(sentence[index - 1] != "^")

console.log(sentence);

//Which words are being replaced
var replacements = [];
var index = 0;
do {
replacements[index] = prompt("Position" +index+ ":");
index++
}
while(replacements[index - 1] != "^")

console.log(sentence);

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