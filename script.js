const text = document.getElementById("text");
const action = document.getElementById("action");
const scan = document.getElementById("scan");
const extra = document.getElementById("extra");


const params = new URLSearchParams(window.location.search);

const start = params.get("start");
const card = params.get("card");


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

Денис.

Пользователь найден.

Начинаем испытание.

`,

`

На пути будут хранители.

Они не отдадут свои имена просто так.

Тебе нужно будет понять,
кто они.

`,

`

Первый хранитель:

тот, кто работает со словами.

Тот, кто превращает мысли
в историю.

Дюма.

Найди его.

`

];



const cards = {


"duma_priestess":`

АРКАН II

ЖРИЦА


Первый хранитель найден.


Ты увидел больше,
чем просто человека.


Ты заметил историю,
которая скрыта внутри.

`,


"duma_magician":`

АРКАН I

МАГ


Хранитель передал второй фрагмент.

`,


"duma_hierophant":`

АРКАН V

ИЕРОФАНТ


Знание передано.

`

};




let save = JSON.parse(
localStorage.getItem("verg_save")
)
||
{
cards:[]
};


let inventory = save.cards;




function saveGame(){

localStorage.setItem(
"verg_save",
JSON.stringify({
cards: inventory
})
);

}




function showIntro(){

text.innerHTML = intro[step];

}




action.onclick = function(){


step++;


if(step >= intro.length){

step = intro.length - 1;

}


showIntro();


};





function addCard(id){


if(!inventory.includes(id)){


inventory.push(id);

saveGame();


}

}





function loadCard(){


if(!card){

return;

}



if(cards[card]){


addCard(card);


text.innerHTML = cards[card];


checkProgress();


}

else{


text.innerHTML =
"Аркан не найден.";

}


}




function checkProgress(){


let duma = inventory.filter(card =>

card.startsWith("duma")

);



if(duma.length === 2){


extra.innerHTML = `

<p>
Хранитель открыл достаточно данных.
</p>


<button onclick="continueKeeper()">

Продолжить с этим хранителем

</button>


<button onclick="nextKeeper()">

Следующая цель

</button>

`;

}


}




function continueKeeper(){


extra.innerHTML = `

Вердж:

<br><br>

Хороший выбор.

Некоторые ответы
лучше получить постепенно.

`;

}





function nextKeeper(){


extra.innerHTML = `

Вердж:

<br><br>

Маршрут обновлён.

Следующий хранитель ожидает.

`;

}




scan.onclick = function(){


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


window.location.href = decodedText;


}


);


};





if(start === "fool"){


showIntro();


}
else if(card){


loadCard();


}
else{


showIntro();


}