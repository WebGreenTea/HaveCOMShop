<template>
  <!-- Nav bar -->
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
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
              <li><a href="" @click="Logout" class="dropdown-item">Logout</a></li>
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

  

  <div class="container mt-5">
    <h1 v-show="Inlogin">Hello {{ username }}</h1>
  </div>

  <ul class="nav nav-pills nav-fill">
    <li class="nav-item">
      <a href="#" class="nav-link active">สินค้าทั้งหมด</a>
    </li>
    <li class="nav-item">
      <a href="/CPU" class="nav-link">CPU</a>
    </li>
    <li class="nav-item">
      <a href="/RAM" class="nav-link">RAM</a>
    </li>
    <li class="nav-item">
      <a href="/VGA" class="nav-link">VGA</a>
    </li>
    <li class="nav-item">
      <a href="MainBoard" class="nav-link">MainBoard</a>
    </li>
    <li class="nav-item">
      <a href="/HDD-SSD" class="nav-link">HDD/SSD</a>
    </li>
    <li class="nav-item">
      <a href="/PSU" class="nav-link">PSU</a>
    </li>
    <li class="nav-item">
      <a href="/Case" class="nav-link">Case</a>
    </li>
    <li class="nav-item">
      <a href="/Cooler" class="nav-link">Cooler</a>
    </li>
    <li class="nav-item">
      <a href="/more" class="nav-link">อืนๆ</a>
    </li>
  </ul>
  <h1 style="text-align: center">TEST</h1>
</template>




<script>
//import axios from "axios";
import { checklogin } from "./js/verify";

export default {
  data() {
    return {
      username: "",
      Inlogin: false,
    };
  },
  methods: {
    Logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
  async created() {
    const { username, login } = await checklogin();
    this.Inlogin = login;
    this.username = username;
    //console.log(this.Inlogin+" "+this.username)
  },
};
</script>
