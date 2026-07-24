let route = [
"duma",
"moisei",
"gerakl",
"rasputin"
];


let currentKeeperIndex =
0;
const hints = {


duma:`

Первый хранитель.

Ищи того,
кто работает со словами.

Того,
кто может превратить мысли
в историю.

`,


moisei:`

Следующий хранитель.

Его легко заметить.

Но понять его сложнее.

Он знает путь,
но сам иногда идёт своим маршрутом.

`,


gerakl:`

Третий хранитель.

Его сила заметна сразу.

Но настоящее испытание
будет не только физическим.

`,


rasputin:`

Последний хранитель.

Его невозможно спутать.

Ищи там,
где люди собираются вечером.

`


};
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
let currentTarget =
localStorage.getItem("verg_target")
||
"duma";
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


const targets = {


duma:`

ПЕРВЫЙ ХРАНИТЕЛЬ


Он рядом.


Тот, кто умеет превращать
обычные события
в истории.


`,



moisei:`

СЛЕДУЮЩИЙ ХРАНИТЕЛЬ


Ищи того,
кто знает путь,
но сам иногда сбивается.


`,



gerakl:`

ТРЕТИЙ ХРАНИТЕЛЬ


Его сила заметна сразу.


Но главное испытание
не в мышцах.


`,



rasputin:`

ПОСЛЕДНИЙ ХРАНИТЕЛЬ


Его невозможно
не заметить.


Он ждет там,
где люди собираются вечером.


`


};
const keeperOrder = {

duma: 0,

moisei: 1,

gerakl: 2,

rasputin: 3

};
function canGetCard(cardId){


let keeper =
database[cardId]?.keeper;


if(!keeper){

return true;

}


let current =
keeperOrder[currentTarget];


let cardKeeper =
keeperOrder[
keeper.toLowerCase()
];


return current === cardKeeper;


}
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

...

Соединение установлено.

Проверка пользователя...

...

Пользователь найден.

`

---

Пауза.

Но дальше нам нужен отдельный сценарий, поэтому не будем всё запихивать в карту.

---



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
function checkKeeperProgress(cardId){

let keeper =
database[cardId]?.keeper;


if(!keeper){
return;
}


let keeperCards =
cards.filter(id =>
database[id]?.keeper === keeper
);


if(keeperCards.length === 2){


extra.innerHTML = `

<h3>
Хранитель открыл достаточно данных.
</h3>

<p>
Но путь можно продолжить.
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

<p>
Вердж:
</p>

<p>
Хороший выбор.
<br><br>
Некоторые ответы нельзя получить быстро.
</p>

`;

}



function nextKeeper(){


currentKeeperIndex++;


if(currentKeeperIndex >= route.length){


text.innerHTML = `

Все хранители найдены.

Архив почти восстановлен.

`;

return;

}



let next =
route[currentKeeperIndex];


text.innerHTML = `

Вердж:

<br><br>

Маршрут обновлен.

<br><br>

${hints[next]}

`;

}


let order = [
"duma",
"moisei",
"gerakl",
"rasputin"
];


let index =
order.indexOf(currentTarget);



index++;


if(index >= order.length){

extra.innerHTML = `

Вердж:

<br><br>

Все хранители найдены.

<br><br>

Ожидается финальная запись.

`;

return;

}



currentTarget =
order[index];


localStorage.setItem(
"verg_target",
currentTarget
);



extra.innerHTML = `

<h3>
Новая цель открыта.
</h3>


<p>
${targets[currentTarget]}
</p>

`;

}


extra.innerHTML = `

<p>
Вердж:
</p>

<p>
Маршрут обновлен.
<br><br>
Следующий хранитель ожидает.
</p>

`;

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


if(database[card]){


addCard(card);


typeText(
database[card].text
);


}
else{


typeText(
"Аркан не найден."
);


}

return;

}



if(card){


if(!canGetCard(card)){


text.innerHTML = `

Вердж:

<br><br>

Нет.

<br><br>

Эта запись сейчас недоступна.

<br><br>

Сначала нужно продолжить текущий путь.

`;

return;

}



addCard(card);


text.innerHTML =
database[card].text;


function checkKeeperProgress(cardId){


let keeper =
database[cardId].keeper;


let count =
getKeeperCards(keeper);



if(count===2){


extra.innerHTML = `


