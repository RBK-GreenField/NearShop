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
          <li class="nav-item" v-if="user == null" style="margin-left: 510%">
            <router-Link class="nav-link" to="/SigNup">SigNup</router-Link>
          </li>
          <li class="nav-item" v-if="user == null">
            <router-Link class="nav-link" to="/LogIn">LogIn</router-Link>
          </li>
          <li class="nav-item" v-if="user">
            <router-Link class="nav-link" to="/All-Products"
              >All-Products</router-Link
            >
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
          <li class="nav-item" v-if="user" style="margin-left: 1000px">
            <router-Link class="nav-link" to="/LogOut">LogOut</router-Link>
          </li>
          <li>
            <ShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ShoppingCart from "../components/shoppingCart.vue";
export default {
  name: "NavBar",
  data() {
    return {
      user: null,
    };
  },
  components: {
    ShoppingCart,
  },
  created() {
    if (localStorage.getItem("token") != null) {
      this.user = localStorage.getItem("token");
    } else {
      this.user = null;
    }
  },
};
</script>

<style>
nav {
  background: rgb(203, 223, 223);
}
</style>
