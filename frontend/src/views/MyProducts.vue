<template>
<div>

 <button type="button" @click="getProductById" class="btn btn-primary"  id="my">get my product 
 </button>
 <br>
 <div class="body">
 <div class="home5">
 <div v-for="element in data" v-bind:key="element._id" >
     <div class="container3">
         <h1>{{element.title}}</h1>
         <div class="cardcontainer">
             <div class="photo"> <img :src="element.image_url">
                 <div class="photos">Photos</div>
             </div>
             <div class="content">
                 <p class="txt4"> Quantite: {{element.quantite}}</p>
                 
                 <p class="txt2">Description:{{element.description}}</p>
             </div>
             <div class="footer1">
                 <p><a class="waves-effect waves-light btn" href="#">Read More</a><a id="heart"><span class="like"><i class="fab fa-gratipay"></i>Like</span></a></p>
                 <p class="txt3"><i class="far fa-clock"></i>10 Minutes Ago <span class="comments"><i class="fas fa-comments"></i>45 Comments</span></p>
             </div>
             </div>
         </div>
     </div>
     </div>
     </div>

  </div>

</template>

<script>
import axios from 'axios'
export default {

name:'MyProducts',
data() {
    return {
     user_id:'',
      data:[],
     
    }
      },
      mounted() {
    axios.get('http://localhost:3000/api/users/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        console.log(res.data.user.username)
        this.user_id = res.data.user.id
      })
      .then((res)=>{
        console.log(res.user_id,"heee")
      })
      .catch((error) => {
          console.log(error);
        })

  },
methods:{
    getProductById(){
    console.log(this.user_id,"jjkjkjkjkj")
        axios.get(`http://localhost:3000/api/products/${this.user_id}`)
        .then((res)=>{
          console.log(res.data);
          this.data = res.data
        }).catch((error) => {
          console.log(error);
        });
  }
}
}
</script>

<style>

#my{
margin-left:45%
}

h1 {
    text-align: center;
    color: #333333
}
.home5{
    display:flex;
    flex-wrap: wrap;
}
.body {
    margin-left:10%;
    margin-top: 5%;
    padding: 0;
    font-family: 'roboto', sans-serif;
    background-color: #F2F2F2
}
.container3{
     margin: 10px;

}
h1 {
    text-align: center;
    color: #333333
}

.cardcontainer {
    width: 350px;
    height: 500px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    transition: 0.3s
}

.cardcontainer:hover {
    box-shadow: 0 0 45px gray
}

.photo {
    height: 300px;
    width: 100%
}

.photo img {
    height: 100%;
    width: 100%
}

.txt1 {
    margin: auto;
    text-align: center;
    font-size: 17px
}

.content {
    width: 80%;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: -33px
}

.photos {
    width: 90px;
    height: 30px;
    background-color: #E74C3C;
    color: white;
    position: relative;
    top: -30px;
    padding-left: 10px;
    font-size: 20px
}

.txt4 {
    font-size: 27px;
    position: relative;
    top: 33px
}

.txt5 {
    position: relative;
    top: 18px;
    color: #E74C3C;
    font-size: 23px
}

.txt2 {
    position: relative;
    top: 10px
}

.cardcontainer:hover>.photo {
    height: 200px;
    animation: move1 0.5s ease both
}

@keyframes move1 {
    0% {
        height: 300px
    }

    100% {
        height: 200px
    }
}

.cardcontainer:hover>.content {
    height: 200px
}

.footer1 {
    width: 80%;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    position: relative;
    top: -15px
}

.btn {
    position: relative;
    top: 20px
}

#heart {
    cursor: pointer
}

.like {
    float: right;
    font-size: 22px;
    position: relative;
    top: 20px;
    color: #333333
}

.fa-gratipay {
    margin-right: 10px;
    transition: 0.5s
}

.fa-gratipay:hover {
    color: #E74C3C
}

.txt3 {
    color: gray;
    position: relative;
    top: 18px;
    font-size: 14px
}

.comments {
    float: right;
    cursor: pointer
}

.fa-clock,
.fa-comments {
    margin-right: 7px
}
</style>