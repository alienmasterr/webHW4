document.addEventListener('DOMContentLoaded', () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.forEach(order => {
        const orderDiv = createElementWithClassAndText('div', 'order', '');
        const pizzaImgOrder = createImageElement(order.imgSrc, order.pizzaName);
        const pizzaNameOrder = createElementWithClassAndText('h3', 'pizzaNameOrder', `${order.pizzaName} (${order.string})`);
        const divForSpansOrder = createSpanBlock(order.firstSpan, order.secondSpan);
        const divPriceAndButtons = createPriceAndButtonsBlock(order.pizzaPrice);


        orderDiv.append(pizzaNameOrder, divForSpansOrder, divPriceAndButtons, pizzaImgOrder);

        document.querySelector('.orders').appendChild(orderDiv);

    });

    // Відновлення загальної суми
    const total = orders.reduce((acc, order) => acc + parseInt(order.pizzaPrice) * parseInt(order.secondSpan), 0);
    document.querySelector('.money').textContent = total;
});

var pizza_info = [
    {
        id: 1,
        icon: 'assets/images/pizza_7.jpg',
        title: "Імпреза",
        type: 'М’ясна піца',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['курка'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size: {
            weight: 370,
            size: 30,
            price: 99
        },
        big_size: {
            weight: 660,
            size: 40,
            price: 169
        },
        is_new: true,
        is_popular: true

    },
    {
        id: 2,
        icon: 'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size: {
            weight: 460,
            size: 30,
            price: 139
        },
        big_size: {
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular: true
    },
    {
        id: 3,
        icon: 'assets/images/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size: {
            weight: 430,
            size: 30,
            price: 115
        },
        big_size: {
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id: 4,
        icon: 'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'З грибами',
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський', 'соус томатний']
        },
        small_size: {
            weight: 450,
            size: 30,
            price: 111
        },
        big_size: {
            weight: 790,
            size: 40,
            price: 169
        }
    },
    {
        id: 17,
        icon: 'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вега піца',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size: {
            weight: 370,
            size: 30,
            price: 89
        }
    },
    {
        id: 43,
        icon: 'assets/images/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'З грибами',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small_size: {
            weight: 470,
            size: 30,
            price: 115
        },
        big_size: {
            weight: 780,
            size: 40,
            price: 180
        }
    },
    {
        id: 90,
        icon: 'assets/images/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'Морська піца',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        big_size: {
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        id: 6,
        icon: 'assets/images/pizza_4.jpg',
        title: "Россо Густо",
        type: 'Морська піца',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size: {
            weight: 400,
            size: 30,
            price: 189
        },
        big_size: {
            weight: 700,
            size: 40,
            price: 299
        }
    }
];

