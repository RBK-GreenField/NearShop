<template>
  <div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome To NearShop         
        </h1>
        <p class="subtitle">
          NearShop aims to serve as a platform that provides 
          space and access especially for handmade goods
        </p>
       
        
        </div>
    </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style >
  .hero {    
    text-align: center;
    background-image: url('https://www.helium10.com/app/uploads/2020/08/Amazon_Handmade_Blog_Min_Image_1200x600_LowRes_MF.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 600px;
   
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(245, 249, 248, 0.45);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  
  
</style>
