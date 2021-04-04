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

  <div class="container-fulid">
    <img src="https://drive.google.com/uc?export=view&id=1lw1o9JVs42xuZB_zly4zzdc6QurYrjW0" style="max-width: 100%">
  </div>

  <ul class="nav nav-pills nav-fill mt-1">
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
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-lg-2" v-for="(product,index) in products" :key="index" >
        <div class="card">
          <img :src="prefixIMGurl + product.img" alt="" />
          <div class="card-body">
            <h6 class="card-title">{{ product.PDname }}</h6>
            <h5 class="card-text" id="price" >{{ product.price.toLocaleString() }} THB</h5>
            <h6 class="card-text" id="price">{{priceInBTC(product.price)}} <img src="https://drive.google.com/uc?export=view&id=1ldi5YT6pk21W3SBj1dr0zggtlwPcKV3m" style="max-width: 9%"></h6>
            
          </div>
        </div>
      </div>
    </div>
  </div>
   
</template>




<script>
import axios from "axios";
import { checklogin } from "./js/verify";
import { BTCprice } from "./js/BTCprice";

export default {
  data() {
    return {
      username: "",
      Inlogin: false,
      products: null,
      prefixIMGurl: "https://drive.google.com/uc?export=view&id=",
      btc: null
    };
  },
  methods: {
    Logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    priceInBTC(thb){
      return  (thb/this.btc).toFixed(7)
    }
    
  },
  async created() {
    //checkLogin
    const { username, login } = await checklogin();
    this.Inlogin = login;
    this.username = username;
    //console.log(this.Inlogin+" "+this.username)

    //get product data
    const apiURL = "http://localhost:3000/product/getPD";
    axios.get(apiURL).then((res) => {
      this.products = res.data;
      //console.log(this.products[0].price)
    });
    //get BTC price
    this.btc =  await BTCprice();

  },
};
</script>
<style>
#price{
  
}
</style>
