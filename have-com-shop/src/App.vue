<template>
  <nav
    v-if="nav"
    class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between flex-nowrap flex-row"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand float-left"
        >HaveCOM SHOP</router-link
      >
      <div class="collapse navbar-collapse topnav-right" id="navbarDropdown">
        <ul class="nav navbar-nav ml-auto" v-if="Inlogin">
          <li class="nav-item dropdown">
            <a
              href=""
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenu"
              data-toggle="dropdown"
              >{{ username }}</a
            >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenu">
              <li>
                <a href="" @click="Logout" class="dropdown-item">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto" v-else>
          <li class="nav-item">
            <router-link to="/login" class="nav-link pr-3">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link pr-3"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Router view -->

  <router-view  @set-nav="SetNav"></router-view>
</template>
<script>
import axios from "axios"
import {MainURL} from './MainUrl'

export default {
  data() {
    return{
      nav: true,
      username: "",
      Inlogin: false,

    }
  },
  methods: {
    Logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    SetNav(set){
      this.nav = set
    },
  },
  created(){
    let apiURL = MainURL+"/user/verify-token";
    let token = localStorage.getItem("token");
    if(token){
      let data = { token: token };
      axios.post(apiURL, data).then((res) => {
        this.username =  res.data.username
        this.Inlogin = res.data.login
      })
    }
  }
};
</script>