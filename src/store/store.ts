import Vue from 'vue'
import Vuex from 'vuex'
import gatoInterface from './models/Gato'
import services from './services'
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
    getSiameseGato: (state, getters): gatoInterface[] => {
      const gatosFiltered = state.gatos.filter(gato => {
        return gato.raza === 'siames'
      })
      return gatosFiltered
    }
  }
})

function addGatoMutationContract(gato: gatoInterface) {
  store.commit('ADD_GATO', gato)
}

function addGatosMutationContract(gato: gatoInterface[]) {
  store.commit('ADD_GATOS', gato)
}

export function getSiameseGatoContract(): gatoInterface[] {
  return store.getters.getSiameseGato
}

export function addGatoActionContract(gato: gatoInterface) {
  addGatoMutationContract(gato)
}

export async function addGatosActionContract(gatos: gatoInterface[]) {
  const gatosGetted = await services.getGatos()
  addGatosMutationContract(gatosGetted)
}


export const state = store.state
export default store