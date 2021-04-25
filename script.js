// https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses – адрес API;
// /catalogData.json – получить список товаров;
// /getBasket.json – получить содержимое корзины;
// /addToBasket.json – добавить товар в корзину;
// /deleteFromBasket.json – удалить товар из корзины
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) resolve(xhr.responseText)
                else reject('Error')
            }
        }

        xhr.open('GET', `${API_URL}${url}`, true);
        xhr.send();
    })

}

class GoodsItem {
    constructor(title, price, id) {
        this.product_name = title;
        this.price = price;
        this.id_product = id;
    }

    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p><button id="${this.id_product}">Добавить</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        return makeGETRequest(`/catalogData.json`).then((goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
        })
    }



    getSumm() {
        return this.goods.forEach((item) => summ += item.price);
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price, good.id_product);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    get
}

class GoodsBasket extends GoodsList {
    constructor() {
        super();
    }

    showBasket() {
        console.log(basket);
    }

    buy() {

    }

    clear() {

    }

}

class BasketItem extends GoodsItem {
    constructor() {
        super();
    }

    add() {

    }
    remove() {

    }

}

const list = new GoodsList();
list.fetchGoods().then(() => list.render());