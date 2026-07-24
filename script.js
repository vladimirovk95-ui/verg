const text =
document.getElementById("text");


const button =
document.getElementById("action");


const extra =
document.getElementById("extra");



let save =
JSON.parse(
localStorage.getItem("verg_save")
)
||
{
cards:[],
events:[]
};


let cards = save.cards;
let events = save.events;



const params =
new URLSearchParams(
window.location.search
);



const card =
params.get("card");


const start =
params.get("start");



const database = {



fool:`

АРКАН 0

ШУТ


Соединение установлено.


Я — Вердж.


Сегодня начинается испытание.


На пути ты встретишь хранителей.


Твоя первая задача:

найти того,
кто умеет превращать
обычные события
в истории.

`,



duma_priestess:`

АРКАН II

ЖРИЦА


Первый фрагмент получен.


Ты увидел больше,
чем просто внешность.


Хранитель признан.

`,



duma_magician:`

АРКАН I

МАГ


Создание начинается
там,
где другие видят пустоту.


Фрагмент принят.

`,



gerakl_strength:`

АРКАН VIII

СИЛА


Сила бывает разной.


Иногда она заключается
в том,
чтобы продолжать путь.

`

};





function addCard(id){


if(!cards.includes(id)){


cards.push(id);


localStorage.setItem(
"verg_cards",
JSON.stringify(cards)
);


}


}




function load(){



if(start==="fool"){


text.innerHTML =
database.fool;


return;

}



if(card){


addCard(card);


text.innerHTML =
database[card]
||
"Аркан принят.";


return;


}



text.innerHTML =

`
VERG.exe


Ожидание Аркана...

`;



}




function showDeck(){


extra.innerHTML=

`

<h3>Колода</h3>

${cards.length}

из 16


<br><br>

${cards.join("<br>")}

`;

}



function showArchive(){


let progress =
Math.round(
cards.length/16*100
);



extra.innerHTML=

`

<h3>Архив</h3>


Восстановлено:

${progress}%


`;



}



load();