<template>
  <div class="home">
  <h1> here our all Products{{data}} </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  
  name:'All-Products',
  data(){
    return{
      data:[]
    }
  },
  created(){
    axios.get('http://localhost:3000/api/products/getProducts').then(res=>{
      console.log(res.data);
    this.data=res.data
    } 
    
    )
  }
}
</script>