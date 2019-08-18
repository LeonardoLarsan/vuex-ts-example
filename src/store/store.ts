import Vue from 'vue'
import Vuex from 'vuex'
import gatoInterface from './models/Gato'
Vue.use(Vuex)

export interface stateInterface {
  gatos: gatoInterface[]
}

const store = new Vuex.Store({
  state: {
    gatos: []
  } as stateInterface,
  mutations: {
    ADD_GATO(state, gato: gatoInterface) {
      state.gatos.push(gato)
    },
    ADD_GATOS(state, gatos: gatoInterface[]) {
      state.gatos = gatos
    }
  },
  getters: {
    getSiameseGato:  (state, getters): gatoInterface[] => {
      return state.gatos.filter(gato => gato.raza === 'siames')
    }
  }
})

function addGatoMutationContract(gato: gatoInterface) {
  store.commit('ADD_GATO', gato)
}
function addGatosMutationContract(gato: gatoInterface[]) {
  store.commit('ADD_GATO', gato)
}

export function getSiameseGatoContract(): gatoInterface[] {
  return store.getters.getSiameseGato
}

export function addGatoActionContract(gato: gatoInterface) {
  addGatoMutationContract(gato)
}

export function addGatosActionContract(gatos: gatoInterface[]) {
  addGatosMutationContract(gatos)
}


export const state = store.state
export default store