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
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isPrductExist = false;
                state.cart.map(function(item) {
                    if (item.id === product.id) {
                        isPrductExist = true;
                        item.quantity++;
                    }
                })
                if (!isPrductExist) {
                    state.cart.push(product);
                }

            } else {
                state.cart.push(product);
            }
        },
        DECREMENT_CART_ITEM: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        },
        INCREMENT_CART_ITEM: (state, index) => {
            state.cart[index].quantity++

        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({ commit }) {
            return axios('http://212.109.195.83:8181/products', {
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
        DECREMENT_CART_ITEM({ commit }, index) {
            commit('DECREMENT_CART_ITEM', index)
        },
        INCREMENT_CART_ITEM({ commit }, index) {
            commit('INCREMENT_CART_ITEM', index)
        },
        ADD_TO_CART({ commit }, product) {

            commit('SET_CART', product);
        },
        DELETE_FROM_CART({ commit }, index) {
            commit('REMOVE_FROM_CART', index)
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