/*додавання піц  з масиву*/
function createPizzaHTML(pizza) {
    const pizzaDiv = document.createElement('div');
    pizzaDiv.classList.add('pizza');

    const pizzaImg = document.createElement('img');
    pizzaImg.src = pizza.icon;
    pizzaImg.alt = pizza.title;

    const pizzaTitle = document.createElement('h1');
    pizzaTitle.textContent = pizza.title;

    const pizzaType = document.createElement('span');
    pizzaType.classList.add('graySpan');
    pizzaType.textContent = pizza.type;

    const pizzaContent = document.createElement('p');
    const ingredients = [];
    for (const category in pizza.content) {
        ingredients.push(...pizza.content[category]);
    }
    pizzaContent.textContent = `Інгредієнти: ${ingredients.join(', ')}`;

    pizzaDiv.appendChild(pizzaImg);
    pizzaDiv.appendChild(pizzaTitle);
    pizzaDiv.appendChild(pizzaType);
    pizzaDiv.appendChild(pizzaContent);

    const pizzaInfo = document.createElement('div');
    pizzaInfo.classList.add('pizzaInfo');

    if (pizza.small_size) {
        const subPizzaInfoSmall = document.createElement('div');
        subPizzaInfoSmall.classList.add('subPizzaInfo');

        const upPizzaInfoSmall = document.createElement('div');
        upPizzaInfoSmall.classList.add('upPizzaInfo');
        const smallSizeSpan = document.createElement('span');
        smallSizeSpan.textContent = pizza.small_size.size;
        const smallWeightSpan = document.createElement('span');
        smallWeightSpan.textContent = pizza.small_size.weight;
        upPizzaInfoSmall.appendChild(smallSizeSpan);
        upPizzaInfoSmall.appendChild(smallWeightSpan);

        const downPizzaInfoSmall = document.createElement('div');
        downPizzaInfoSmall.classList.add('downPizzaInfo');
        const smallPriceH3 = document.createElement('h3');
        smallPriceH3.classList.add('priceOfOne');
        smallPriceH3.textContent = pizza.small_size.price;
        const smallCurrencySpan = document.createElement('span');
        smallCurrencySpan.textContent = 'грн';
        const smallBuyButton = document.createElement('button');
        smallBuyButton.classList.add('orangeButton', 'buyOnePizza', 'buySmallPizza');
        smallBuyButton.textContent = 'Купити';
        downPizzaInfoSmall.appendChild(smallPriceH3);
        downPizzaInfoSmall.appendChild(smallCurrencySpan);
        downPizzaInfoSmall.appendChild(smallBuyButton);

        subPizzaInfoSmall.appendChild(upPizzaInfoSmall);
        subPizzaInfoSmall.appendChild(downPizzaInfoSmall);
        pizzaInfo.appendChild(subPizzaInfoSmall);
    }

    if (pizza.big_size) {
        const subPizzaInfoBig = document.createElement('div');
        subPizzaInfoBig.classList.add('subPizzaInfo');

        const upPizzaInfoBig = document.createElement('div');
        upPizzaInfoBig.classList.add('upPizzaInfo');
        const bigSizeSpan = document.createElement('span');
        bigSizeSpan.textContent = pizza.big_size.size;
        const bigWeightSpan = document.createElement('span');
        bigWeightSpan.textContent = pizza.big_size.weight;
        upPizzaInfoBig.appendChild(bigSizeSpan);
        upPizzaInfoBig.appendChild(bigWeightSpan);

        const downPizzaInfoBig = document.createElement('div');
        downPizzaInfoBig.classList.add('downPizzaInfo');
        const bigPriceH3 = document.createElement('h3');
        bigPriceH3.classList.add('priceOfOne');
        bigPriceH3.textContent = pizza.big_size.price;
        const bigCurrencySpan = document.createElement('span');
        bigCurrencySpan.textContent = 'грн';
        const bigBuyButton = document.createElement('button');
        bigBuyButton.classList.add('orangeButton', 'buyOnePizza', 'buyBigPizza');
        bigBuyButton.textContent = 'Купити';
        downPizzaInfoBig.appendChild(bigPriceH3);
        downPizzaInfoBig.appendChild(bigCurrencySpan);
        downPizzaInfoBig.appendChild(bigBuyButton);

        subPizzaInfoBig.appendChild(upPizzaInfoBig);
        subPizzaInfoBig.appendChild(downPizzaInfoBig);
        pizzaInfo.appendChild(subPizzaInfoBig);
    }

    pizzaDiv.appendChild(pizzaInfo);

    return pizzaDiv;
}

const pizzaContainer = document.getElementById('pizzaContainer');
const fishPizzaContainer = document.getElementById('fishPizzaContainer');
const meatPizzaContainer = document.getElementById('meatPizzaContainer');
const mushroomPizzaContainer = document.getElementById('mushroomPizzaContainer');
const vegaPizzaContainer = document.getElementById('vegaPizzaContainer');
// pizza_info.forEach(pizza => {
//     //alert(pizza.type);
//     if(pizza.type==='Морська піца'){
//         fishPizzaContainer.appendChild(createPizzaHTML(pizza));
//     }else if(pizza.type ==='М’ясна піца'){
//         meatPizzaContainer.appendChild(createPizzaHTML(pizza));
//     }else if(pizza.type ==='Вега піца'){
//         vegaPizzaContainer.appendChild(createPizzaHTML(pizza));
//     }else if(pizza.type ==='З грибами'){
//         mushroomPizzaContainer.appendChild(createPizzaHTML(pizza));
//     }
//     pizzaContainer.appendChild(createPizzaHTML(pizza));
// });

// pizza_info.forEach(function (pizza) {
//     var pizzaHTML = createPizzaHTML(pizza);
//     pizzaContainer.appendChild(pizzaHTML);
// });

const uniquePizzas = new Set(); // To store unique pizzas already added

pizza_info.forEach(pizza => {
    // Add to pizzaContainer
    pizzaContainer.appendChild(createPizzaHTML(pizza));

    // Check if pizza type is unique and add to respective container
    if (!uniquePizzas.has(pizza.id)) {
        switch (pizza.type) {
            case 'Морська піца':
                fishPizzaContainer.appendChild(createPizzaHTML(pizza));
                break;
            case 'М’ясна піца':
                meatPizzaContainer.appendChild(createPizzaHTML(pizza));
                break;
            case 'Вега піца':
                vegaPizzaContainer.appendChild(createPizzaHTML(pizza));
                break;
            case 'З грибами': // assuming this type doesn't exist, handle it or remove the line
                mushroomPizzaContainer.appendChild(createPizzaHTML(pizza));
                break;
            default:
                console.warn(`Unknown pizza type: ${pizza.type}`); // handle unknown types (optional)
        }

        uniquePizzas.add(pizza.id); // Mark pizza as added
    }
});



