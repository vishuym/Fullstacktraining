require('./instanthello');

var goodbye= require('./talk/goodbye');

var talk= require('./talk');
var question=require('./talk/question'); 



talk.intro();
talk.hello("Everyone");

var answer = question.ask("What is life?");

console.log(answer);

goodbye();

