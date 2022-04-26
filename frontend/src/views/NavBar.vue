<template>


  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-Link class="nav-link active" aria-current="page" to="/"
              >Home</router-Link
            >
          </li>
          <li class="nav-item">
            <router-Link class="nav-link" to="/about">About</router-Link>
          </li>
          <li class="nav-item" v-if="user == null" style="margin-left: 450%">
            <router-Link class="nav-link" to="/SigNup">Signup</router-Link>
          </li>
          <li class="nav-item" v-if="user == null">
            <router-Link class="nav-link" to="/Login">Login</router-Link>
          </li>
          <li class="nav-item" v-if="user">
            <router-Link class="nav-link" to="/All-Products">Shop</router-Link>
          </li>
          <li class="nav-item" v-if="user">
            <router-Link class="nav-link" to="/MyProducts"
              >MyProduct</router-Link
            >
          </li>
          <li class="nav-item" v-if="user">
            <router-Link class="nav-link" to="/Add-Product"
              >Add-Product</router-Link
            >
          </li>

          <li class="nav-item" v-if="user">
            <router-Link class="nav-link" to="/MyProfile"
              >profile</router-Link
            >
          </li>
      
          <li class="nav-item" v-if="user" style="margin-left: 820px">
            <div class="dropdown">
              <div class="dropbtn">{{user.username}}</div>
             
              <div class="dropdown-content">
                <a href="/MyProfile">profile</a>
                <a href="/MyProducts">my products</a>
                <a href="/login" @click="logout">logout</a>
              </div>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "NavBar",
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/users/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res, "from mounted navbar");
        // to get the user
        this.user = res.data.user;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  created() {
    if (localStorage.getItem("token") != null) {
      this.user = localStorage.getItem("token");
    } else {
      this.user = null;
    }
  },
  methods:{
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
  }
};
</script>

<style>
nav {
  background: rgb(203, 223, 223);
}

.dropbtn {
  background-color: #1a1c1a;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
