<template>

    <div class="MyProfile">
    <h1 id="welcome">welcome to your profile </h1>
    </div>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Profile Image hover effect</title>
	<link rel="stylesheet" href="style.css">

	<!-- ------------ Font awesome CDN link ------------------ -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
</head>
<body id="profile">
	<div class="image-area">
		<div class="img-wrapper">
			<img :src="data.image">
			<h2>{{this.data.username}}</h2>
			<ul>
				<li>
        <h2 >{{this.data.email}}</h2>
        <i class="fab fa-github"></i></li>
				<li><h2 >{{this.data.phone}}</h2><i class="fab fa-instagram"></i></li>
				<li><h2 >{{this.data.email}}</h2><i class="fab fa-twitter"></i></li>
			</ul>
		</div>
	</div>
</body>
</html>
</template>

<script>
import axios from "axios"
export default {
  name: "MyProfile",
  
  data() {
    return {
      data: [],
      image: "",
    };
  },
mounted() {
    axios.get('http://localhost:3000/api/users/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        // console.log(res.data.user)
        this.data = res.data.user
                console.log(this.data)

      })
      .then((res)=>{
        console.log(res.user_id,"heee")
      })
      .catch((error) => {
          console.log(error);
        })

  }}
</script>
<style>
#welcome{
  text-align: center;
}
#profile
{
	background: #f1f2f6;
	margin: 0;
	padding: 0;
}

.image-area
{
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
}

.img-wrapper
{
	width: 300px;
	height: 400px;
	position: relative;
	overflow: hidden;
}

.img-wrapper:before
{
	content: '';
	position: absolute;
	top: 0;
	left: 180%;
	height: 100%;
	width: 100%;
	background: rgba(255,255,255,.3);
	z-index: 1;
	transform: skew(45deg);
	transition: .5s;
}

.img-wrapper:hover:before
{
	left: -180%;
}

.img-wrapper img
{
	height: 400px;
	width: 300px;
	filter: grayscale(100%);
	transition: 2s;
}
.img-wrapper:hover img
{
	filter: grayscale(0%);
	transform: scale(1.1);
}

.img-wrapper h2
{
	background: tomato;
	font-family: Poppins;
	color: #fff;
	text-align: center;
	text-transform: uppercase;
	margin: 0;
	padding: 10px 0;
	position: absolute;
	bottom: 0;
	width: 100%;
	transform: perspective(400px) rotateY(90deg);
	transform-origin: right;
	transition: 1s;
}

.img-wrapper:hover h2
{
	transform: perspective(400px) rotateY(0deg);
}

.img-wrapper ul
{
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	padding: 0;
	list-style: none;
	background: rgba(255,255,255,0);
}

.img-wrapper ul li
{
	background: #333;
	height: 40px;
	width: 40px;
	text-align: center;
	line-height: 40px;
	transform: perspective(800px) rotateY(90deg);
	transition: .5s;
	transform-origin: left;
}

.img-wrapper:hover ul li
{
	transform: perspective(800px) rotateY(0deg);
}

.img-wrapper:hover ul li:nth-child(1)
{
	transition-delay: .2s;
}

.img-wrapper:hover ul li:nth-child(2)
{
	transition-delay: .6s;
}

.img-wrapper:hover ul li:nth-child(3)
{
	transition-delay: .8s;
}

.img-wrapper:hover ul li:nth-child(4)
{
	transition-delay: 1s;
}

.img-wrapper ul li 
{
	color: tomato;
	background: rgba(255,255,255,0);
}

.img-wrapper ul li i
{
	color: tomato;
	background: rgba(255,255,255,0);
}

.img-wrapper ul li i:hover
{
	color: #fff;
	background: rgba(255,255,255,0);
}
</style>