// selecting elements

let heading = document.querySelector('#heading');
let field = document.querySelectorAll('.field');
let footer = document.querySelectorAll('.panel-footer')[0];
let categoryQuestion = document.querySelectorAll('.category');
// array of categories
let quizCategory = ['Math', 'Geography', 'Cultural', 'Sport'];

// showing questions on table //

showData();

function showData(){
	if(!quiz.isEnd()){
	// showing category at category panel
	for(let i = 0; i < categoryQuestion.length; i++){
		categoryQuestion[i].addEventListener('mouseover', showCategory);
		categoryQuestion[i].addEventListener('mouseleave', showBasicData);
	 }
	// showing question at heading panel
	heading.innerHTML = quiz.getCurrentIndex().question;
	// showing question options at heading body
	for(let i = 0; i < field.length; i++){
		field[i].innerHTML = quiz.getCurrentIndex().options[i];
		field[i].addEventListener('click', checkAnswer);
		field[i].style.background = '#fff';
	}
	// showing current question nubmer at heading footer
	footer.innerHTML = `Question ${quiz.currentIndex + 1} of ${quiz.questions.length}`;
		
	}else {
		alert(`You won: ${quiz.score} points! \n Do you won't to play again?`)
		quiz.currentIndex = 0;
		quiz.score = 0;
		showData();
	}
}

// checking answer

function checkAnswer(){
	
	if(this.innerHTML === quiz.getCurrentIndex().answer){
		this.style.backgroundColor = 'green';
		quiz.getAnswer(this.innerHTML);
	}else{
		quiz.getAnswer(this.innerHTML);
		this.style.backgroundColor = 'red';
	}
	setTimeout(function(){
		
		showData();
	},700);
}

// showing heading category names
function showBasicData(){
	for(let i = 0; i < quizCategory.length; i++){
		categoryQuestion[i].innerHTML = quizCategory[i];
	}
}
// showing Category;

function showCategory(){
	let categoryName = this.innerHTML;
	let counter = 0;
	quiz.questions.forEach(function(e,i){
		
		if(categoryName === quiz.questions[i].category){
			counter ++;
		}
	})
	this.innerHTML = counter;
}
