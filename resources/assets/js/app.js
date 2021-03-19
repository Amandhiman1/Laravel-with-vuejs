
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('modal', {
  template: '#modal-template'
})

var app = new Vue({
  el: '#vue-wrapper',

  data: {
    items: [],
    hasError: true,
    hasDeleted: true,
    showModal: false,
    e_name: '',
    e_lastname: '',
    e_id: '',
    e_phone: '',
    e_email: '',
    e_dob: '',
    e_salary: '',
    newItem: { 'name': '','lastname': '','phone': '','email': '','dob': '','salary': '' },
   },
  mounted: function mounted() {
    this.getVueItems();
  },
  methods: {
    getVueItems: function getVueItems() {
      var _this = this;

      axios.get('/vueitems').then(function (response) {
        _this.items = response.data;
      });
    },
    setVal(val_id, val_name, val_lastname, val_phone, val_email, val_dob, val_salary) {
        this.e_id = val_id;
        this.e_name = val_name;
        this.e_lastname = val_lastname;
        this.e_phone = val_phone;
        this.e_email = val_email;
        this.e_dob = val_dob;
        this.e_salary = val_salary;
    },

    createItem: function createItem() {
      var _this = this;
      var input = this.newItem;
      
      if (input['name'] == '' || input['lastname'] == '' || input['phone'] == '' || input['email'] == '' || input['dob'] == '' || input['salary'] == '') {
        this.hasError = false;
      } else {
        this.hasError = true;
        axios.post('/vueitems', input).then(function (response) {
          _this.newItem = { 'name': '', 'lastname': '', 'phone': '', 'email': '', 'dob': '', 'salary': ''};
          _this.getVueItems();
        });
        this.hasDeleted = true;
      }
    },
    editItem: function(){
         var i_val_1 = document.getElementById('e_id');
         var n_val_1 = document.getElementById('e_name');
         var a_val_1 = document.getElementById('e_lastname');
         var p_val_1 = document.getElementById('e_phone');
         var e_val_1 = document.getElementById('e_email');
         var d_val_1 = document.getElementById('e_dob');
         var s_val_1 = document.getElementById('e_salary');

          axios.post('/edititems/' + i_val_1.value, {val_1: n_val_1.value, val_2: a_val_1.value,val_3: p_val_1.value,val_4: e_val_1.value,val_5: d_val_1.value,val_6: s_val_1.value })
            .then(response => {
              this.getVueItems();
              this.showModal=false
            });
          this.hasDeleted = true;
        
  },
    deleteItem: function deleteItem(item) {
      var _this = this;
      axios.post('/vueitems/' + item.id).then(function (response) {
        _this.getVueItems();
        _this.hasError = true, 
        _this.hasDeleted = false
        
      });
    }
  }
});


