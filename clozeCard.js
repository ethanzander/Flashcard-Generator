function ClozeCard (text, cloze){
	this.fullText = text;
	this.cloze = cloze;
	this.partial = function (){
		if(text.includes(cloze)){
			var partial = text.replace(cloze, "...");
			console.log(partial);
			} else{
				console.log("Error " + cloze +  " is not in the text of the clozecard.");
			}
		};
}

var president = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log(president.fullText);
console.log(president.cloze);
president.partial();

module.exports = ClozeCard;