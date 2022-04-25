<template>
<h1>Welcome {{username}} to your page </h1>
<h1>Your Product</h1>
<div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3"> From here you can add  your Product</h3>
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
          <button type="button" @click="getProductById" class="btn btn-primary" id="get">
            get product
          </button>
        </form>
      </div>
        </div>

  </div>
  <br>
  <br>
  <AddComment/>
</template>

<script>
import AddComment from './AddComment'
import axios from 'axios';
export default {
  name: 'Add-Product',
  components: {
    AddComment
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
      username:'',
      data:[]
    }
      },
    mounted() {
    axios.get('http://localhost:3000/api/users/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        console.log(res.data.user.username)

        // to get information of the user
        this.user_id = res.data.user.id
        this.email=res.data.user.email
        this.address= res.data.user.address
        this.phone= res.data.user.phone
        this.username = res.data.user.username
       
      })
      .then((res)=>{
        console.log(res.username,"heee")
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
    email:this.email,
    address: this.address,
    phone:this.phone 
      }
      // console.log(newProduct)
      axios.post('http://localhost:3000/api/products/add', newProduct)
.then(() => {
          this.$router.push("All-Products");
          console.log(this.data);
        }).catch((error) => {
          console.log(error);
        });
    },

  getProductById(){
    // console.log(this.user_id,"jjkjkjkjkj")
    //     axios.get(`http://localhost:3000/api/products/${this.user_id}`)
    //     .then((res)=>{
    //       console.log(res);
    //       this.data = res.data
    //       this.$router.push("All-Products");
    //     }).catch((error) => {
    //       console.log(error);
    //     });
     this.$router.push("MyProducts");
  }
  
  }}
</script>

<style>
h1{
  text-align:center
}

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

#get{
  margin-top:80px;
  margin-left:-85px
}



h1 {
    text-align: center;
    color: #333333
}


</style>