var readlineSync = require('readline-sync');
const chalk = require('chalk');

var questionList = [
	{
		question:
			'What is the name of Sardar Khan father?. \n a. Shahid Khan \n b. Faizal Khan \n c. Ramadhir \n d. Dheeraj Khan \n e. Danish Khan ',
		answer: 'a'
	},
	{
		question:
			'Complete the dialogue: Khana khao, taqat aayega. ______. \n a. Sabka badla lega re, tera Faizal \n b. Bahar jaake bezzatti mat karana \n c. Bahar jaake maat khana \n d. Sabka badla lena hai \n e. Warna thak jayenge',
		answer: 'b'
	},
	{
		question:
			'What is the name of Sardar Khan son in the movie? \n a. Shahid Khan \n b. Zeeshan Khan \n c. Perpendicular \n d. Tangent \n e. Bullet Raja',
		answer: 'c'
	},
	{
		question:
			'Nawazuddin Siddiqui and Vineet Kumar Singh play the roles of Richa Chaddha’s sons in the movie. What do they call her throughout the film? \n a. Amma \n b. Maa\n c. Budhiya\n d. Dadi maa \n e. Ammi',
		answer: 'c'
	},
	{
		question:
			'What was the name of Sardar Khan second wife? \n a. Durga \n b. Radha \n c. Parvati \n d. Saraswati \n e. Lakshmi ',
		answer: 'a'
	},
  {
		question:
			'Which film are Perpendicular and Tangent watching on the television? \n a. Lage Raho Munna Bhai \n b. Munna Bhai MBBS \n c. Lagaan \n d. Dev.D \n e. Agneepath',
		answer: 'b'
	}
];

//score of user
let userScore = 0;

function check(question, answer){
  var userAns = readlineSync.question(question+'\n Enter your answer: ');
  if(userAns === answer.toLowerCase()){
    console.log(chalk.red.bgGreen("Right Answer"));
    userScore += 4;
  }
  else{
    console.log(chalk.black.bgYellow("Wrong Answer"));
    userScore -= 1;
  }
}
var userName = readlineSync.question("Enter your name : ");
console.log(chalk.black.bgWhite("Welcome! "+userName+"."));
console.log("Lets see how much do you know about Gangs of Wasseypur ?");
console.log("Lets start the game...");
for (var i = 0; i < questionList.length; i++) {
	check(questionList[i].question, questionList[i].answer);


console.log("-------------------------------------");
console.log("Your total score is : "+userScore);
console.log("-------------------------------------");

if(userScore => 10){
  console.log(chalk.blue.bgWhite.bold.underline(" Beta Tumse na ho payega!"));
}
else{
  (chalk.blue.bgWhite.bold.underline("You have won a trip to Gang of Wasseypur !"))
}
