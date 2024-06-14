var pizza_info = [
    {
        id:1,
        icon:'assets/images/pizza_7.jpg',
        title: "Імпреза",
        type: 'М’ясна піца',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['курка'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 99
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 169
        },
        is_new:true,
        is_popular:true

    },
    {
        id:2,
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true
    },
    {
        id:3,
        icon:'assets/images/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id:4,
        icon:'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    },
    {
        id:17,
        icon:'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вега піца',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        }
    },
    {
        id:43,
        icon:'assets/images/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'М’ясна піца',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 180
        }
    },
    {
        id:90,
        icon:'assets/images/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'Морська піца',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        big_size:{
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        id:6,
        icon:'assets/images/pizza_4.jpg',
        title: "Россо Густо",
        type: 'Морська піца',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    }
];

function createPizzaHTML(pizza) {
    var div = document.createElement('div');
    div.className = 'pizza';

    var img = document.createElement('img');
    img.src = pizza.icon;
    img.alt = pizza.title;
    div.appendChild(img);

    var h1 = document.createElement('h1');
    h1.textContent = pizza.title;
    div.appendChild(h1);

    var typeSpan = document.createElement('span');
    typeSpan.className = 'graySpan';
    typeSpan.textContent = pizza.type;
    div.appendChild(typeSpan);

    var ingredients = [];
    for (var key in pizza.content) {
        if (pizza.content.hasOwnProperty(key)) {
            ingredients = ingredients.concat(pizza.content[key]);
        }
    }
    var ingredientsP = document.createElement('p');
    ingredientsP.className = 'pizzaIngredients';
    ingredientsP.textContent = 'Інгредієнти: ' + ingredients.join(', ');
    div.appendChild(ingredientsP);

    var pizzaInfo = document.createElement('div');
    pizzaInfo.className = 'pizzaInfo';

    if (pizza.small_size) {
        var smallSizeInfo = createSizeInfo(pizza.small_size);
        pizzaInfo.appendChild(smallSizeInfo);
    }

    if (pizza.big_size) {
        var bigSizeInfo = createSizeInfo(pizza.big_size);
        pizzaInfo.appendChild(bigSizeInfo);
    }

    div.appendChild(pizzaInfo);

    return div;
}

function createSizeInfo(size) {
    var subPizzaInfo = document.createElement('div');
    subPizzaInfo.className = 'subPizzaInfo';

    var upPizzaInfo = document.createElement('div');
    upPizzaInfo.className = 'upPizzaInfo';

    var sizeSpan = document.createElement('span');
    sizeSpan.textContent = size.size + ' см';
    upPizzaInfo.appendChild(sizeSpan);

    var weightSpan = document.createElement('span');
    weightSpan.textContent = size.weight + ' г';
    upPizzaInfo.appendChild(weightSpan);

    subPizzaInfo.appendChild(upPizzaInfo);

    var downPizzaInfo = document.createElement('div');
    downPizzaInfo.className = 'downPizzaInfo';

    var priceH3 = document.createElement('h3');
    priceH3.className = 'priceOfOne';
    priceH3.textContent = size.price;
    downPizzaInfo.appendChild(priceH3);

    var currencySpan = document.createElement('span');
    currencySpan.textContent = 'грн';
    downPizzaInfo.appendChild(currencySpan);

    var buyButton = document.createElement('button');
    buyButton.className = 'orangeButton buyOnePizza';
    buyButton.textContent = 'Купити';
    downPizzaInfo.appendChild(buyButton);

    subPizzaInfo.appendChild(downPizzaInfo);

    return subPizzaInfo;
}

var pizzaContainer = document.getElementById('pizza-container');

pizza_info.forEach(function(pizza) {
    var pizzaHTML = createPizzaHTML(pizza);
    pizzaContainer.appendChild(pizzaHTML);
});


function closeScreamer() {
    document.getElementById('screamer').style.display = 'none';
}