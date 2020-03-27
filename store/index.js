/* eslint-disable */
import Vuex from 'vuex'
import axios from 'axios'
const config = {
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 20000,
  baseURL:
    process.env.NODE_ENV !== 'development'
      ? 'http://127.0.0.1:5000'
      : 'https://covid19-assistant.herokuapp.com',
  headers: {
    post: { 'Content-Type': 'application/json' }
  }
}
const api = axios.create(config)
export const state = () => ({
  diagnosis: 2,
  covid: false,
  showResult: false,
  loading: false,
  
})

export const getters = {}

export const mutations = {
  SET_DIAGNOSIS (state, diagnosis) {
    state.diagnosis = diagnosis
    if (diagnosis == 2) state.covid = true
    state.showResult = true
  },
  SET_QUESTIONS (state, questions) {
    state.questions = questions
  }
}
export const actions = {
  async getDiagnosis ({ commit, state }, values) {
    const res = await api.post('/diagnosis', {
      values
    })
    console.log(res.data)
    commit('SET_DIAGNOSIS', res.data.diagnosis)
  }
}
