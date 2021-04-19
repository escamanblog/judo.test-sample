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
        question: 'What is Kuro Obi?2',
        answers:[
        'Technique name',
        'Founder of Judo',
        'Black Belt',
        'Judo Gym'
    ],
    correct: 'Black Belt'},
    {
        question: 'What is Kuro Obi?3',
        answers:[
            'Technique name',
            'Founder of Judo',
            'Black Belt',
            'Judo Gym'
        ],
        correct: 'Black Belt'
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
        window.alert('Done! You result is ' + score + '/' + quizLength);
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