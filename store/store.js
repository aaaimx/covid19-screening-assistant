/* eslint-disable */
import Vuex from 'vuex'

new Vuex.Store({
  state: () => ({
    counter: 0
  }),
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})
