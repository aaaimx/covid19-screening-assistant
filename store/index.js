/* eslint-disable */
import Vuex from 'vuex'
import axios from 'axios'
const config = {
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 20000,
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'https://covid-19-mx.herokuapp.com'
      : 'https://covid19-assistant.herokuapp.com',
  headers: {
    post: { 'Content-Type': 'application/json' }
  }
}
const api = axios.create(config)

export const state = () => ({
  diagnosis: 0,
  covid: false,
  base: '/covid19-assistant',
  showResult: false,
  loading: false
})

export const getters = {}

export const mutations = {
  RESET_ASSISTANT (state) {
    state.covid = false
    state.diagnosis = 0
    state.showResult = false
  },
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
    const res = await api.post('/diagnosis/', {
      values
    })
    console.log(res.data)
    commit('SET_DIAGNOSIS', res.data.diagnosis)
  }
}
