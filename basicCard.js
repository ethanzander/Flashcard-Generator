

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

function showSide() {
    var sideChoice = process.argv[2];
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