import Vue from 'vue';

export default Vue.extend({
  name: 'Notebook',
  data() {
  return {
    nombre: 'Nombre de app',
    formInline:{
      ciclo:'',
      año:'',
      cuatrimestre:'',
      materia:'',
      catedra:'',
      condicion:'',
      nota:''
    }
  }
    
}

});