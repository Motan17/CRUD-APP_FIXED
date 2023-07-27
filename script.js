new Vue({
  el: '#app',
  data: function() {
    return {
      item: {nama: "", umur: "", kelas: "",nilai: "",edit: false},
      items: []
    }
  },
  methods:{
    addItem(){
      this.items.push({nama:this.item.nama, umur:this.item.umur,kelas:this.item.kelas,nilai:this.item.nilai, edit: false})
      this.item = [];
      $('#form-nama').focus();
    },
    removeItem(index){
      this.items.splice(index, 1)
    }
  }
});


