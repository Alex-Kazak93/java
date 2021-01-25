var reward = 0;

alert('Добро Пожаловать\n Вы играете в игру Кто Хочет Стать Миллионером\n Вам буден задан вопрос и даны варианты ответов в виде букв \n Используйте клавиатуру и строчные русские буквы (а б в г)');
alert('Приятной игры');

for(var index = 0; index<questions.length;index++){
    var userAnswer = prompt(questions[index].q+'\n' + questions[index].a1+'\n' + questions[index].a2+'\n' + questions[index].a3+'\n' + questions[index].a4+ '\n Цена вопроса '+questions[index].price);
    result = userAnswer.split('.');
    result[0].toLowerCase();
    if (result[0] === questions[index].ra) {
        reward += +questions[index].price;
        alert('И это правильный ответ. На данном этапе у вас ' + reward + ' рублей.');
    }
    else {
        alert("Это не правильный ответ, правильный ответ \n"+questions[index].ra);
    }
}
alert('Зая молодец!!! Ты выиграла '+reward+' рублей\n  Теперь БАИНЬКАТЬ');
/*
function quest(question,q,a1,a2,a3,a4,ra,price) {
    var userAnswer = prompt(q+'\n' + a1+'\n' + a2+'\n' + a3+'\n' + a4+ '\n Цена вопроса '+price);
    result = userAnswer.split('.');
    result[0].toLowerCase();
    if (result[0] === ra) {
        reward += +price;
        alert('И это правильный ответ. На данном этапе у вас ' + reward + ' рублей.');
    } /* else if (isNaN(userAnswer) || userAnswer < 0 || userAnswer > 4) {
                userAnswer = +prompt(q + a1 + a2 + a3 + a4);
            } */
/*  else {
      alert("Это не правильный ответ");
  }
}
*/
/*
quest(question1,question1.q,question1.a1,question1.a2,question1.a3,question1.a4,question1.ra,question1.price);
quest(question2,question2.q,question2.a1,question2.a2,question2.a3,question2.a4,question2.ra,question2.price);
quest(question3,question3.q,question3.a1,question3.a2,question3.a3,question3.a4,question3.ra,question3.price);

 */

