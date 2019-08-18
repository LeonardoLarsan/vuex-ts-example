import Vue from 'vue';
import NotebookContainer from '../../containers/NotebookContainer.vue'
import { addGatosActionContract, state, getSiameseGatoContract } from '../../store/store'
import gatoInterface from '../../store/models/Gato'

export default Vue.extend({
  name: 'openNotebook',
  components: { NotebookContainer },
  data: () => ({
    gatos: state.gatos
  }),
  methods: {
    addGatoHandler(gatos: gatoInterface[]) {
      addGatosActionContract(gatos)
    },
  },
  computed: {
    getSiameseGato(){
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