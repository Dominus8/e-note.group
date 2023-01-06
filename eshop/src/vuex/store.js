import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCT_TO_STATE: (state, products) => {
            state.products = products;
        },
        SRT_CART: (state, product) => {
            state.cart.push(product);
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({ commit }) {
            return axios('http://localhost:3000/products', {
                    method: "GET"
                })
                .then((products) => {
                    commit('SET_PRODUCT_TO_STATE', products.data)
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        ADD_TO_CART({ commit }, product) {

            commit('SRT_CART', product);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },

        CART(state) {
            return state.cart;
        }

    }
})

export default store;