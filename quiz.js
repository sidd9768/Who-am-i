var readlineSync = require('readline-sync')

var scores = []
var playerName = readlineSync.question('Enter your name: ')
function quiz(){
  var questionOne = {
    question: 'Who is the fastest person?',
    answer: 'Usain Bolt'
  }

  var questionTwo = {
    question: 'What HTML is used for?',
    answer: 'Web'
  }

  var questionThree = {
    question: 'Do cats fly?',
    answer: 'No'
  }

  var questionFour = {
    question: 'When the humans will turn into aliens?',
    answer: '2025'
  }

  var questionFive = {
    question: 'Python is used for?',
    answer: 'All of above'
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
    var answer = readlineSync.question('Enter your answer: ')
    if (answer == questions[i].answer){
      score += 1
    }
  }
  console.log('\n'+ playerName+ ' your score is: ' +  score )
  scores.push(score)
  // console.log('Do you want to continue? press Y')

}

var play = readlineSync.question('Press Y to start the game: ');
while(play == 'y'){
  quiz()
  var play = readlineSync.question('Do you want to play again? press Y to begin: ');
}
scores.sort(function(a,b){return a-b})
console.log("High Score: " + scores[scores.length - 1])

console.log('=====XXX===== Thank you =====XXX=====')

// var chalk = require('chalk')
// console.log(chalk.bold.blue('Hello World!'))