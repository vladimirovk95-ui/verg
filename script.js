const text = document.getElementById("text");
const action = document.getElementById("action");
const extra = document.getElementById("extra");
const scan = document.getElementById("scan");

const params = new URLSearchParams(window.location.search);

const card = params.get("card");
const start = params.get("start");


let step = 0;


let save = JSON.parse(
localStorage.getItem("verg_save")
)
||
{
cards:[]
};


let cards = save.cards;



function saveGame(){

localStorage.setItem(
"verg_save",
JSON.stringify({
cards:cards
})
);

}



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
Первый хранитель.

Ищи того,
кто работает со словами.

Того,
кто может превратить мысли
в историю.

...

Дюма ждёт.
`

];




const database = {


duma_priestess:`

АРКАН II

ЖРИЦА


Первый хранитель найден.


Ты увидел больше,
чем просто человека.


Ты заметил историю,
которая скрыта внутри.

`,


duma_magician:`

АРКАН I

МАГ


Создание начинается там,
где другие видят пустоту.


`,


duma_hierophant:`

АРКАН V

ИЕРОФАНТ


Некоторые знания
передаются только людьми.

`

};





function showIntro(){


text.innerHTML = intro[step];


}





function addCard(id){


if(!cards.includes(id)){


cards.push(id);

saveGame();


}

}





function loadCard(){


if(!card){

return;

}



if(database[card]){


addCard(card);


text.innerHTML =
database[card];



checkProgress();



}

else{


text.innerHTML =
"Аркан не найден.";


}


}




function checkProgress(){


let dumaCards = cards.filter(id =>

id.startsWith("duma")

).length;



if(dumaCards===2){


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
нельзя получить сразу.


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





action.onclick=function(){


step++;


if(step>=intro.length){


step=intro.length-1;


}


showIntro();


};






scan.onclick=function(){


const scanner =
new Html5Qrcode("reader");



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


}

);


};






if(start==="fool"){


showIntro();


}


else if(card){


loadCard();


}


else{


showIntro();


}