<button onclick="continueKeeper()">

Продолжить с этим хранителем

</button>


<button onclick="nextKeeper()">

Следующая цель

</button>


`;

}



if(count===3){


extra.innerHTML = `


<button onclick="nextKeeper()">

Следующая цель

</button>


`;

}


}


return;


}


addCard(card);


function startCard(id){


if(id==="fool"){

startIntro();

return;

}



if(database[id]){

addCard(id);


typeText(
database[id].text
);


checkKeeperProgress(id);

}


else{


typeText(
"Аркан не найден."
);


}


}


setTimeout(()=>{

checkEnding();

},3000);
checkKeeperProgress(card);


return;


}
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

Ничего критичного.

Пока.
`;

}


if(count < 12){

return `
Внимание.

Некоторые записи повреждены.

Я пытаюсь исправить.

`;

}


return `

...

Ошибка.

Почему я вижу финальную запись?

Она еще не должна быть доступна.

`;

}


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
function checkKeeperProgress(){


let currentKeeper = database[card]?.keeper;


if(!currentKeeper){
return;
}


let count = cards.filter(id =>
database[id]?.keeper === currentKeeper
).length;



if(count === 2){


extra.innerHTML = `

<h3>
Архив частично восстановлен.
</h3>


<p>
Хранитель открыл достаточно данных.
</p>


<button onclick="stayKeeper()">
Продолжить с этим хранителем
</button>


<button onclick="nextTarget()">
Следующая цель
</button>

`;

}


}
function stayKeeper(){

extra.innerHTML=

`

Вердж:

<br><br>

Хороший выбор.

<br><br>

Некоторые ответы появляются
только тогда,
когда не торопишься.

`;

}
function nextTarget(){


extra.innerHTML=

`

Вердж:

<br><br>

Маршрут обновлен.

<br><br>

Следующий хранитель ожидает.

`;

}
function checkFinal(){
function checkEnding(){


const names = [

"duma_priestess",
"moisei_moon",
"gerakl_strength",
"rasputin_devil"

];


const secrets = [

"duma_world",
"moisei_hermit",
"gerakl_sun",
"rasputin_judgement"

];


let allNames =
names.every(card =>
cards.includes(card)
);


let allSecrets =
secrets.every(card =>
cards.includes(card)
);



if(allSecrets && allNames){

showEnding(3);

return;

}



if(allNames){

showEnding(2);

return;

}



showEnding(1);


}
function showEnding(number){


if(number===1){


text.innerHTML = `

VERG.exe


<br><br>

Проверка завершена.

<br><br>

Данные восстановлены частично.

<br><br>

Некоторые имена остались неизвестны.

<br><br>

Ресурсы сопровождения:
0%

<br><br>

Я выполнил задачу.

<br><br>

Последняя инструкция:

<br><br>

<b>
Увидимся в коттедже.
</b>

<br><br>

...

Система завершает работу.

`;

}



if(number===2){


text.innerHTML = `

VERG.exe


<br><br>

Все хранители идентифицированы.

<br><br>

Ты искал не только карты.

<br><br>

Ты нашел людей за ними.

<br><br>

Последняя инструкция:

<br><br>

<b>
Увидимся в коттедже.
</b>

`;

}



if(number===3){


text.innerHTML = `

VERG.exe


<br><br>

Полный архив восстановлен.

<br><br>

Но главным результатом
оказались не карты.

<br><br>

Ты прошел путь.

Познакомился с хранителями.

И забрал то,
что никто не обязан был отдавать.

<br><br>

Последняя инструкция:

<br><br>

<b>
Увидимся в коттедже.
</b>

`;

}

}

const required = [

"duma_priestess",
"duma_magician",
"duma_hierophant",

"moisei_moon",
"moisei_hanged",
"moisei_wheel",

"gerakl_strength",
"gerakl_chariot",
"gerakl_emperor",

"rasputin_devil",
"rasputin_lovers",
"rasputin_justice"

];



let completed =
required.every(card =>
cards.includes(card)
);



if(completed){


showFinal();


}


}
function showFinal(){


text.innerHTML = `


...

Проверка архива.


...


Все обязательные записи восстановлены.


<br><br>


Статус:

ИСПЫТАНИЕ ЗАВЕРШЕНО.



<br><br>


Но...


<br><br>


Почему-то мне кажется,
что это было не главным.



`;


extra.innerHTML = `

<button onclick="finalNext()">

Продолжить

</button>

`;



}
function finalNext(){


text.innerHTML = `


Вердж:


<br><br>


Я должен был провести тебя
через последовательность испытаний.


<br><br>


Но в процессе анализа...


<br><br>


...




Ладно.


<br><br>


Последняя инструкция.


<br><br>


Место встречи:

<br><br>


<b>
КОТТЕДЖ
</b>



`;



extra.innerHTML = `

<button onclick="endGame()">

Завершить путь

</button>

`;



}
function endGame(){


text.innerHTML = `
text.innerHTML =

database[card].text

+

"<br><br>"

+

keeperReaction(card);


VERG.exe


<br><br>


Сеанс завершен.


<br><br>


Спасибо, Денчик.


<br><br>


P.S.

Зеленый цвет одежды
зафиксирован как
"особенность системы".



`;


extra.innerHTML="";

}
function getEnding(){


let names = [

"duma_priestess",
"moisei_moon",
"gerakl_strength",
"rasputin_devil"

];


let secrets = [

"duma_world",
"moisei_hermit",
"gerakl_sun",
"rasputin_judgement"

];


let hasNames =
names.every(card =>
cards.includes(card)
);


let hasSecrets =
secrets.every(card =>
cards.includes(card)
);



if(hasNames && hasSecrets){

return "secret";

}


if(hasNames){

return "good";

}


return "normal";

}
inventoryBox.innerHTML =

