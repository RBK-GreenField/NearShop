<template>
<div>
<h1 style="margin-left:0%">here our all Products</h1>
<p>search</p>
      
       <input class="mySearch" type="text" v-model="search" placeholder="search product" />
     <i class="mySearch fa-solid fa-magnifying-glass"></i>
     
  <div class="home2">
    <br>
    <div v-for="element in filtredProduct" v-bind:key="element._id" >
    <div class="a-box">
    <div class="img-container">
      <div class="img-inner">
        <div class="inner-skew">
          <img
            :src="element.image_url"
          />
        </div>
      </div>
    </div>
    <div class="text-container">
      <h3>{{element.title}}</h3>
      <div>
        <p>{{element.description}}</p>
      </div>

      <button class="plus" @click="increment()">+</button>
      <input class="quantity" :value="amount" />
      <button class="minus" @click="decrement()">-</button>
      <a href="#" class="product-button">Add to Card</a>
    </div>
  </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  
  name:'All-Products',
  data(){
    return{
      data:[],
      amount: 0,
         search:""
    }
  },
  created(){
    axios.get('http://localhost:3000/api/products/getProducts').then(res=>{
      console.log(res.data);
    this.data=res.data
    } )},
   methods: {
    increment() {
      this.amount++;
    },

    decrement() {
      this.amount--;
    },
    
  },
  computed:{
      filtredProduct:function(){
        return this.data.filter((element)=>{
          return element.title.match(this.search)
        })
      }
    }
}

</script>

<style>

body {
  text-align: center;
  background: #f8f4f2;
  font-family: Arial;
}
.home2{
      margin-left:10%;

 display: flex;
 flex-wrap: wrap;

}
.a-box {
 margin: 10px;
  margin-top:90px;
  display: inline-block;
  width: 240px;
  text-align: center;
}

.img-container {
  height: 230px;
  width: 200px;
  overflow: hidden;
  border-radius: 0px 0px 20px 20px;
  display: inline-block;
}

.img-container img {
  height: 230px;
  margin: -30px 0px 0px 0px;
}

.inner-skew {
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  padding: 0px;
  transform: skew(0deg, 0deg);
  font-size: 0px;
  margin: 30px 0px 0px 0px;
  background: #c8c2c2;
  height: 200px;
  width: 200px;
}

.text-container {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 200px 20px 20px 20px;
  border-radius: 20px;
  background: #fff;
  margin: -100px -00px 0px 0px;
  line-height: 19px;
  font-size: 13px;
}

.text-container h3 {
  margin: -80px 0px 0px 0px;
  color: #04bcff;
  font-size: 18px;
}
.product-button {
  margin: 100px 0px 0px 25px;
  color: #7ed6df;
  text-decoration: none;
  border: 3px solid;
  padding: 8px 10px;
  border-radius: 20px;
  transition: 0.4s linear;
}
.product-button:hover {
  transform: scale(1.06);
}
.quantity {
  width: 35px;
  height: 27px;
  padding: 0 5px;
  text-align: center;
  background-color: rgb(217, 205, 205);
  border: 1px solid #efefef;
}
.plus {
  background: #0588bc;
}
.minus {
  background: #eb0404;
}
  .mySearch {
    margin-right: 15px;
     border-radius:10px;
     font-size:20px;
  }
</style>