document.addEventListener("DOMContentLoaded", (event) => {
    let pizza_info = [
        {
            id: 1,

            icon: 'images/pizza_7.jpg',
            title: "Імпреза",
            type: 'М’ясна піца',
            content: {
                meat: ['балик', 'салямі'],
                chicken: ['куриця'],
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
            is_popular: false,
        },
        {
            id: 2,
            icon: 'images/pizza_2.jpg',
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
            icon: 'images/pizza_1.jpg',
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
            },
            is_popular: true
        },
        {
            id: 4,
            icon: 'images/pizza_5.jpg',
            title: "Сициліано",
            type: 'М’ясна піца',
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
            },
            is_popular: true
        },
        {
            id: 17,
            icon: 'images/pizza_3.jpg',
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
            icon: 'images/pizza_6.jpg',
            title: "Мікс смаків",
            type: 'М’ясна піца',
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
            icon: 'images/pizza_8.jpg',
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
            icon: 'images/pizza_4.jpg',
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

        const pizzaContainer = document.querySelector('#pizza-container');
        const orderedPizzasContainer = document.querySelector('.orderedPizzas');
        const textContentClass = 'textContent';
        const pizzaHeaderClass = 'pizzaTypeName';
        const pizzaTitleClass = 'pizzaTitleClass';
        const buyText = 'Купити';
        const ingredientsClass = 'ingredientsClass';
        let totalSum = 0;
    
        
       
        
      
        
        
        pizza_info.forEach(pizza => {
            const pizzaDiv = document.createElement('div');
            pizzaDiv.className = 'pizza';
    
            const badgeNew = pizza.is_new ? `<p class="badge badge-new">Нова</p>` : '';
            const popularBadge = pizza.is_popular ? `<p class="badge badge-popular ${pizza.id >= 3 ? 'specialPizza' : ''}">Популярна</p>` : '';
    
            const smallSize = pizza.small_size ? `
                <div id="smallSize">  
                    <p><img src="images/size-icon.svg" class="imgSize"/>${pizza.small_size.size}</p>
                    <p><img src="images/weight.svg" class="imgWeight"/>${pizza.small_size.weight}</p>
                    <p id="price">${pizza.small_size.price}</p>
                    <button class="buyButton"> ${buyText} </button>
                </div>` : '';
    
            const bigSize = pizza.big_size ? `
                <div id="bigSize">
                    <p><img src="images/size-icon.svg" class="imgSize"/>${pizza.big_size.size}</p>
                    <p><img src="images/weight.svg" class="imgWeight"/>${pizza.big_size.weight}</p>
                    <p id="price">${pizza.big_size.price}</p>
                    <button class="buyButton buyButton2"> ${buyText}</button>
                </div>` : '';
    
            function capitalizeFirstWord(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
    
            const combinedIngredients = [
                ...pizza.content.meat || [],
                ...pizza.content.chicken || [],
                ...pizza.content.cheese || [],
                ...pizza.content.pineapple || [],
                ...pizza.content.additional || []
            ].join(', ');
    
            const formattedIngredients = capitalizeFirstWord(combinedIngredients);
    
            const pizzaContent = `
                ${badgeNew}
                ${popularBadge}
                <div class="pizzaContentAll">
                    <img src="${pizza.icon}" alt="${pizza.title}" class="pizza-img">
                    <h3 class="${pizzaTitleClass}">${pizza.title}</h3>
                    <section class="${textContentClass}">
                        <p class="${pizzaHeaderClass}">${pizza.type}</p>
                        <section class="${ingredientsClass}">
                            ${formattedIngredients}
                        </section>
    
                        <section class="size">
                            ${smallSize}
                            ${bigSize}
                        </section>
                    </section>
                </div>`;
    
            pizzaDiv.innerHTML = pizzaContent;
            pizzaContainer.appendChild(pizzaDiv);
        });
        document.querySelectorAll('.filterItem').forEach(filter => {
            filter.addEventListener('click', () => {
                document.querySelectorAll('.filterItem').forEach(filter => filter.classList.remove('active'));
                filter.classList.add('active');

                const filterValue = filter.innerText.toLowerCase();
                filterPizzas(filterValue);
            });
        });
    
        function filterPizzas(filterValue) {
            const pizzas = document.querySelectorAll('.pizza');
            pizzas.forEach(pizza => {
                const pizzaType = pizza.querySelector(`.${pizzaHeaderClass}`).innerText.toLowerCase();
                const ingredients = pizza.querySelector(`.${ingredientsClass}`).innerText.toLowerCase();
                const filterMap = {
                    'усі': 'усі',
                    'мʼясні': 'м’ясна піца',
                    'з ананасами': 'ананаси',
                    'з морепродуктами': 'морська піца',
                    'вега': 'вега піца'
                };
    
                const filterCategory = filterMap[filterValue] || filterValue;
    
                if (filterCategory === 'усі' || pizzaType.includes(filterCategory) || ingredients.includes(filterCategory)) {
                    pizza.style.display = 'block';
                } else {
                    pizza.style.display = 'none';
                }
            });
        }
    
        
        
        
        
        function setUpLocalStorage() {
            if (!localStorage.getItem('orderedPizzas')) {
                localStorage.setItem('orderedPizzas', JSON.stringify([]));
            }
        }
    
        function renderOrderedPizzas() {
            const orderedPizzas = JSON.parse(localStorage.getItem('orderedPizzas'));
            orderedPizzasContainer.innerHTML = ''; // Clear the container before re-rendering
    
            orderedPizzas.forEach(pizza => {
                const orderedPizza = document.createElement('div');
                orderedPizza.className = 'pizzaCart';
                orderedPizza.innerHTML = `
                    <div class="info">  
                        <label for="pizaCart">${pizza.title}</label>
                        <div class="sizeAndWeight">
                            <div class="sizeCart">
                                <img class="imgSize" src="images/size-icon.svg"/>
                                <p class="sizeNumber">${pizza.size}</p>
                            </div>
                            <div class="weightCart">
                                <img class="imgSize" src="images/weight.svg"/>
                                <p class="sizeNumber">${pizza.weight}</p>
                            </div>
                        </div>    
                        <div class="functionalPanel">
                            <div class="sum"><b>${pizza.price}</b></div>
                            <div class="buttonsAmount">
                                <div class="plusAndMinus">
                                    <div class="minus">-</div>
                                    <div class="amount">${pizza.amount}</div>
                                    <div class="plus">+</div>
                                </div>
                                <div class="delete"><b>x</b></div>
                            </div>
                        </div>
                    </div>
                    <div class="imgCart">
                        <img src="${pizza.icon}" alt="${pizza.title}" class="imgPizzaCart">
                    </div>
                `;
    
                orderedPizzasContainer.appendChild(orderedPizza);
    
                const plusButton = orderedPizza.querySelector('.plus');
                const minusButton = orderedPizza.querySelector('.minus');
                const amountDisplay = orderedPizza.querySelector('.amount');
    
                

                plusButton.addEventListener('click', () => {
                    pizza.amount++;
                    amountDisplay.textContent = pizza.amount;
                    updateLocalStorage(orderedPizzas);
                    updateTotalSum();
                });
    
                minusButton.addEventListener('click', () => {
                    if (pizza.amount > 1) {
                        pizza.amount--;
                        amountDisplay.textContent = pizza.amount;
                       updateLocalStorage(orderedPizzas);
                        updateTotalSum();
                    } else if (pizza.amount === 1) {
                        deleteOnePizza(pizza.title);
                    }
                });
    
                orderedPizza.querySelector('.delete').addEventListener('click', (event) => {
                    const pizzaTitle = event.target.closest('.pizzaCart').querySelector('label').innerText;
                    deleteOnePizza(pizzaTitle);
                    //updateLocalStorage(JSON.parse(localStorage.getItem('orderedPizzas')));
                    renderOrderedPizzas();
                });
            });
    
            // Add panel for ordering
            const panelForOrdering = document.createElement('section');
            panelForOrdering.className = 'panelForOrdering';
            panelForOrdering.innerHTML = `
                <div class="orderText">
                    <div id="textSum">Сума замовлення</div>
                    <div id="sumUAH"> ${totalSum} грн</div>
                </div>
                <a href="charts.html" id="chartsHtml"><button id="orderButton" class="buyButton">Замовити</button></a>
            `;
            orderedPizzasContainer.appendChild(panelForOrdering);
            updateTotalSum();
        }
    
        function updateTotalSum() {
            const orderedPizzas = JSON.parse(localStorage.getItem('orderedPizzas'));
            totalSum = orderedPizzas.reduce((sum, pizza) => sum + (pizza.price * pizza.amount), 0);
            document.getElementById('sumUAH').textContent = `${totalSum} грн`;
        }
    
        function updateLocalStorage(orderedPizzas) {
            localStorage.setItem('orderedPizzas', JSON.stringify(orderedPizzas));
        }
    
        function deleteOnePizza(pizzaTitle) {
            let orderedPizzas = JSON.parse(localStorage.getItem('orderedPizzas'));
            const pizzaToDelete = orderedPizzas.find(pizza => pizza.title === pizzaTitle);
    
            if (pizzaToDelete) {
                const pizzaIndex = orderedPizzas.indexOf(pizzaToDelete);
                orderedPizzas.splice(pizzaIndex, 1);
                updateLocalStorage(orderedPizzas);
                renderOrderedPizzas();
            } else {
                console.log('Pizza not found in ordered pizzas.');
            }
        }
    
        function deleteAllOrderedPizzas() {
            localStorage.setItem('orderedPizzas', JSON.stringify([]));
        //   updateLocalStorage([]);
            renderOrderedPizzas();
        }
    
        setUpLocalStorage();
        renderOrderedPizzas();
    
        document.querySelectorAll('.buyButton').forEach(button => {
            button.addEventListener('click', (event) => {
                const pizzaCard = event.target.closest('.pizza');
                const pizzaTitle = pizzaCard.querySelector(`.${pizzaTitleClass}`).innerText;
                const type = pizzaCard.querySelector(`.pizzaTypeName`).innerText;
                const size = event.target.closest('div').id === 'smallSize' ? 30 : 40;
                const weight = event.target.previousElementSibling.previousElementSibling.innerText;
                const price = parseInt(event.target.previousElementSibling.innerText, 10);
                const icon = pizzaCard.querySelector('img').src;
                const orderedPizzas = JSON.parse(localStorage.getItem('orderedPizzas'));

    
                let existingPizza = orderedPizzas.find(pizza => pizza.title === pizzaTitle && pizza.size === size);
                if (existingPizza) {
                    existingPizza.amount++;
                } else {
                    existingPizza = {
                        title: pizzaTitle,
                        weight,
                        size,
                        price,
                        icon,
                        type: type,
                        amount: 1
                    };
                    orderedPizzas.push(existingPizza);
                }
    
                updateLocalStorage(orderedPizzas);
                renderOrderedPizzas();
            });
        });
    
        document.getElementById('clearLabel').addEventListener('click', () => {
            deleteAllOrderedPizzas();
            totalSum = 0;
            document.getElementById('sumUAH').textContent = `${totalSum} грн`;
        });
        document.querySelector('#orderButton').addEventListener('click', () => {
            updateLocalStorage(JSON.parse(localStorage.getItem('orderedPizzas')));
        });
    });
    