var money = document.querySelector('.money');

const buySmallPizzaButtons = document.querySelectorAll('.buySmallPizza');

//функціонал кнопок покупки малих піц
buySmallPizzaButtons.forEach(button => {
    button.addEventListener('click', function () {

        const allOrders = document.querySelectorAll('.order');

        const p = button.closest('.pizza');
        const pizzaN = p.querySelector('h1').textContent;

        let canAdd = true;

        for (let i = 0; i < allOrders.length; i++) {
            // alert(allOrders[i].querySelector('.pizzaNameOrder').textContent);
            if (allOrders[i].querySelector('.pizzaNameOrder').textContent === pizzaN + ' (мала)') {
                //alert('not again')
                changeQuantityPlus(allOrders[i]);
                //отут треба ще збільшувати загальну суму
                canAdd = false;
                break;
            }
        }
        if (canAdd) {
            addPizzaToOrders(this, 'мала');
            increaseNumberOfOrders();
        }

    });
});

const buyBigPizzaButtons = document.querySelectorAll('.buyBigPizza');
buyBigPizzaButtons.forEach(button => {
    button.addEventListener('click', function () {
        const allOrders = document.querySelectorAll('.order');

        const p = button.closest('.pizza');
        const pizzaN = p.querySelector('h1').textContent;

        let canAdd = true;

        for (let i = 0; i < allOrders.length; i++) {
            // alert(allOrders[i].querySelector('.pizzaNameOrder').textContent);
            if (allOrders[i].querySelector('.pizzaNameOrder').textContent === pizzaN + ' (велика)') {
                //alert('not again')
                changeQuantityPlus(allOrders[i]);
                canAdd = false;
                break;
            }
        }
        if (canAdd) {
            addPizzaToOrders(this, 'велика');
            increaseNumberOfOrders();
        }

    });
});

// const plusButtons = document.querySelectorAll('.buttonPlus');
// plusButtons.forEach(button => {
//     button.addEventListener('click', function (){
//         alert('plus')
//         const myOrder = button.closest('.order');
//         changeQuantityPlus(myOrder);
//     });
// });

function increaseNumberOfOrders() {
    const orderNumSpan = document.querySelector('.numberOfOrders');
    orderNumSpan.textContent = parseInt(orderNumSpan.textContent) + 1;
}

function decreaseNumberOfOrders() {
    const orderNumSpan = document.querySelector('.numberOfOrders');
    orderNumSpan.textContent = parseInt(orderNumSpan.textContent) - 1;
}

function changeQuantityPlus(ordr) {
    let spanToIncrease = parseInt(ordr.querySelector('.orderTextSpan:nth-of-type(2)').textContent);
    spanToIncrease++;
    ordr.querySelector('.orderTextSpan:nth-of-type(2)').textContent = spanToIncrease;
    money.textContent = parseInt(money.textContent) + parseInt(ordr.querySelector('.orderTextSpan').textContent);

}
function changeQuantityMinus(ordr) {
    let spanToIncrease = parseInt(ordr.querySelector('.orderTextSpan:nth-of-type(2)').textContent);
    //if(spanToIncrease>1){
    spanToIncrease--;
    //}
    ordr.querySelector('.orderTextSpan:nth-of-type(2)').textContent = spanToIncrease;
    money.textContent = parseInt(money.textContent) - parseInt(ordr.querySelector('.orderTextSpan').textContent);

}


