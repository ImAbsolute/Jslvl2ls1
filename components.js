Vue.component('goods-list', {
    name: 'goods-list',
    props: ['goods'],
    template: `
        <main>
            <div v-if="goods.length !== 0" class="goods-list">
                <div class="goods-item" v-for="good in goods">
                    <goods-item :good="good" />
                </div>
            </div>
            <div v-else>Нет данных</div>
        </main>
    `
});

Vue.component('goods-item', {
    name: 'goods-item',
    props: ['good'],
    template: `
        <div>
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
        </div>
    `
});

Vue.component('search', {
    name: 'search',
    props: ['searchLine'],
    template: `
    <div>
        <input :value="searchLine" @input="$emit('input', $event.target.value)" type="text" class="goods-search" />
        <button class="search-button" type="button" @click="$emit('filter-goods')">Искать</button>
    </div>
    `
})


Vue.component('basket', {
    name: 'basket',
    data: () => ({
        isVisibleCart: false,
    }),
    methods: {
        handleCart() {
            this.isVisibleCart = !this.isVisibleCart;
        }
    },
    template: `
    <div>
        <button class="cart-button" type="button" @click="handleCart">Корзина</button>
        <div class="basket" v-show='isVisibleCart'>
            <p>Корзина</p>
        </div>
    </div>
    `
})