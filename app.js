const quiz = [
    {
        question: 'What is Kuro Obi?',
        answers:[
            'Technique name',
            'Founder of Judo',
            'Black Belt',
            'Judo Gym'
        ],
        correct: 'Black Belt'
    },{
        question: 'Who made Judo?',
        answers:[
        'Jigoro Kano',
        'Teddy Riner',
        'Steve Jobs',
        'Abe Shinzo'
    ],
    correct: 'Jigoro Kano'},
    {
        question: 'What is the word 「bow」 in Japanese?',
        answers:[
            'Newaza',
            'Rei',
            'Ukemi',
            'Eri'
        ],
        correct: 'Rei'
    }
];

const quizLength = quiz.length;
let quizIndex =0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//Quizの問題文選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('Correct!');
        score++;
    } else {
        window.alert('Incorrect');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数があればこちらを実行
        setupQuiz();
    } else {
        //問題数がなければこちらを実行
        window.alert('Done! Your result is ' + score + '/' + quizLength);
    }
};

//ボタンをクリックしたら正誤判定
let handleerIndex = 0;
while (handleerIndex < buttonLength) {
    $button[handleerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    })
handleerIndex++;
}