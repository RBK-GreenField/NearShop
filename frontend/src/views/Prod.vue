<template>
  <div class="home">
<div class="product-card" >
  <h5 class="card-title">Card title</h5>   
    <div class="product-pic"></div>
        <p class="card-text">Earrings Stud Earrings Kawaii Pokémon Cute Handmade Jewelry Eevee Eevee Pikachu Hoodie Handmade France Plastic Epoxy Resin</p>
<button class="plus" @click="increment()">+</button>
<input class="quantity" :value="amount" />
<button class = 'minus' @click="decrement()">-</button>
        <a href ="#" class="product-button">Add to Card</a>

  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name:'All-Products',
  
   data() {
    return {
      amount: 0,
    };
  },
  methods: {
    increment() {
      this.amount++;
    },

    decrement() {
      this.amount--;
    },
  },
}

</script>

<style>

*{
  margin: 0;
  padding: 0;
  font-family: "Open sans",sans-serif;
  box-sizing: "border-box";
}



  .product-card{
    width: 400px;
    background: #ecedef;
    background-position: center center;
    padding:40px;
    position: absolute;
    left: 50;
    top: 50;
    transform: translate(70%, 10%);
  }
  .product-card h5{
    font-size: 22px;
    margin-bottom: 4px;
  }
  .product-card p{
    font-size:13px;
     
  }

  .product-pic{
    background-image: url("https://i.etsystatic.com/30318708/r/il/8fe9c8/3634621841/il_340x270.3634621841_3r25.jpg");
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
  }
  .product-button {
    margin-left:auto;
    color: #7ed6df;
    text-decoration: none;
    border: 2px solid;
    padding: 8px 24px;
    border-radius:20px;
    transition:.4s linear;
    
  }
  .product-button:hover {
    transform: scale(1.06);
  }
  .quantity{
    width: 35px;
 height: 39px;
 padding: 0 5px;
 text-align: center;
 background-color: white;
 border: 1px solid #efefef;
  }
  
  
</style>