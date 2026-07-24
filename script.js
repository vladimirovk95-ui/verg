const text = document.getElementById("text");
const action = document.getElementById("action");
const extra = document.getElementById("extra");
const scan = document.getElementById("scan");
const params = new URLSearchParams(window.location.search);

const card = params.get("card");


duma_priestess:`

АРКАН II

ЖРИЦА


Первый хранитель найден.


Ты увидел больше,
чем просто человека.


Ты заметил историю,
которая скрыта внутри.

`,


};
function loadCard(){

if(!card){
return;
}


if(cards[card]){

text.innerHTML = cards[card];

}
else{

text.innerHTML = `

Запись не найдена.

`;

}

}
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
обычно начинаются самые странные истории.
`,

`
Я — Вердж.

Цифровой проводник
этого испытания.
`,

`
Сегодня тебе предстоит пройти путь.

На нём будут хранители.

Они настоящие люди.

Но свои имена они просто так не отдадут.
`,

`
Твоя задача:

найти хранителей,
понять кто они,
и получить их Арканы.
`,

`
Первый хранитель:

тот, кто работает со словами.

Тот, кто может превратить мысли
в историю.


Первая цель открыта.

Ищи того,
кто работает со словами.

Того,
кто может превратить мысли
в историю.


...

Имя неизвестно.

Но след уже найден.

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
loadCard();
localStorage.setItem(
"verg_started",
"true"
);


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
