
var fs = require("fs");
var request = require("request");

var sideChoice = process.argv[2];

var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
    fs.appendFile("log.txt", "\n____________________________\nNew Basic Flashcard:");
    fs.appendFile("log.txt", "\nFront Side - " + this.front);
    fs.appendFile("log.txt", "\nBack Side - " + this.back);
}
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

function showSide(sideChoices) {
    if (sideChoice === front) {
        console.log(BasicCard.front);
    }
    else if (sideChoice === back) {
        console.log(BasicCard.back);
    }
    else {
        console.log("Please enter a side. ('back' or 'front')");
    }
}


module.exports = BasicCard;