<template>
  <div class="about">
    <div class="about-section">
  <h6>About Us Page</h6>
  <h1>Welcom To App NearShop for Handmade .</h1>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="../images/img5.jpg" alt="Jane" style="width:40% " >
      <div class="container">
        <h2>Amin Selmi</h2>
        <p class="title">Scrum Master</p>
        <p>A scrum master is the facilitator for an agile development team.</p>
        <h6>amin@gmail.com</h6>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="../images/img6.jpg" alt="Mike" style="width:40%">
      <div class="container">
        <h2>Imed Rahal</h2>
        <p class="title">Developer</p>
        <p>a programmer engaged in, the development  Web applications.</p>
        <h6>imed@gmail.com</h6>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="../images/img7.jpg" alt="Mike" style="width:40%">
      <div class="container">
        <h2>Ons Khardani</h2>
        <p class="title">Developer</p>
        <p>a programmer engaged in, the development  Web applications.</p>
        <h6>ons@gmail.com</h6>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="../images/img9.jpg" alt="John" style="width:40%">
      <div class="container">
        <h2>Haythem Bou</h2>
        <p class="title">Developer</p>
        <p>a programmer engaged in, the development  Web applications.</p>
        <h6>haythem@gmail.com</h6>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="../images/img8.jpg" alt="John" style="width:27%">
      <div class="container">
        <h2>Mourad Chniti</h2>
        <p class="title">Developer</p>
        <p>a programmer engaged in, the development  Web applications.</p>
        <h6>mourad@gmail.com</h6>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'AboutView',
  components: {
    
  }
}
</script>
<style >
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 20%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  border-radius: 5px;
}

.about-section {
  padding: 30px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding:  10px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  border-radius:5px;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>