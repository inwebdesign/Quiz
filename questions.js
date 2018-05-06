function Question(question,options,answer,points,category){
	this.question = question;
	this.options = options;
	this.answer = answer;
	this.points = points;
	this.category = category;
}

let questions = [
	new Question('How much is 3 + 2?', ['8','12','5','4'], '5', 10, 'Math'),
	new Question('Capitol of USA is?', ['New York', 'Seattle', 'Chicago','Washington'], 'Washington', 10, 'Cultural'),
	new Question('The biggest world river is?', ['Danube', 'Volga', 'Temsa', 'Amazon'], 'Amazon', 10, 'Geography'),
	new Question('How much is 14 - 8?', ['5','10','6','7'], '6', 10, 'Math'),
	new Question('Novak Djokovic was born in?', ['Croatia', 'UK', 'Russia', 'Serbia'], 'Serbia', 10, 'Sport')
]