const dumaCards = {

"duma_priestess": {

name: "Жрица",

text: `
АРКАН II

ЖРИЦА


Первый хранитель найден.


Ты увидел больше,
чем просто человека.


Ты заметил историю,
которая скрыта внутри.
`

},


"duma_magician": {

name: "Маг",

text: `
АРКАН I

МАГ


Создание начинается там,
где другие видят пустоту.


Хранитель передал тебе
часть своего мастерства.
`

},


"duma_hierophant": {

name: "Иерофант",

text: `
АРКАН V

ИЕРОФАНТ


Некоторые знания
нельзя найти в книгах.


Они передаются людьми.
`

},


"duma_world": {

name: "Мир",

secret: true,

text: `
АРКАН XXI

МИР


...


Странная запись.


Этот Аркан отсутствовал
в основном протоколе.


Вердж:

...

Подождите.


Этого не должно быть.
`

}

};



function loadDumaCard(id){


if(!dumaCards[id]){

return false;

}


text.innerHTML = dumaCards[id].text;
secretReaction(id);

saveCard(id);


checkDumaProgress();


return true;

}





function saveCard(id){


let save =
JSON.parse(
localStorage.getItem("verg_save")
)
||
{
cards:[]
};


if(!save.cards.includes(id)){


save.cards.push(id);


}


localStorage.setItem(
"verg_save",
JSON.stringify(save)
);


}




function getDumaCards(){


let save =
JSON.parse(
localStorage.getItem("verg_save")
)
||
{
cards:[]
};


return save.cards.filter(card =>

card.startsWith("duma")

);


}




function checkDumaProgress(){


let cards = getDumaCards();


let normalCards =
cards.filter(card =>

!dumaCards[card].secret

);



if(normalCards.length === 2){


extra.innerHTML = `

<p>
Вердж:
</p>


<p>
Хранитель открыл достаточно данных.
</p>


<button onclick="stayWithDuma()">

Продолжить с этим хранителем

</button>


<button onclick="nextKeeper()">

Следующая цель

</button>

`;

}


}




function stayWithDuma(){


extra.innerHTML = `

<p>
Вердж:
</p>


<p>
Интересно...


Некоторые истории
лучше изучать глубже.
</p>

`;

}




function nextKeeper(){


text.innerHTML = `

Вердж:


Маршрут обновлён.


Следующий хранитель ожидает.


`;

extra.innerHTML = "";

}function secretReaction(id){


if(id !== "duma_world"){

return;

}


text.innerHTML += `

<br><br>

Вердж:


...


Подождите.


Слишком много данных.


Перезапуск анализа...


<br><br>


Ладно.


Я снова здесь.


Это была просто ошибка чтения архива.


Наверное.


`;

}