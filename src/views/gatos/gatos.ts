import Vue from 'vue';
import { addGatosActionContract, state, getSiameseGatoContract } from '../../store/store'
import gatoInterface from '../../store/models/Gato'

export default Vue.extend({
  name: 'gatos',
  data: () => ({
    gatos: state.gatos
  }),
  methods: {
    addGatoHandler(gatos: gatoInterface[]) {
      addGatosActionContract(gatos)
    },
  },
  computed: {
    getSiameseGatos(){
      return getSiameseGatoContract()
    }
  },
  created() {
    setTimeout(() => {
      this.addGatoHandler([{
        nombre: 'Tiberiuz',
        edad: 8,
        raza: 'siames'
      }])
    }, 1000)
  }
});