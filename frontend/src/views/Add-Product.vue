<template>
  <div class="home">
   <h1>My Product</h1>
   <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add  your Product</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Title</label>
            <input type="text" placeholder="name of your product" class="form-control" v-model="title" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" placeholder="description" class="form-control" v-model="description" />
          </div>
          <div class="form-group">
            <label>quantite</label>
            <input type="number" placeholder="quantite" class="form-control" v-model="quantite" />
          </div>
          <button type="button" @click="AddProduct" class="btn btn-primary" id="save">
            Save
          </button>
          <button type="button" @click="getProductById" class="btn btn-primary" id="save">
            get product
          </button>
        </form>
      </div>
      <div class="col-3">
          <li>
            {{data}}

           
            >
          </li></div>
    </div>
  </div>
  <br>
  <br>
{{user_id}} 
  <AddComment/>
  </div>
</template>

<script>
import AddComment from "./AddComment";
import axios from "axios";
export default {
  name: "Add-Product",
  components: {
    AddComment,
  },
  data() {
    return {
      title: '',
      description: '',
      quantite:'',
      user_id:'',
      phone:'',
      email:'',
      address:'',
      data:[]
    }
      },
    mounted() {
    axios.get('http://localhost:3000/api/users/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        // to get information of the user
        this.user_id = res.data.user.id
      })
      .then((res)=>{
        console.log(res.user_id,"heee")
      })
      .catch((error) => {
          console.log(error);
        })
    },
    methods: {
    /// add new product///////
        AddProduct() {  
        let newProduct = {
        title: this.title,
        description: this.description,
        quantite: this.quantite,
        user_id:  this.user_id,
        }
        axios.post('http://localhost:3000/api/products/add', newProduct)
            .then(() => {
            this.$router.push("All-Products");
            })
            .catch((error) => {
            console.log(error);
            });
        },

        getProductById(){
        console.log(this.user_id,"jjkjkjkjkj")
            axios.get(`http://localhost:3000/api/products/${this.user_id}`)
            .then((res)=>{
            console.log(res);
            this.data = res.data
            }).catch((error) => {
            console.log(error);
            });
        },
  
    }
}
</script>

<style>
h1{
  text-align:center
}
.container1{
  margin-left:30%;
  margin-right:-40%;
  width:2000px
}

#save{
  margin-left:45%
}
</style>