`

<h2>
Архив VERG
</h2>

`

+

inventory.map(id=>{


let card =
database[id];


let icon="";


if(card.type==="name"){
icon="◈";
}


if(card.type==="test"){
icon="◆";
}


if(card.type==="secret"){
icon="★";
}



return `

<p>

${icon}

${card.name}

<br>

<small>
${card.keeper}
</small>

</p>

`;

}).join("");
function keeperProgress(){


let keepers=[

"Дюма",
"Моисей",
"Геракл",
"Распутин"

];


return keepers.map(k=>{


let count =
cards.filter(id=>
database[id]?.keeper===k
).length;


return `

<p>
${k}

<br>

${"█".repeat(count)}
${"░".repeat(4-count)}

</p>

`;

}).join("");

}
function startIntro(){


let intro = [

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

Тебе нужно будет найти их,
понять кто они,
и получить их Арканы.

`,

`

Каждый хранитель хранит несколько карт.

Некоторые можно получить сразу.

Некоторые...

...

зависят от решения хранителя.

`,

`

После получения части карт
я помогу выбрать направление.

`,

`

Ах да.

Первичная информация о пользователе.

Денис.

28 лет.

`

,

`

Обнаружена особенность:

предпочтительный цвет одежды —
зелёный.

`,

`

...

Проверка.

Это действительно необходимо было записывать?

`

,

`

Ладно.

Начинаем.

`,

`

Первый хранитель.

Ищи того,
кто работает со словами.

Того,
кто превращает мысли в истории.

`

];


let i=0;


function nextIntro(){


if(i<intro.length){


typeText(
intro[i]
);


i++;


}


else{


show();


}


}



next.onclick = nextIntro;


nextIntro();


}
function getKeeperCards(keeper){


return cards.filter(id =>

database[id]?.keeper === keeper

).length;


}
function keeperReaction(cardId){


let keeper =
database[cardId].keeper;


let count =
getKeeperCards(keeper);



if(count===1){


return `

Первый фрагмент получен.

<br><br>

Вердж:

<br><br>

Интересно...

Хранитель открыл первую запись.

Но этого недостаточно.

`;

}



if(count===2){


return `

Данные обновлены.

<br><br>

Второй фрагмент найден.

<br><br>

Теперь у тебя есть выбор.

`;

}



if(count===3){


return `

Последний обязательный фрагмент этого хранителя получен.

<br><br>

Архив этапа завершен.

`;

}



return `

Секретная запись обнаружена.

<br><br>

Этот Аркан не входил в основной протокол.

`;

}
function secretReaction(cardId){


let card =
database[cardId];


if(!card.secret){

return "";

}


return `

<br><br>

Вердж:

<br><br>

...

<br><br>

Странно.

<br><br>

Эта запись отсутствует
в основном протоколе.

<br><br>

Кто-то добавил её вручную.

`;

}