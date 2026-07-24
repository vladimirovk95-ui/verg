function typeText(message){


text.innerHTML="";


let i=0;


let timer=setInterval(()=>{


text.innerHTML += message[i];


i++;


if(i>=message.length){

clearInterval(timer);

}


},35);


}
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
function saveGame(){

localStorage.setItem(
"verg_save",
JSON.stringify({
cards:cards,
events:events
})
);

}


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



const database = {


fool: {

name:"Шут",

keeper:"",

text:`

АРКАН 0

ШУТ


Соединение установлено.


Я — Вердж.


Сегодня начинается испытание.


На пути ты встретишь хранителей.


Они не скажут тебе свои имена.


Но оставят следы.


Найди первого.

`

},



duma_priestess: {

name:"Жрица",

keeper:"Дюма",

text:`

АРКАН II

ЖРИЦА


Первый хранитель признан.


Ты увидел больше,
чем просто человека.


Ты заметил историю,
которая скрыта внутри.

`

},



duma_magician: {

name:"Маг",

keeper:"Дюма",

text:`

АРКАН I

МАГ


Создание начинается
там,
где другие видят пустоту.


Хранитель передал тебе
часть своего мастерства.

`

},



duma_hierophant: {

name:"Иерофант",

keeper:"Дюма",

text:`

АРКАН V

ИЕРОФАНТ


Некоторые знания
нельзя найти в книгах.


Они передаются людьми.

`

},



duma_world: {

name:"Мир",

keeper:"Дюма",

secret:true,

text:`

АРКАН XXI

МИР


...

Неожиданная запись.


Этот Аркан появился
не по стандартному протоколу.

`

},



moisei_moon: {

name:"Луна",

keeper:"Моисей",

text:`

АРКАН XVIII

ЛУНА


Не всё,
что видно,
является правдой.


Первый слой снят.

`

},



moisei_hanged: {

name:"Повешенный",

keeper:"Моисей",

text:`

АРКАН XII

ПОВЕШЕННЫЙ


Иногда путь меняется,
когда меняется взгляд.

`

},



moisei_wheel: {

name:"Колесо Фортуны",

keeper:"Моисей",

text:`

АРКАН X

КОЛЕСО ФОРТУНЫ


Случайность?

Или часть плана?

Архив не отвечает.

`

},



moisei_hermit: {

name:"Отшельник",

keeper:"Моисей",

secret:true,

text:`

АРКАН IX

ОТШЕЛЬНИК


Тишина тоже может быть ответом.

`

},



gerakl_strength: {

name:"Сила",

keeper:"Геракл",

text:`

АРКАН VIII

СИЛА


Настоящая сила
не всегда заметна.

`

},



gerakl_chariot: {

name:"Колесница",

keeper:"Геракл",

text:`

АРКАН VII

КОЛЕСНИЦА


Движение продолжается.

Остановка больше невозможна.

`

},



gerakl_emperor: {

name:"Император",

keeper:"Геракл",

text:`

АРКАН IV

ИМПЕРАТОР


Контроль.

Порядок.

Решение.

`

},



gerakl_sun: {

name:"Солнце",

keeper:"Геракл",

secret:true,

text:`

АРКАН XIX

СОЛНЦЕ


Иногда лучший результат
это просто хороший момент.

`

},



rasputin_devil: {

name:"Дьявол",

keeper:"Распутин",

text:`

АРКАН XV

ДЬЯВОЛ


Харизма тоже является силой.

`

},



rasputin_lovers: {

name:"Влюбленные",

keeper:"Распутин",

text:`

АРКАН VI

ВЛЮБЛЕННЫЕ


Любой путь состоит
из решений.

`

},



rasputin_justice: {

name:"Справедливость",

keeper:"Распутин",

text:`

АРКАН XI

СПРАВЕДЛИВОСТЬ


Последствия выбора
важнее самого выбора.

`

},



rasputin_judgement: {

name:"Суд",

keeper:"Распутин",

secret:true,

text:`

АРКАН XX

СУД


Финальная запись хранителя.

Путь почти завершен.

`

}


};

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


events.push(
"Получен Аркан: " + id
);


saveGame();


}


}


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


typeText(
database[card]
);
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

extra.innerHTML=

`

<h3>Архив</h3>

Восстановлено:
${progress}%


<br><br>

Записи:

<br>

${events.join("<br>")}

`;


`;



}



load();text.innerHTML +=
"<br><br>" + vergState();
function vergState(){


let count = cards.length;


if(count < 3){

return `
Соединение стабильно.
`;

}


if(count < 8){

return `
Обнаружены небольшие ошибки архива.
`;

}


if(count < 15){

return `
Внимание.

Некоторые записи повреждены.
`;

}


return `

...

Ошибка.

Архив открыт полностью.

`;

}