function createElementWithClassAndText(tag, classNames, textContent) {
    const element = document.createElement(tag);
    if (classNames) {
        element.classList.add(...classNames.split(' '));
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

function createImageElement(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
}

// це оті дивні спани зі значками китайськими
function createSpanBlock(firstSpanText, secondSpanText) {
    const divForSpansOrder = document.createElement('div');
    const spanOneForDivOrder = createElementWithClassAndText('span', '', `\u{29B5}${firstSpanText} `);
    const spanTwoForDivOrder = createElementWithClassAndText('span', '', `\u{9165}${secondSpanText}`);

    divForSpansOrder.append(spanOneForDivOrder, spanTwoForDivOrder);
    return divForSpansOrder;
}

function createPriceAndButtonsBlock(priceText) {
    const divPriceAndButtons = createElementWithClassAndText('div', 'priceAndButtons', '');
    const orderTextSpan = createElementWithClassAndText('span', 'orderTextSpan', `${priceText}грн`);
    const buttonMinus = createElementWithClassAndText('button', 'roundB buttonMinus', '-');
    const numberOfBoughtPizzas = createElementWithClassAndText('span', 'orderTextSpan', '1');
    const buttonPlus = createElementWithClassAndText('button', 'roundB buttonPlus', '+');
    const buttonX = createElementWithClassAndText('button', 'roundB buttonX', 'x');



    buttonMinus.addEventListener('click', function () {
        const myOrder = divPriceAndButtons.closest('.order');
        const num = parseInt(myOrder.querySelector('.orderTextSpan:nth-of-type(2)').textContent);
        //alert(num);
        if (num > 1) {
            //const myOrder = divPriceAndButtons.closest('.order');
            changeQuantityMinus(myOrder);
            // money.textContent = parseInt(money.textContent) - parseInt(myOrder.querySelector('.orderTextSpan').textContent);

        } else {
            deleteOrder(myOrder);
        }
    });


    buttonPlus.addEventListener('click', function () {
        const myOrder = divPriceAndButtons.closest('.order');
        changeQuantityPlus(myOrder);

        // money.textContent = parseInt(money.textContent) + parseInt(myOrder.querySelector('.orderTextSpan').textContent);

    });


    buttonX.addEventListener('click', function () {
        const myOrder = divPriceAndButtons.closest('.order');
        deleteOrder(myOrder);

    });

    divPriceAndButtons.append(orderTextSpan, buttonMinus, numberOfBoughtPizzas, buttonPlus, buttonX);

    return divPriceAndButtons;
}

const deleteOrder = function (ord) {
    money.textContent = parseInt(money.textContent) - parseInt(ord.querySelector('.orderTextSpan').textContent) * parseInt(ord.querySelector('.orderTextSpan:nth-of-type(2)').textContent);
    ord.remove();
    decreaseNumberOfOrders();


}

// додавання нової піци до ордерс
const addPizzaToOrders = function (button, string) {
    const pizza = button.closest('.pizza');
    const pizzaImg = pizza.querySelector('img');
    const pizzaName = pizza.querySelector('h1').textContent;
    const subPizzaInfo = button.closest('.subPizzaInfo');
    const pizzaPrice = subPizzaInfo.querySelector('.priceOfOne').textContent;
    const firstSpan = subPizzaInfo.querySelector('span:nth-of-type(1)').textContent;
    const secondSpan = subPizzaInfo.querySelector('span:nth-of-type(2)').textContent;

    const orders = document.querySelector('.orders');
    const orderDiv = createElementWithClassAndText('div', 'order', '');
    const pizzaImgOrder = createImageElement(pizzaImg.src, pizzaName);
    const pizzaNameOrder = createElementWithClassAndText('h3', 'pizzaNameOrder', `${pizzaName} (${string})`);
    const divForSpansOrder = createSpanBlock(firstSpan, secondSpan);
    const divPriceAndButtons = createPriceAndButtonsBlock(pizzaPrice);


    // alert(parseInt(money.textContent))
    // alert(parseInt(pizzaPrice))
    money.textContent = parseInt(money.textContent) + parseInt(pizzaPrice);


    orderDiv.append(pizzaNameOrder, divForSpansOrder, divPriceAndButtons, pizzaImgOrder);
    orders.appendChild(orderDiv);

    //зберігаємо в локал сторедж
    saveOrderToLocalStorage(pizzaName, string, firstSpan, secondSpan, pizzaPrice, pizzaImg.src);


}

const clearOrderButton = document.querySelector('.cleanOrderButton');
clearOrderButton.addEventListener('click', function () {
    clearOrder();

})

const clearOrder = function () {
    const allOrders = document.querySelectorAll('.order');
    for (let i = 0; i < allOrders.length; i++) {
        allOrders[i].remove();
    }
    const orderNumSpan = document.querySelector('.numberOfOrders');
    orderNumSpan.textContent = 0;
    money.textContent = 0;

}



// const allButton = document.querySelector('.allPizzas');
// const generalNumberOfPizzas = document.querySelector('.generalNumberOfPizzas');
// allButton.addEventListener('click', function () {
//     fishPizzaContainer.classList.add('hide');
//     fishPizzaContainer.classList.remove('productList');

//     meatPizzaContainer.classList.add('hide');
//     meatPizzaContainer.classList.remove('productList');

//     vegaPizzaContainer.classList.add('hide');
//     vegaPizzaContainer.classList.remove('productList');

//     mushroomPizzaContainer.classList.add('hide');
//     mushroomPizzaContainer.classList.remove('productList');


//     pizzaContainer.classList.remove('hide');
//     pizzaContainer.classList.add('productList');

//     generalNumberOfPizzas.textContent = 8;




// });
// const fishButton = document.querySelector('.fish');
// fishButton.addEventListener('click', function () {
//     fishPizzaContainer.classList.remove('hide');
//     fishPizzaContainer.classList.add('productList')

//     pizzaContainer.classList.add('hide');
//     pizzaContainer.classList.remove('productList');

//     meatPizzaContainer.classList.add('hide');
//     meatPizzaContainer.classList.remove('productList');

//     vegaPizzaContainer.classList.add('hide');
//     vegaPizzaContainer.classList.remove('productList');

//     mushroomPizzaContainer.classList.add('hide');
//     mushroomPizzaContainer.classList.remove('productList');

//     generalNumberOfPizzas.textContent = 2;
// });

// const meatButton = document.querySelector('.meat');
// meatButton.addEventListener('click', function () {
//     meatPizzaContainer.classList.remove('hide');
//     meatPizzaContainer.classList.add('productList');

//     pizzaContainer.classList.add('hide');
//     pizzaContainer.classList.remove('productList');

//     fishPizzaContainer.classList.add('hide');
//     fishPizzaContainer.classList.remove('productList');

//     vegaPizzaContainer.classList.add('hide');
//     vegaPizzaContainer.classList.remove('productList');

//     mushroomPizzaContainer.classList.add('hide');
//     mushroomPizzaContainer.classList.remove('productList');

//     generalNumberOfPizzas.textContent = 3;

// });

// const vegaButton = document.querySelector('.vega');
// vegaButton.addEventListener('click', function () {
//     vegaPizzaContainer.classList.remove('hide');
//     vegaPizzaContainer.classList.add('productList');

//     pizzaContainer.classList.add('hide');
//     pizzaContainer.classList.remove('productList');

//     fishPizzaContainer.classList.add('hide');
//     fishPizzaContainer.classList.remove('productList');

//     meatPizzaContainer.classList.add('hide');
//     meatPizzaContainer.classList.remove('productList');

//     mushroomPizzaContainer.classList.add('hide');
//     mushroomPizzaContainer.classList.remove('productList');

//     generalNumberOfPizzas.textContent = 1;

// });

// const mushroomButton = document.querySelector('.mushroom');
// mushroomButton.addEventListener('click', function () {
//     mushroomPizzaContainer.classList.remove('hide');
//     mushroomPizzaContainer.classList.add('productList');

//     pizzaContainer.classList.add('hide');
//     pizzaContainer.classList.remove('productList');

//     fishPizzaContainer.classList.add('hide');
//     fishPizzaContainer.classList.remove('productList');

//     meatPizzaContainer.classList.add('hide');
//     meatPizzaContainer.classList.remove('productList');

//     vegaPizzaContainer.classList.add('hide');
//     vegaPizzaContainer.classList.remove('productList');

//     generalNumberOfPizzas.textContent = 2;

// });

const generalNumberOfPizzas = document.querySelector('.generalNumberOfPizzas');

function switchPizzaContainer(showContainer, numberOfPizzas) {
    const containers = [pizzaContainer, fishPizzaContainer, meatPizzaContainer, vegaPizzaContainer, mushroomPizzaContainer];

    containers.forEach(container => {
        if (container === showContainer) {
            container.classList.remove('hide');
            container.classList.add('productList');
        } else {
            container.classList.add('hide');
            container.classList.remove('productList');
        }
    });

    generalNumberOfPizzas.textContent = numberOfPizzas;
}

document.querySelector('.allPizzas').addEventListener('click', function () {
    switchPizzaContainer(pizzaContainer, 8);
});

document.querySelector('.fish').addEventListener('click', function () {
    switchPizzaContainer(fishPizzaContainer, 2);
});

document.querySelector('.meat').addEventListener('click', function () {
    switchPizzaContainer(meatPizzaContainer, 3);
});

document.querySelector('.vega').addEventListener('click', function () {
    switchPizzaContainer(vegaPizzaContainer, 1);
});

document.querySelector('.mushroom').addEventListener('click', function () {
    switchPizzaContainer(mushroomPizzaContainer, 2);
});

//функція зберігання в локал сторедж
const saveOrderToLocalStorage = (pizzaName, string, firstSpan, secondSpan, pizzaPrice, imgSrc) => {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push({ pizzaName, string, firstSpan, secondSpan, pizzaPrice, imgSrc });
    localStorage.setItem('orders', JSON.stringify(orders));
};





