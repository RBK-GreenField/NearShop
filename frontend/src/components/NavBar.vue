<template>
<nav>
  <div>
      
    <ul class="menu" style="width:100%">
      <div
        class="menu-indicator"
        :style="{ left: positionToMove, width: '100%' }"
      ></div>
      <li
        class="menu-item"
        :key="linksGuest[0].id"
        @click="sliderIndicator(linksGuest[0].id)"
        :ref="'menu-item_' + linksGuest[0].id"
      >
        <router-link
          :to="linksGuest[0].path"
          class="menu-link"
          :class="linksGuest[0].id === selectedIndex ? 'active' : null"
        >
          <i class="menu-icon" :class="linksGuest[0].icon"></i>
          <span>{{ linksGuest[0].text }}</span>
        </router-link>
      </li>
      <li
        class="menu-item"
        :key="linksGuest[1].id"
        @click="sliderIndicator(linksGuest[1].id)"
        :ref="'menu-item_' + linksGuest[1].id"
      >
        <router-link
          :to="linksGuest[1].path"
          class="menu-link"
          :class="linksGuest[1].id === selectedIndex ? 'active' : null"
        >
          <i class="menu-icon" :class="linksGuest[1].icon"></i>
          <span>{{ linksGuest[1].text }}</span>
        </router-link>
      </li>
      <li
        class="menu-item"
        :key="linksGuest[2].id"
        @click="sliderIndicator(linksGuest[2].id)"
        :ref="'menu-item_' + linksGuest[2].id"
      >
        <router-link
          :to="linksGuest[2].path"
          class="menu-link"
          :class="linksGuest[2].id === selectedIndex ? 'active' : null"
        >
          <i class="menu-icon" :class="linksGuest[2].icon"></i>
          <span>{{ linksGuest[2].text }}</span>
        </router-link>
      </li>
      <li
        v-if="!user"
        class="menu-item"
        :key="linksGuest[3].id"
        @click="sliderIndicator(linksGuest[3].id)"
        :ref="'menu-item_' + linksGuest[3].id"
      >
        <router-link
          :to="linksGuest[3].path"
          class="menu-link"
          :class="linksGuest[3].id === selectedIndex ? 'active' : null"
        >
          <i class="menu-icon" :class="linksGuest[3].icon"></i>
          <span>{{ linksGuest[3].text }}</span>
        </router-link>
      </li>
      <li
        v-if="!user"
        class="menu-item"
        :key="linksGuest[4].id"
        @click="sliderIndicator(linksGuest[4].id)"
        :ref="'menu-item_' + linksGuest[4].id"
      >
        <router-link
          :to="linksGuest[4].path"
          class="menu-link"
          :class="linksGuest[4].id === selectedIndex ? 'active' : null"
        >
          <i class="menu-icon" :class="linksGuest[4].icon"></i>
          <span>{{ linksGuest[4].text }}</span>
        </router-link>
      </li>
       <li v-if="user">
            <div class="dropdown">
              <div class="dropbtn">{{ user.username }}</div>
             
              <div class="dropdown-content">
                <a href="/MyProfile">profile</a>
                <a href="/MyProducts">my products</a>
                <a href="/addProduct">add product</a>
                <a href="/login" @click="logout">logout</a>
              </div>
            </div>
            
          </li>
    </ul>
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
      sliderPosition: 0,
      selectedElementWidth: 0,
      selectedIndex: 0,
      linksGuest: [
        {
          id: 1,
          icon: "fa-solid fa-house",
          text: "Home",
          path: "/",
        },
        {
          id: 2,
          icon: "fa-solid fa-store",
          text: "Store",
          path: "/All-Products",
        },
        {
          id: 3,
          icon: "fa-solid fa-address-card",
          text: "About us",
          path: "/about",
        },
        {
          id: 4,
          icon: "",
          text: "login",
          path: "/login",
        },
        {
          id: 5,
          icon: "",
          text: "sign up",
          path: "signup",
        },
      ],
      linksConnected: [
        {
          id: 1,
          icon: "fa-solid fa-user",
          text: "User",
          path: "/about",
        },
      ],
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
  methods: {
    sliderIndicator(id) {
      let el = this.$refs[`menu-item_${id}`][0];
      this.sliderPosition = el.offsetLeft;
      this.selectedElementWidth = el.offsetWidth;
      this.selectedIndex = id;
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  computed: {
    positionToMove() {
      return this.sliderPosition + "px";
    },
    sliderWidth() {
      return this.selectedElementWidth + "px";
    },
  },
};
</script>

<style>
:root {
  --active-color: #ffee93;
  --link-text-color: #f1faee;
  --menu-background-color: #1d3557;
  --active-background-color: #132238;
}
/* ul */
.menu {
  padding: 0;
  margin: 0;
  position: relative;
  background-color: var(--menu-background-color);
  display: inline-flex;
  border-radius: 4px;
  justify-content: space-around;
}
/* li */
.menu-item {
  display: inline-flex;
  justify-content: space-between;
}
/* a */
.menu-link {
  padding: 0.75rem 1rem;
  display: inline-flex;
  align-items: center;
  color: var(--link-text-color);
  text-decoration: none;
}
.menu-link:hover,
.menu-link.active {
  color: var(--active-color);
  background-color: var(--active-background-color);
}
/* icon */
.menu-icon {
  height: 1.5rem;
  width: 1.5rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  margin-right: 0.2rem;
}
/* slider */
.menu-indicator {
  position: absolute;
  height: 0.25rem;
  background-color: var(--active-color);
  bottom: 0;
  left: 0;
  margin: auto;
  width: 3rem;
  transition: all ease 0.5s;
}
.dropbtn {

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
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #93d9ff;
}
</style>
