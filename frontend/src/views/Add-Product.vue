<template>
  <div class="home">
  zid produit fisa3
  </div>
 {{id}} 
</template>

<script>
import axios from 'axios';
export default {
  name: 'Add-Product',
  data() {
    return {
      title: '',
      description: '',
      quantitie:'',
      id:''
    }
      },
    mounted() {
    axios.get('http://localhost:3000/api/users/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        // to get id of user
        this.id= res.data.user.id
      }).catch((error) => {
          console.log(error);
        })
  },
  methods: {
    AddProduct() {
      let newProduct = {
    title: this.title,
    description: this.description,
    quantite: this.quantite,
    user_id:  this.id
      }
      axios.post('http://localhost:3000/api/products/add', newProduct)
        .then((res) => {
          
          this.$router.push("All-Products");
          console.log(res.data.user.id)
        }).catch((error) => {
          console.log(error);
        });
    }
    
  }
}
</script>