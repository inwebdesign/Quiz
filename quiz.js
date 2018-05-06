function Quiz(questions){
	this.questions = questions;
	this.score = 0;
	this.currentIndex = 0;
}

// defining current question index
Quiz.prototype.getCurrentIndex = function(){
	return this.questions[this.currentIndex];
}
// checking if user answer is correct
Quiz.prototype.getAnswer = function(answer){
	if(answer === this.getCurrentIndex().answer){
		this.score += this.getCurrentIndex().points;
	} 
	this.currentIndex++;
}
// defining situation when number of user answers  is equal to sum of all answers
Quiz.prototype.isEnd = function(){
	return this.currentIndex ===  this.questions.length;
}

let quiz = new Quiz(questions);
