var readlineSync = require('readline-sync')
var chalk = require('chalk')

var scores = []
var playerName = readlineSync.question(chalk.magenta('Enter your name: '))
function quiz(){
  var questionOne = {
    question: 'Who am I?',
    options: ['Human', 'Alien', 'Zombie', 'Robot'],
    answer: 'Human'
  }

  var questionTwo = {
    question: 'Am I an Engineer?',
    options: ['I don\'t know', 'Yes', 'No', 'Don\'t care'],
    answer: 'Yes'
  }

  var questionThree = {
    question: 'Do I like programming?',
    options: ['Yes', 'No'],
    answer: 'Yes'
  }

  var questionFour = {
    question: 'Where do I stay?',
    options: ['Chennai', 'Bangalore', 'Mumbai', 'Delhi'],
    answer: 'Mumbai'
  }

  var questionFive = {
    question: 'Am I graduated',
    options: ['Pursuing', 'Yes', 'No'],
    answer: 'Yes'
  }

  var questions = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive
  ]
  score = 0
  console.log('Welcome '+ playerName + "...")
  console.log('=============================\n')
  for(i=0; i<questions.length; i++){
    console.log(questions[i].question)
    var answer = readlineSync.keyInSelect(questions[i].options, questions[i].question)
    if (questions[i].options[answer].toLowerCase() == questions[i].answer.toLowerCase()){
        score += 1
    }
  }
  console.log('\n'+ playerName+ ' your score is: ' +  score )
  scores.push(score)
  if(score >= 3){
    console.log(chalk.bold.green('Oh ho! you know me!'))
  }else{
    console.log(chalk.bold.red('Sad, you don\'t know me well!'))
  }
}

var play = readlineSync.question(chalk.bold.blue('Press "y" to start the game: '));
while(play.toLowerCase() == 'y'){
  quiz()
  var play = readlineSync.question(chalk.bold.blue('Do you want to play again? press "y" to begin: '));
}
scores.sort(function(a,b){return a-b})
console.log("High Score: " + scores[scores.length - 1])

console.log('=====XXX===== Thank you =====XXX=====')
