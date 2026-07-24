const text = document.getElementById("text");
const action = document.getElementById("action");
const extra = document.getElementById("extra");
const scan = document.getElementById("scan");

let step = 0;


const intro = [

`
...

Соединение установлено.

`,
`
АРКАН 0

ШУТ

`,
`
Интересно...

Именно с этой карты
начинаются самые странные истории.

`,
`
Я — Вердж.

Цифровой проводник
этого испытания.

`,
`
Сегодня тебе предстоит пройти путь.

На нём будут хранители.

Они не скажут свои имена.

Но оставят следы.

`,
`
Твоя первая цель:

найти того,
кто превращает мысли
в истории.

`

];


function showIntro(){

text.innerHTML = intro[step];

}


action.onclick=function(){

step++;

if(step >= intro.length){

step=intro.length-1;

}

showIntro();

};



showIntro();



scan.onclick=function(){

const scanner = new Html5Qrcode("reader");


scanner.start(

{
facingMode:"environment"
},

{
fps:10,
qrbox:250
},


(decodedText)=>{


scanner.stop();


window.location.href =
decodedText;


},


(error)=>{


}

);


};